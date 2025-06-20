import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import React, { useCallback } from "react";

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

// Dot Button Component
const DotButton = ({ onClick, className }) => (
  <button type="button" onClick={onClick} className={className} />
);

const CustomerFeedback = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alok Singh",
      rating: 5,
      review:
        "One should definitely give a try especially afghani Chicken...food here is so good and mouth watering I have ordering and taking away from this place for last 6 and never had a complaint about food...Catering option is also worth to checkout",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 5,
      review:
        "Yummmm. Have eaten here a few times but seems like they have raised the bar with their Indian food. Still maintaining their authentic taste while adding modern twists. Absolutely love the atmosphere and service!",
    },
    {
      id: 3,
      name: "Raj Patel",
      rating: 5,
      review:
        "Amazing experience! The butter chicken was exceptional and the naan was perfectly baked. Staff is very friendly and the ambiance is perfect for family dining. Will definitely recommend to friends.",
    },
    {
      id: 4,
      name: "Emily Chen",
      rating: 5,
      review:
        "Best Indian restaurant in the area! Fresh ingredients, authentic flavors, and excellent presentation. The lunch buffet is incredible value for money. Love coming here for special occasions.",
    },
  ];

  const options = {
    align: "start",
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const [emblaRefMobile, emblaApiMobile] = useEmblaCarousel(options, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
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
    selectedIndex: selectedIndexMobile,
    scrollSnaps: scrollSnapsMobile,
    onDotButtonClick: onDotButtonClickMobile,
  } = useDotButton(emblaApiMobile, onNavButtonClick);

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
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-32"></div>
            <span className="mx-4 text-orange-400 text-sm tracking-wider font-medium">
              HAPPY CUSTOMERS
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-32"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Customers Feedback
          </h2>
        </div>

        {/* Main Content Grid - Desktop Only */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Static Image with Customer Avatars */}
          <div className="relative order-2 lg:order-1">
            {/* Main Restaurant Image */}
            <div className="relative">
              <img
                src="/images/Home/CustomerFeedback/person1.webp"
                alt="Happy customers dining at restaurant"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />
            </div>
          </div>

          {/* Right Side - Testimonial Carousel */}
          <div className="order-1 lg:order-2 relative">
            {/* Carousel Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="flex-none w-full">
                    <div className="space-y-8 px-4">
                      {/* Star Rating */}
                      <div className="flex items-center space-x-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={24}
                            className="text-orange-400 fill-current"
                          />
                        ))}
                        <span className="text-gray-400 text-lg ml-2">
                          ({testimonial.rating}/5)
                        </span>
                      </div>

                      {/* Testimonial Title */}
                      <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                        Awesome and delicious food
                      </h3>

                      {/* Review Text */}
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {testimonial.review}
                      </p>

                      {/* Divider */}
                      <div className="w-24 h-px bg-orange-400"></div>

                      {/* Customer Name */}
                      <h4 className="text-xl font-semibold text-white">
                        {testimonial.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Dot Indicators */}
        <div className="hidden lg:flex justify-center mt-8 space-x-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-orange-500 scale-125"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile Image */}
          <div className="mb-8">
            <img
              src="/images/Home/CustomerFeedback/person1.webp"
              alt="Happy customers dining at restaurant"
              className="w-full h-[300px] object-cover rounded-2xl"
            />
          </div>

          {/* Mobile Testimonial Carousel */}
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRefMobile}>
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div
                    key={`mobile-${testimonial.id}`}
                    className="flex-none w-full"
                  >
                    <div className="text-center space-y-6 bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                      <div className="flex justify-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className="text-orange-400 fill-current"
                          />
                        ))}
                        <span className="text-gray-400 ml-2">
                          ({testimonial.rating}/5)
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold">
                        Awesome and delicious food
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {testimonial.review}
                      </p>
                      <div className="w-16 h-px bg-orange-400 mx-auto"></div>
                      <h4 className="text-lg font-semibold text-white">
                        {testimonial.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Dot Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {scrollSnapsMobile.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClickMobile(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndexMobile
                      ? "bg-orange-500 scale-125"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
