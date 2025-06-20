import Link from "next/link";
import { useState } from "react";
import APP_CONSTANTS from "../../constants/app_constants";
import APP_URL from "../../constants/url";
import StoreOpeningPopup from "../ui/Popup";
import Description from "../../constants/descriptions";

const WhyPeopleLoveUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [pendingUrl, setPendingUrl] = useState("");

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

  const features = [
    {
      id: 1,
      title: Description.whyPeopleLikeUs.features[0].title,
      description: Description.whyPeopleLikeUs.features[0].description,
      icon: (
        <div className="relative">
          {/* Hand with stars icon */}
          <svg
            className="w-12 h-12 text-orange-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <div className="absolute -top-1 -right-1">
            <svg
              className="w-4 h-4 text-green-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <div className="absolute -bottom-1 -left-1">
            <svg
              className="w-3 h-3 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: Description.whyPeopleLikeUs.features[1].title,
      description: Description.whyPeopleLikeUs.features[1].description,
      icon: (
        <div className="relative">
          {/* Ice cream/dessert with sparkles */}
          <svg
            className="w-12 h-12 text-orange-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          <div className="absolute -top-2 -left-2">
            <svg
              className="w-3 h-3 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div className="absolute -top-1 -right-2">
            <svg
              className="w-2 h-2 text-pink-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <div className="absolute -bottom-2 -right-1">
            <svg
              className="w-3 h-3 text-purple-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: Description.whyPeopleLikeUs.features[2].title,
      description: Description.whyPeopleLikeUs.features[2].description,
      icon: (
        <div className="relative">
          {/* Layered ingredients/pancakes */}
          <svg
            className="w-12 h-12 text-orange-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <div className="absolute -top-1 -right-1">
            <svg
              className="w-4 h-4 text-green-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <div className="absolute -bottom-1 -left-1">
            <svg
              className="w-4 h-4 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <section
        className="py-16 relative overflow-hidden -mt-1"
        style={{
          backgroundColor: "#000",
          backgroundImage: `url("/images/Home/WhyPeopleLikeUs/background.webp")`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-32"></div>
                <span className="mx-4 text-orange-400 text-sm tracking-wider font-medium">
                  {Description.whyPeopleLikeUs.sectionLabel}
                </span>
                <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-32"></div>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  {Description.whyPeopleLikeUs.headerDescription}
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-black/60 border border-gray-700 rounded-2xl p-8 hover:border-orange-400/50 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-800/50 rounded-full group-hover:bg-orange-400/10 transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-4 group-hover:text-orange-400 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA Section */}
            <div className="text-center mt-16">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {Description.whyPeopleLikeUs.cta.title}
                </h3>
                <p className="text-gray-300 mb-8 text-lg">
                  {Description.whyPeopleLikeUs.cta.description}
                </p>
                <Link
                  href={APP_URL.book_table}
                  onClick={(e) => handleNavigation(e, APP_URL.book_table)}
                  className="btn-primary text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-2xl inline-block"
                >
                  {Description.whyPeopleLikeUs.cta.button}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-20">
          <svg
            className="w-8 h-8 text-orange-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <svg
            className="w-6 h-6 text-orange-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
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

export default WhyPeopleLoveUs;
