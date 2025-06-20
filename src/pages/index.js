import Head from "next/head";
import AboutSection from "../components/home/AboutSection";
import CustomerFeedback from "../components/home/CustomerFeedback";
import DailyOffers from "../components/home/DailyOffers";
import FeaturedDishes from "../components/home/FeaturedDishes";
import HeroSection from "../components/home/HeroSection";
import PhotoGallery from "../components/home/PhotoGallery";
import PlanningAnEvent from "../components/home/PlanningEvent";
import WhyPeopleLoveUs from "../components/home/WhyPeopleLikeUs";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ParallexBackground from "../components/ui/ParallexBackground";
import APP_CONSTANTS from "../constants/app_constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Home | ${APP_CONSTANTS.company_name_title_case}`}</title>
        <meta
          name="description"
          content="Experience the evolution of Indish at Indish. Modern Indian restaurant in Hornsby offering authentic flavors with contemporary innovation. Book your table today!"
        />
        <meta
          name="keywords"
          content="Indian restaurant, modern Indish, Hornsby restaurant, authentic Indian food, contemporary Indian dining"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={APP_CONSTANTS.website_url} />
        <meta
          property="og:title"
          content={`${APP_CONSTANTS.company_name_title_case} - Modern Indian Cuisine`}
        />
        <meta
          property="og:description"
          content="Inspired Indish, crafted with modern mastery for an unforgettable dining experience."
        />
        <meta
          property="og:image"
          content={`${APP_CONSTANTS.full_website_url}images/logo.webp`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={APP_CONSTANTS.full_website_url} />
        <meta
          property="twitter:title"
          content={`${APP_CONSTANTS.company_name_title_case} - Modern Indian Cuisine`}
        />
        <meta
          property="twitter:description"
          content="Inspired Indish, crafted with modern mastery for an unforgettable dining experience."
        />
        <meta
          property="twitter:image"
          content={`${APP_CONSTANTS.full_website_url}images/logo.webp`}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: APP_CONSTANTS.company_name_title_case,
              image: "/images/restaurant-hero.webp",
              description:
                "Modern Indian restaurant offering authentic flavors with contemporary innovation",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shop 1/167 Pacific Hwy",
                addressLocality: "Hornsby",
                addressRegion: "NSW",
                postalCode: "2077",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -33.7047,
                longitude: 151.0982,
              },
              telephone: "+61294777799",
              openingHours: "Mo-Su 17:00-22:00",
              servesCuisine: "Indian",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "150",
              },
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />

        <main>
          <HeroSection />
          <AboutSection />
          <ParallexBackground imageUrl={"/images/Home/Parallex/1.webp"} />
          <FeaturedDishes />
          <ParallexBackground imageUrl={"/images/Home/Parallex/2.webp"} />
          <DailyOffers />
          <ParallexBackground imageUrl={"/images/Home/Parallex/3.webp"} />
          <WhyPeopleLoveUs />
          <PhotoGallery />
          <ParallexBackground imageUrl={"/images/Home/Parallex/1.webp"} />
          <PlanningAnEvent />
          <ParallexBackground imageUrl={"/images/Home/Parallex/3.webp"} />
          <CustomerFeedback />
          <ParallexBackground imageUrl={"/images/Home/Parallex/2.webp"} />
        </main>

        <Footer />
      </div>
    </>
  );
}
