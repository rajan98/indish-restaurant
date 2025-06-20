import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import APP_CONSTANTS from "../../constants/app_constants";
import APP_URL from "../../constants/url";
import SiteLogo from "../ui/SiteLogo";
import StoreOpeningPopup from "../ui/Popup";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [pendingUrl, setPendingUrl] = useState("");

  const handleNavigation = (e, href) => {
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

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: APP_CONSTANTS.facebook,
      label: "Facebook",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: APP_CONSTANTS.instagram,
      label: "Instagram",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: APP_CONSTANTS.twitter,
      label: "Twitter",
    },
  ];

  const quickLinks = [
    { name: "Home", href: APP_URL.home },
    { name: "About", href: APP_URL.about },
    { name: "Menu", href: APP_URL.menu },
    { name: "Events", href: APP_URL.event },
    { name: "Contact", href: APP_URL.contact },
  ];

  const services = [
    { name: "Reserve a Table", href: APP_URL.book_table },
    { name: "Order Online", href: APP_URL.order },
    { name: "Event Enquiry", href: APP_URL.event },
  ];

  return (
    <>
      <footer id="contact" className="bg-black text-white">
        <div className="container-custom">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center">
                <SiteLogo />
              </div>
              <div className="flex space-x-4 mt-5">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="bg-gray-800 p-3 rounded-full hover:bg-primary-500 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavigation(e, link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      onClick={(e) => handleNavigation(e, service.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Shop 1/167 Pacific Hwy
                      <br />
                      Hornsby NSW 2077
                      <br />
                      Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <Link
                    href={`tel:${APP_CONSTANTS.phone_number1}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {APP_CONSTANTS.phone_number1}
                  </Link>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <Link
                    href={`mailto:${APP_CONSTANTS.email}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {APP_CONSTANTS.email}
                  </Link>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary-400 mt-1" />
                  <div className="text-gray-300">
                    <p className="font-medium">Opening Hours:</p>
                    <p>Mon - Sun: 5:00 PM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()}{" "}
                {`${APP_CONSTANTS.company_name_title_case} Modern Indian Cuisine. All
                rights reserved.`}
              </p>
              <div className="flex space-x-6 text-sm">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300 z-40"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </footer>

      {/* Store Opening Popup */}
      <StoreOpeningPopup
        isOpen={showPopup}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};

export default Footer;
