import { useState } from "react";
import EachPageLayout from "../../components/layout/EachPageLayout";
import APP_CONSTANTS from "../../constants/app_constants";
import Head from "next/head";

const index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventEnquiry: "",
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
    // Handle form submission logic here
    console.log("Event enquiry submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <>
      <Head>
        <title>{`Enquiry | ${APP_CONSTANTS.company_name_title_case}`}</title>
      </Head>
      <EachPageLayout title={"Enquiry"}>
        <section className="py-16 bg-black text-white relative overflow-hidden min-h-screen flex items-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            {/* Centered Event Enquiry Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl mx-auto">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  For Event Enquiry
                </h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form to send us a message and we'll get back to
                  you soon.
                </p>
              </div>

              {/* Event Enquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 placeholder-gray-500 text-lg"
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
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 placeholder-gray-500 text-lg"
                    />
                  </div>
                </div>

                {/* Phone and Event Enquiry Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number*"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 placeholder-gray-500 text-lg"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="eventEnquiry"
                      placeholder="Event-Enquiry *"
                      value={formData.eventEnquiry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 placeholder-gray-500 text-lg"
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
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 resize-vertical text-gray-900 placeholder-gray-500 text-lg"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="bg-gray-200 hover:bg-orange-500 hover:text-white text-gray-800 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Submit Now
                  </button>
                </div>
              </form>

              {/* Additional Info */}
              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-sm">
                  We specialize in corporate events, birthday celebrations, and
                  private dining experiences.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Our team will contact you within 24 hours to discuss your
                  event requirements.
                </p>
              </div>
            </div>

            {/* Event Types */}
            <div className="mt-12 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">
                    Corporate Events
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Business meetings, conferences, team building events
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">
                    Birthday Celebrations
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Private parties, family gatherings, special occasions
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">
                    Private Dining
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Intimate dinners, romantic dates, exclusive experiences
                  </p>
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
          <div className="absolute top-20 right-20 opacity-20">
            <svg
              className="w-6 h-6 text-orange-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <div className="absolute bottom-10 left-20 opacity-20">
            <svg
              className="w-5 h-5 text-orange-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 opacity-20">
            <svg
              className="w-4 h-4 text-orange-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>

          {/* Custom Styles */}
          <style jsx>{`
            @media (max-width: 767px) {
              .grid-cols-1 {
                grid-template-columns: repeat(1, minmax(0, 1fr));
              }
            }
          `}</style>
        </section>
      </EachPageLayout>
    </>
  );
};

export default index;
