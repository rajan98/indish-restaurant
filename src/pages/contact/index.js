import { Globe, Home, Mail, Phone } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import EachPageLayout from "../../components/layout/EachPageLayout";
import APP_CONSTANTS from "../../constants/app_constants";

export default function index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Head>
        <title>{`Contact Us | ${APP_CONSTANTS.company_name_title_case}`}</title>
      </Head>
      <EachPageLayout title={"Contact"}>
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
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Contact Information */}
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <Home size={24} className="text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Address
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {APP_CONSTANTS.full_address_line1}
                      <br />
                      {APP_CONSTANTS.full_address_line2}
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <Phone size={24} className="text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Phone
                    </h3>
                    <div className="space-y-1">
                      <p className="text-gray-300">
                        <Link
                          href={`tel:${APP_CONSTANTS.phone_number1}`}
                          className="hover:text-primary-400 transition-colors duration-300"
                        >
                          {APP_CONSTANTS.phone_number1}
                        </Link>
                      </p>
                      <p className="text-gray-300">
                        <Link
                          href={`tel:${APP_CONSTANTS.phone_number2}`}
                          className="hover:text-primary-400 transition-colors duration-300"
                        >
                          {APP_CONSTANTS.phone_number2}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <Mail size={24} className="text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Email
                    </h3>
                    <p className="text-gray-300">
                      <Link
                        href={`mailto:${APP_CONSTANTS.email}`}
                        className="hover:text-primary-400 transition-colors duration-300"
                      >
                        {APP_CONSTANTS.email}
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <Globe size={24} className="text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Website
                    </h3>
                    <p className="text-gray-300">
                      <Link
                        href={APP_CONSTANTS.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-400 transition-colors duration-300"
                      >
                        {APP_CONSTANTS.website_url}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    GET IN TOUCH
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form to send us a message and we'll get back to
                    you soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 placeholder-gray-500"
                      />
                    </div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number*"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject *"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 placeholder-gray-500"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message*"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 resize-vertical text-gray-900 placeholder-gray-500"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="bg-gray-800 hover:bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 opacity-20">
            <svg
              className="w-8 h-8 text-primary-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 opacity-20">
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
              .grid-cols-1 {
                grid-template-columns: repeat(1, minmax(0, 1fr));
              }
            }
          `}</style>
        </section>
      </EachPageLayout>
    </>
  );
}
