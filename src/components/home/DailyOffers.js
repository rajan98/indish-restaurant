import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useState } from "react";
import APP_CONSTANTS from "../../constants/app_constants";
import Description from "../../constants/descriptions";
import APP_URL from "../../constants/url";
import StoreOpeningPopup from "../ui/Popup";

const DailyOffers = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [pendingUrl, setPendingUrl] = useState("");

  const options = {
    align: "start",
    loop: true,
    slidesToScroll: 1,
  };

  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const handleNavigation = (e, href) => {
    if (!APP_CONSTANTS.opened) {
      const externalLinks = [APP_URL.book_table];

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
      <section className="pt-16 bg-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image Carousel */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Carousel */}
                <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
                  <div className="flex">
                    {Description.dailyOffer.carouselImages.map((item) => (
                      <div key={item.id} className="flex-none w-full">
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={item.alt}
                            className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl"
                          />
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Daily Offer Header */}
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-primary-400 text-sm tracking-wider font-medium">
                    {Description.dailyOffer.dailyOfferLabel}
                  </span>
                  <div className="ml-4 h-px bg-gradient-to-r from-primary-400 to-transparent w-24"></div>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  {Description.dailyOffer.mainOffer}
                </h2>
              </div>

              {/* Opening Hours Dinner */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  {Description.dailyOffer.openingHours.title}
                </h3>
                <p className="text-xl text-gray-300">
                  {Description.dailyOffer.openingHours.time}
                </p>
                <p className="text-xl text-gray-300">
                  {Description.dailyOffer.openingHours.time2}
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex flex-col space-y-2">
                  <Link
                    href={`tel:${APP_CONSTANTS.phone_number1}`}
                    className="text-lg text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {APP_CONSTANTS.phone_number1}
                  </Link>
                  {APP_CONSTANTS.phone_number2 && (
                    <Link
                      href={`tel:${APP_CONSTANTS.phone_number2}`}
                      className="text-lg text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      {APP_CONSTANTS.phone_number2}
                    </Link>
                  )}
                  <Link
                    href={`mailto:${APP_CONSTANTS.email}`}
                    className="text-lg text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {APP_CONSTANTS.email}
                  </Link>
                </div>
              </div>

              {/* Reserve Table Button */}
              <div className="pt-4">
                <Link
                  href={APP_URL.book_table}
                  onClick={(e) => handleNavigation(e, APP_URL.book_table)}
                  className="btn-primary text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-2xl inline-block"
                >
                  {Description.dailyOffer.reserveButton}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section with Parallax Background */}
        <div
          className="mt-24 md:mt-32 relative py-10 md:py-24"
          style={{
            backgroundColor: "#000",
            backgroundImage: `url("/images/Home/DailyOffer/parallx.webp")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 max-w-7xl">
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-3 gap-8 items-center">
                {/* Left - Main Heading */}
                <div className="text-white">
                  <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                    {Description.dailyOffer.features.mainHeading}
                  </h2>
                </div>

                {/* Center - Quality Food */}
                <div className="bg-black/40 border border-primary-400/30 rounded-xl p-6 hover:border-primary-400/60 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-400/20 rounded-full flex items-center justify-center border-2 border-primary-400">
                      <svg
                        className="w-6 h-6 text-primary-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {Description.dailyOffer.features.qualityFood.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    "{Description.dailyOffer.features.qualityFood.description}"
                  </p>
                </div>

                {/* Right - Perfect Taste */}
                <div className="bg-black/40 border border-primary-400/30 rounded-xl p-6 hover:border-primary-400/60 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-400/20 rounded-full flex items-center justify-center border-2 border-primary-400">
                      <svg
                        className="w-6 h-6 text-primary-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {Description.dailyOffer.features.perfectTaste.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    "{Description.dailyOffer.features.perfectTaste.description}"
                  </p>
                </div>
              </div>

              {/* Mobile Layout - Stacked */}
              <div className="md:hidden space-y-6">
                {/* Main Heading */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white leading-tight">
                    {Description.dailyOffer.features.mainHeading}
                  </h2>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {/* Quality Food */}
                  <div className="bg-black/40 border border-primary-400/30 rounded-xl p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary-400/20 rounded-full flex items-center justify-center border-2 border-primary-400 flex-shrink-0 mt-1">
                        <svg
                          className="w-5 h-5 text-primary-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {Description.dailyOffer.features.qualityFood.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          "
                          {
                            Description.dailyOffer.features.qualityFood
                              .description
                          }
                          "
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Perfect Taste */}
                  <div className="bg-black/40 border border-primary-400/30 rounded-xl p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary-400/20 rounded-full flex items-center justify-center border-2 border-primary-400 flex-shrink-0 mt-1">
                        <svg
                          className="w-5 h-5 text-primary-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {Description.dailyOffer.features.perfectTaste.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          "
                          {
                            Description.dailyOffer.features.perfectTaste
                              .description
                          }
                          "
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          @media (max-width: 1023px) {
            .order-1 {
              order: 1;
            }
            .order-2 {
              order: 2;
            }
          }
        `}</style>
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

export default DailyOffers;
