import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useCallback } from "react";
import APP_URL from "../../constants/url";

// Dot Buttons Hook
const useDotButton = (emblaApi, onButtonClick) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

// Arrow Buttons Hook
const usePrevNextButtons = (emblaApi, onButtonClick) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

// Dot Button Component
const DotButton = ({ onClick, className }) => (
  <button type="button" onClick={onClick} className={className} />
);

// Arrow Button Components
const PrevButton = ({ onClick, disabled }) => (
  <button
    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-primary-500 text-white p-3 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    <ChevronLeft size={24} />
  </button>
);

const NextButton = ({ onClick, disabled }) => (
  <button
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-primary-500 text-white p-3 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    <ChevronRight size={24} />
  </button>
);

const PhotoGallery = () => {
  const galleryImages = [
    {
      id: 1,
      image: "/images/Home/PhotoGallery/1.webp",
      alt: "Paneer Tikka with colorful presentation",
    },
    {
      id: 2,
      image: "/images/Home/PhotoGallery/2.webp",
      alt: "Gourmet platter with artistic sauce drizzle",
    },
    {
      id: 3,
      image: "/images/Home/PhotoGallery/3.webp",
      alt: "Elegant dessert presentation with garnish",
    },
    {
      id: 4,
      image: "/images/Home/PhotoGallery/4.webp",
      alt: "Traditional Indian curry with rice",
    },
    {
      id: 5,
      image: "/images/Home/PhotoGallery/5.webp",
      alt: "Tandoor grilled specialties",
    },
  ];

  const options = {
    align: "center",
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="py-16 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent w-32"></div>
            <span className="mx-4 text-primary-400 text-sm tracking-wider font-medium">
              FOOD ITEM
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent w-32"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

          {/* Carousel Viewport */}
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {galleryImages.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2"
                >
                  <div className="relative group cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-[300px] md:h-[400px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Hover Content */}
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">{item.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-primary-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href={APP_URL.gallery}
            className="btn-primary text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-2xl inline-block"
          >
            View all photos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
