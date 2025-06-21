import Link from "next/link";
import { useState } from "react";
import APP_CONSTANTS from "../../constants/app_constants";
import Description from "../../constants/descriptions";
import APP_URL from "../../constants/url";
import StoreOpeningPopup from "../ui/Popup";

const PlanningAnEvent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [pendingUrl, setPendingUrl] = useState("");

  const handleNavigation = (e, href) => {
    if (!APP_CONSTANTS.opened) {
      const externalLinks = [APP_URL.event];

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
            {/* Left Side - Event Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/images/Home/PlanningEvent/image.webp"
                  alt="Birthday party setup with Winnie the Pooh theme and colorful balloons"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                {/* Overlay gradient for better text visibility if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Main Heading */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  {Description.planningEvent.mainHeading}
                </h2>
              </div>

              {/* Event Types */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary-400">
                  {Description.planningEvent.eventTypes}
                </h3>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-xl text-gray-300 leading-relaxed">
                  {Description.planningEvent.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {Description.planningEvent.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href={APP_URL.event}
                  onClick={(e) => handleNavigation(e, APP_URL.event)}
                  className="btn-primary text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-2xl inline-block"
                >
                  {Description.planningEvent.button}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 opacity-20">
          <svg
            className="w-8 h-8 text-primary-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-10 opacity-20">
          <svg
            className="w-6 h-6 text-primary-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
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

export default PlanningAnEvent;
