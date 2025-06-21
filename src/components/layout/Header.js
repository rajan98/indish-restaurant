import { MapPin, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import APP_CONSTANTS from "../../constants/app_constants";
import APP_URL from "../../constants/url";
import StoreOpeningPopup from "../ui/Popup";
import SiteLogo from "../ui/SiteLogo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [pendingUrl, setPendingUrl] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle navigation with store opening check
  const handleNavigation = (e, href) => {
    // Only show popup for external links (order, book_table, event, contact) when store is closed
    if (!APP_CONSTANTS.opened) {
      const externalLinks = [
        APP_URL.order,
        APP_URL.book_table,
        APP_URL.event,
        APP_URL.contact,
      ];

      if (externalLinks.includes(href)) {
        e.preventDefault();
        setPendingUrl(href);
        setShowPopup(true);
        setIsMenuOpen(false); // Close mobile menu if open
        return;
      }
    }

    // For internal links or when store is open, proceed normally
    setIsMenuOpen(false);
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

  const navItems = [
    { name: "Home", href: APP_URL.home },
    { name: "Menu", href: APP_URL.menu },
    { name: "Reserve a Table", href: APP_URL.book_table },
    { name: "Order Online (10% Off)", href: APP_URL.order },
    { name: "Events", href: APP_URL.event },
    { name: "Contact", href: APP_URL.contact },
    { name: "Gallery", href: APP_URL.gallery },
    { name: "About Us", href: APP_URL.about },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Top Bar - Desktop Only */}
        <div
          className={`border-b border-primary-200/20 ${
            isScrolled ? "hidden" : "hidden md:block"
          }`}
        >
          <div className="container-custom">
            <div className="flex justify-between items-center py-2 text-sm">
              <div className="flex items-center space-x-6 text-white">
                <div className="flex items-center space-x-2">
                  <Phone size={14} />
                  <span>{APP_CONSTANTS.phone_number1}</span>
                  <span>{APP_CONSTANTS.phone_number2}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={14} />
                  <span>{APP_CONSTANTS.short_location}</span>
                </div>
              </div>
              <div className="text-white">
                <span>{`Open: ${APP_CONSTANTS.opening}`}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <SiteLogo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled
                      ? "text-white hover:text-primary-400"
                      : "text-white hover:text-primary-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              className={`lg:hidden p-2 rounded-lg ${"text-white"}`}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Full Screen Mobile Menu */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Slide-in Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-black text-white z-[70] lg:hidden overflow-y-auto transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center">
            <SiteLogo />
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="py-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavigation(e, item.href)}
              className={`block px-6 py-4 text-lg font-medium border-b border-gray-800/50 hover:bg-gray-900 transition-colors duration-300 ${
                item.name === "Order Online (10% Off)"
                  ? "text-primary-400"
                  : "text-white hover:text-primary-300"
              }`}
            >
              {item.name}
              {item.name === "Menu" && <span className="float-right">→</span>}
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-800 mt-auto">
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>{APP_CONSTANTS.phone_number1}</span>
              <span>{APP_CONSTANTS.phone_number2}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>{APP_CONSTANTS.short_location}</span>
            </div>
            <div className="text-xs text-gray-400 mt-2">
              {`Open: ${APP_CONSTANTS.opening}`}
            </div>
          </div>
        </div>
      </div>

      {/* Store Opening Popup */}
      <StoreOpeningPopup
        isOpen={showPopup}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};

export default Header;
