import Link from "next/link";
import APP_URL from "../../constants/url";
import Description from "../../constants/descriptions";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
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
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Subtitle */}
          <p className="text-primary-300 text-lg md:text-xl font-medium mb-4 tracking-wide">
            {Description.hero.subtitle}
          </p>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-shadow">
            {Description.hero.title.main}{" "}
            <span className="text-primary-400">{Description.hero.title.highlighted}</span>
          </h2>

          {/* Description */}
          <p className="text-sm md:text-xl lg:text-2xl mb-8 leading-relaxed text-gray-200 max-w-3xl mx-auto">
            {Description.hero.description}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={APP_URL.order}
              className="btn-primary text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-2xl"
            >
              {Description.hero.primaryButton}
            </Link>
            <Link
              href={APP_URL.book_table}
              className="btn-secondary text-sm md:text-lg px-6 md:px-8 py-3 md:py-4"
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
  );
};

export default HeroSection;