import Link from "next/link";
import APP_URL from "../../constants/url";

const PlanningAnEvent = () => {
  return (
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
                PLANNING AN EVENT
              </h2>
            </div>

            {/* Event Types */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-orange-400">
                A WORK LUNCH / BIRTHDAY CELEBRATION / PRIVATE EVENT
              </h3>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-xl text-gray-300 leading-relaxed">
                CATERING WE'RE HERE FOR YOU! BOOK FOR YOUR BIRTHDAY EVENTS OR
                CORPORATE EVENTS OR INQUIRE ABOUT EVENT CATERING.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-300">
                  Professional event planning and coordination
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-300">
                  Customized menu options for all dietary requirements
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-300">
                  Full-service catering for events of all sizes
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-300">
                  Complete setup and decoration services available
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={APP_URL.event}
                className="btn-primary text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-2xl inline-block"
              >
                Send Event Enquiry
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 opacity-20">
        <svg
          className="w-8 h-8 text-orange-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 opacity-20">
        <svg
          className="w-6 h-6 text-orange-400"
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
  );
};

export default PlanningAnEvent;
