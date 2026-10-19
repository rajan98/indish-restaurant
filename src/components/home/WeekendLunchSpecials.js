import { Calendar, Clock, Utensils, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import APP_CONSTANTS from "../../constants/app_constants";
import Description from "../../constants/descriptions";
import APP_URL from "../../constants/url";
import StoreOpeningPopup from "../ui/Popup";

const WeekendLunchSpecials = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [pendingUrl, setPendingUrl] = useState("");

  const specialsData = Description.weekendLunchSpecials;

  const handleNavigation = (e, href) => {
    if (!APP_CONSTANTS.opened) {
      const blockedLinks = [APP_URL.order];

      if (blockedLinks.includes(href)) {
        e.preventDefault();
        setPendingUrl(href);
        setShowPopup(true);
        return;
      }
    }
  };

  const handleConfirm = () => {
    setShowPopup(false);
    window.location.href = pendingUrl;
    setPendingUrl("");
  };

  const handleCancel = () => {
    setShowPopup(false);
    setPendingUrl("");
  };

  return (
    <>
      <section
        id="weekend-lunch-specials"
        className="py-20 md:py-28 bg-[#0a0a0a] text-white relative overflow-hidden"
      >
        {/* Subtle Ambient Red Glow Accents */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Delicate Background Lattice Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            {/* Eyebrow */}
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent w-24 sm:w-36"></div>
              <span className="mx-4 text-primary-500 text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase flex items-center gap-1.5">
                {specialsData.sectionLabel}
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent w-24 sm:w-36"></div>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-5 tracking-tight text-white">
              {specialsData.mainHeading}
            </h2>

            {/* Availability Highlight Pill */}
            <div className="inline-flex items-center justify-center gap-3 sm:gap-4 bg-neutral-900/60 border border-neutral-800 rounded-full px-5 sm:px-6 py-2 text-xs sm:text-sm text-neutral-300 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-primary-500" />
                <span>{specialsData.availability.days}</span>
              </div>
              <span className="text-neutral-600">•</span>
              <div className="flex items-center gap-2 text-neutral-200">
                <Clock size={15} className="text-primary-500" />
                <span>{specialsData.availability.hours}</span>
              </div>
            </div>

            {/* Short Intro Text */}
            {specialsData.introText ? (
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
                {specialsData.introText}
              </p>
            ) : null}
          </div>

          {/* Six Items Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {specialsData.items.map((item) => (
              <div
                key={item.id}
                className="group relative bg-gradient-to-b from-[#141414] to-[#0c0c0c] rounded-2xl overflow-hidden border border-neutral-800 hover:border-primary-500/50 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(255,0,56,0.18)] flex flex-col h-full hover:-translate-y-1"
              >
                {/* Image Container with Zoom & Vignette */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30 opacity-90" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md border border-neutral-700/80 group-hover:border-primary-500/50 text-white text-xs font-medium px-3 py-1 rounded-full transition-colors duration-300 flex items-center gap-1.5 shadow-lg">
                    <Utensils size={12} className="text-primary-500" />
                    <span>{item.category}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Dish Title */}
                    <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300 leading-snug">
                      {item.name}
                    </h3>

                    {/* Dish Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Order Button */}
                  <Link
                    href={APP_URL.order}
                    onClick={(e) => handleNavigation(e, APP_URL.order)}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2.5 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mt-auto shadow-md"
                  >
                    Order Now
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action Section */}
          <div className="mt-16 md:mt-20 text-center relative">
            <div className="max-w-2xl mx-auto bg-gradient-to-b from-neutral-900/80 to-black/90 border border-neutral-800/90 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              {/* Subtle Corner Accents */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-3">
                {specialsData.cta.title}
              </h3>
              <p className="text-gray-300 text-base mb-8 max-w-lg mx-auto leading-relaxed">
                {specialsData.cta.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={APP_URL.book_table}
                  onClick={(e) => handleNavigation(e, APP_URL.book_table)}
                  className="w-full sm:w-auto btn-primary text-sm sm:text-base font-semibold px-8 py-3.5 shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>{specialsData.cta.buttonText}</span>
                  <ChevronRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href={APP_URL.menu}
                  className="w-full sm:w-auto btn-secondary text-sm sm:text-base font-semibold px-8 py-3.5 flex items-center justify-center gap-2"
                >
                  <span>{specialsData.cta.menuButtonText}</span>
                </Link>
              </div>

              {/* Service timing notice footer */}
              {specialsData.cta.serviceNotice && (
                <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-neutral-400">
                  <Clock size={14} className="text-primary-500" />
                  <span>{specialsData.cta.serviceNotice}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          .group:hover .scale-108 {
            transform: scale(1.08);
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

export default WeekendLunchSpecials;
