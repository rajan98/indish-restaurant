import Link from "next/link";
import { useState } from "react";
import APP_CONSTANTS from "../../constants/app_constants";
import Description from "../../constants/descriptions";
import APP_URL from "../../constants/url";
import StoreOpeningPopup from "../ui/Popup";

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [pendingUrl, setPendingUrl] = useState("");

  const handleNavigation = (e, href) => {
    if (!APP_CONSTANTS.opened) {
      const externalLinks = [APP_URL.order, APP_URL.book_table];

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
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Background Video */}
        <div className="absolute inset-0">
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            preload="auto"
            poster="/images/Home/HeroSection/hero-fallback.webp"
          >
            <source src="/videos/hero.webm" type="video/webm" />
            <source src="/videos/hero-compressed.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <img
            className="w-full h-full object-cover object-[65%_50%] md:object-center"
            src="/images/Hero/hero.webp"
          />
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            {/* Subtitle */}
            <p className="text-white text-lg md:text-xl font-medium mb-4 tracking-wide">
              {Description.hero.subtitle}
            </p>

            {/* Main Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-shadow">
              {Description.hero.title.main}{" "}
              <span className="text-white">{Description.hero.title.highlighted}</span>
            </h2>

            {/* Description */}
            <p className="text-sm md:text-xl lg:text-2xl mb-8 leading-relaxed text-gray-200 max-w-3xl mx-auto">
              {Description.hero.description}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative inline-block">
                {/* 10% OFF Badge */}
                <div
                  className="absolute -top-3 -right-3 bg-yellow-400 text-black font-bold text-[10px] md:text-xs px-2 py-1 rounded-full shadow-lg z-10"
                  style={{
                    animation: 'gentle-bounce 2s ease-in-out infinite'
                  }}
                >
                  10% OFF
                </div>
                <Link
                  href={APP_URL.order}
                  onClick={(e) => handleNavigation(e, APP_URL.order)}
                  className="btn-primary text-base md:text-lg px-8 md:px-8 py-4 md:py-4 shadow-2xl inline-block"
                >
                  {Description.hero.primaryButton}
                </Link>
              </div>
              <Link
                href={APP_URL.book_table}
                onClick={(e) => handleNavigation(e, APP_URL.book_table)}
                className="btn-secondary text-base md:text-lg px-8 md:px-8 py-4 md:py-4"
              >
                {Description.hero.secondaryButton}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </div>
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

export default HeroSection;