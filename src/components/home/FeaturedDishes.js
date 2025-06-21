import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import APP_CONSTANTS from "../../constants/app_constants";
import Description from "../../constants/descriptions";
import APP_URL from "../../constants/url";
import StoreOpeningPopup from "../ui/Popup";

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

const PrevButton = ({ onClick, disabled }) => (
  <button
    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-primary-500 text-white p-3 rounded-full transition-all duration-300 -ml-6 disabled:opacity-50 disabled:cursor-not-allowed"
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    <svg className="w-6 h-6" viewBox="0 0 532 532">
      <path
        fill="currentColor"
        d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
      />
    </svg>
  </button>
);

const NextButton = ({ onClick, disabled }) => (
  <button
    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-primary-500 text-white p-3 rounded-full transition-all duration-300 -mr-6 disabled:opacity-50 disabled:cursor-not-allowed"
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    <svg className="w-6 h-6" viewBox="0 0 532 532">
      <path
        fill="currentColor"
        d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
      />
    </svg>
  </button>
);

const FeaturedDishes = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [pendingUrl, setPendingUrl] = useState("");

  const options = {
    align: "start",
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

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  const handleNavigation = (e, href) => {
    if (!APP_CONSTANTS.opened) {
      const externalLinks = [APP_URL.order];

      if (externalLinks.includes(href)) {
        e.preventDefault();
        setPendingUrl(href);
        setShowPopup(true);
        return;
      }
    }
  };

  // Handle popup confirmation
  const handleConfirm = () => {
    setShowPopup(false);
    window.location.href = pendingUrl;
    setPendingUrl("");
  };

  // Handle popup cancellation
  const handleCancel = () => {
    setShowPopup(false);
    setPendingUrl("");
  };

  return (
    <>
      <section className="py-16 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-primary-50 to-transparent w-32"></div>
              <span className="mx-4 text-primary-50 text-sm tracking-wider font-medium">
                FOOD MENU
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-primary-50 to-transparent w-32"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Specials Menu
            </h2>
          </div>

          {/* Embla Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />

            {/* Carousel Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {Description.featuredFood.map((item) => (
                  <div
                    key={item.id}
                    className="flex-none w-full sm:w-1/2 lg:w-1/4 px-3"
                  >
                    <div className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-primary-500/30 transition-all duration-300 group h-full">
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3 bg-primary-500 text-white px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <Star size={14} fill="currentColor" />
                          {item.rating}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-50 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Pricing */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-gray-500 line-through text-sm">
                            {item.originalPrice}
                          </span>
                          <span className="text-primary-50 font-bold text-xl">
                            {item.price}
                          </span>
                        </div>

                        {/* Order Button */}
                        <Link
                          href={APP_URL.order}
                          onClick={(e) => handleNavigation(e, APP_URL.order)}
                          className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                        >
                          Order Now
                          <ChevronRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Styles */}
          <style jsx>{`
            .line-clamp-3 {
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          `}</style>
        </div>
      </section>

      {/* Store Opening Popup */}
      <StoreOpeningPopup
        isOpen={showPopup}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};

export default FeaturedDishes;
