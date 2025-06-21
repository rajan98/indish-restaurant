import Link from "next/link";
import APP_CONSTANTS from "../../constants/app_constants";
import Description from "../../constants/descriptions";
import APP_URL from "../../constants/url";

const AboutSection = () => {
  return (
    <section
      className="relative min-h-screen py-20 overflow-hidden -mt-1"
      style={{
        backgroundColor: "#000",
        backgroundImage: `url('/images/Home/AboutSection/Background.webp')`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.55) 80%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Side - Images */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Back Image */}
              <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden lg:right-[120px]">
                <img
                  src="/images/Home/AboutSection/AboutFood1.webp"
                  alt="Traditional Indian dish served with modern presentation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight">
                {`${APP_CONSTANTS.company_name_title_case.toUpperCase()}`}
                <br />
                <span className="text-primary-400">{Description.about.title.highlighted}</span>
              </h2>

              <p className="text-base lg:text-lg text-gray-100 leading-relaxed mb-5 font-bold">
                {`" ${Description.about.description} "`}
              </p>
               <p className="text-base lg:text-lg text-gray-100 leading-relaxed mb-10">
                {Description.about.description2}
              </p>

              <Link
                href={APP_URL.about}
                className="btn-primary text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-2xl inline-block"
              >
                {Description.about.button}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;