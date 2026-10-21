import Head from "next/head";
import { useState } from "react";
import EachPageLayout from "../../components/layout/EachPageLayout";
import FoodMenuComponent from "../../components/menu/FoodMenuComponent";
import {
  RoyalHeaderCrest,
  RoyalPaperSheet,
  RoyalJharokhaArch,
  RoyalDietaryBadge,
} from "../../components/menu/RoyalMenuDecorations";
import APP_CONSTANTS from "../../constants/app_constants";
import { BEVERAGES_MENU, FOOD_MENU, LUNCH_MENU } from "../../constants/menu";

const formatSectionName = (sectionKey) => {
  return sectionKey
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// SEO Helper Functions
const generateMenuItemsText = () => {
  const allFoodItems = Object.values(FOOD_MENU)
    .flatMap((section) => section.items)
    .map((item) => item.name)
    .slice(0, 10); // Limit for meta description

  const allBeverageItems = Object.values(BEVERAGES_MENU)
    .flatMap((section) => section)
    .map((item) => item.name)
    .slice(0, 5);

  return [...allFoodItems, ...allBeverageItems].join(", ");
};

const generateStructuredData = () => {
  // Generate menu items for structured data
  const menuItems = [];

  // Add food items
  Object.entries(FOOD_MENU).forEach(([sectionKey, section]) => {
    section.items.forEach((item) => {
      menuItems.push({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price.replace("$", ""),
          priceCurrency: "AUD",
        },
        menuAddOn: section.subtitle?.includes("Vegan")
          ? ["Vegan"]
          : section.subtitle?.includes("Vegetarian")
            ? ["Vegetarian"]
            : section.subtitle?.includes("GF")
              ? ["Gluten Free"]
              : [],
      });
    });
  });

  // Add beverage items
  Object.entries(BEVERAGES_MENU).forEach(([sectionKey, items]) => {
    items.forEach((item) => {
      menuItems.push({
        "@type": "MenuItem",
        name: item.name,
        description: `${formatSectionName(sectionKey)} from ${item.location}`,
        offers: item.glass_price
          ? [
            {
              "@type": "Offer",
              name: "Glass",
              price: item.glass_price.replace("$", ""),
              priceCurrency: "AUD",
            },
            {
              "@type": "Offer",
              name: "Bottle",
              price: item?.bottle_price?.replace("$", ""),
              priceCurrency: "AUD",
            },
          ]
          : {
            "@type": "Offer",
            price: item?.bottle_price?.replace("$", ""),
            priceCurrency: "AUD",
          },
      });
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${APP_CONSTANTS.company_name_title_case} Menu`,
    description:
      "Authentic Indian cuisine featuring vegan, vegetarian, and non-vegetarian dishes, plus premium beverages",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Food Menu",
        description:
          "Traditional Indian dishes with vegan, vegetarian, and non-vegetarian options",
        hasMenuItem: menuItems.filter(
          (item) =>
            !item.name.includes("WINE") &&
            !item.name.includes("SAUVIGNON") &&
            !item.name.includes("CHARDONNAY") &&
            !item.name.includes("SHIRAZ") &&
            !item.name.includes("CABERNET") &&
            !item.name.includes("PINOT")
        ),
      },
      {
        "@type": "MenuSection",
        name: "Beverages",
        description:
          "Premium beverages including white beverages and red beverages selections",
        hasMenuItem: menuItems.filter(
          (item) =>
            item.name.includes("WINE") ||
            item.name.includes("SAUVIGNON") ||
            item.name.includes("CHARDONNAY") ||
            item.name.includes("SHIRAZ") ||
            item.name.includes("CABERNET") ||
            item.name.includes("PINOT")
        ),
      },
    ],
  };
};

const generateKeywords = () => {
  const cuisineTypes = ["Indian restaurant", "Indian cuisine", "Indian food"];
  const dietaryOptions = [
    "vegan Indian food",
    "vegetarian Indian dishes",
    "gluten free Indian",
  ];
  const specificDishes = Object.values(FOOD_MENU)
    .flatMap((section) => section.items)
    .map((item) => item.name.toLowerCase())
    .slice(0, 8);
  const beverageTypes = [
    "Indian restaurant beverages",
    "beverages pairing Indian food",
  ];

  return [
    ...cuisineTypes,
    ...dietaryOptions,
    ...specificDishes,
    ...beverageTypes,
  ].join(", ");
};

// Helper function to format pricing display
const formatPricing = (item) => {
  const hasGlassPrice = item.glass_price && item.glass_price !== null;
  const hasBottlePrice = item.bottle_price && item.bottle_price !== null;

  if (hasGlassPrice && hasBottlePrice) {
    return `${item.glass_price} / ${item.bottle_price}`;
  } else if (hasGlassPrice) {
    return item.glass_price;
  } else if (hasBottlePrice) {
    return item.bottle_price;
  }
  return "Price available upon request";
};

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      id: 0,
      label: "A La Carte Menu",
      icon: "",
    },
    {
      id: 1,
      label: "Weekend Lunch",
      icon: "",
    },
    {
      id: 2,
      label: "Beverages & Bar",
      icon: "",
    },
  ];

  const pageTitle = `Menu - Authentic Indian Cuisine | ${APP_CONSTANTS.company_name_title_case}`;
  const metaDescription = `Discover our authentic Indian menu featuring ${generateMenuItemsText()}. Vegan, vegetarian & non-vegetarian options with premium beverages selection.`;

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={generateKeywords()} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content={APP_CONSTANTS.company_name_title_case} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${APP_CONSTANTS.full_website_url}/menu`}
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content={`${APP_CONSTANTS.full_website_url}images/logo.webp`}
        />
        <meta
          property="og:site_name"
          content={APP_CONSTANTS.company_name_title_case}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`${APP_CONSTANTS.full_website_url}/menu`}
        />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta
          property="twitter:image"
          content={`${APP_CONSTANTS.full_website_url}images/logo.webp`}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData()),
          }}
        />

        {/* Additional Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: APP_CONSTANTS.company_name_title_case,
              servesCuisine: ["Indian", "Vegetarian", "Vegan"],
              hasMenu: `${APP_CONSTANTS.website_url}/menu`,
              acceptsReservations: true,
              priceRange: "$15-$30",
            }),
          }}
        />
      </Head>

      <EachPageLayout title={"Royal Menu"}>
        <section className="py-10 sm:py-14 md:py-20 relative overflow-hidden bg-gradient-to-b from-[#160B08] via-[#22120B] to-[#120805]">
          {/* Ambient Royal Gold Dust & Jaali Texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 10%, rgba(212, 175, 55, 0.12) 0%, transparent 60%),
                radial-gradient(circle at 10% 80%, rgba(184, 134, 11, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(184, 134, 11, 0.08) 0%, transparent 50%),
                url("/images/Menu/Background.webp")
              `,
              backgroundSize: "cover, cover, cover, cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              opacity: 0.9,
            }}
          />

          <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-10 max-w-6xl">
            {/* The Royal Parchment Paper Sheet */}
            <RoyalPaperSheet className="max-w-5xl mx-auto my-2">
              {/* Grand Royal Header with reference crest and typography */}
              <header className="text-center pt-2 pb-6 sm:pb-8">
                <h1 className="sr-only">
                  {APP_CONSTANTS.company_name_title_case} Royal Menu - Authentic Indian Cuisine
                </h1>

                {/* Ornate Royal Indian Filigree Header matching reference photo */}
                <RoyalHeaderCrest
                  title="MENU"
                  subtitle="AUTHENTIC INDIAN RESTRO-BAR • DARBY STREET"
                />

                {/* Royal Tab Navigation with Parchment & Gold Ribbon Design */}
                <nav
                  className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-8 pb-4 border-b border-[#D4AF37]/30"
                  role="tablist"
                >
                  {tabs.map((tab) => {
                    const isSelected = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        role="tab"
                        aria-selected={isSelected}
                        aria-controls={`tabpanel-${tab.id}`}
                        className={`group relative flex items-center gap-2 px-5 sm:px-7 py-3 font-serif font-bold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all duration-300 rounded-xl border ${isSelected
                          ? "bg-gradient-to-b from-[#8C1D2A] to-[#680F1B] text-[#FFF8ED] border-[#D4AF37] transform -translate-y-0.5"
                          : "bg-[#F3EAD3]/70 hover:bg-[#EBDDC0] text-[#4A2D19] border-[#D4AF37]/40 hover:border-[#B8860B]"
                          }`}
                      >
                        <span className="text-sm">{tab.icon}</span>
                        <span>{tab.label}</span>
                        {isSelected && (
                          <span className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-[#D4AF37]"></span>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </header>

              {/* Tab 0: Food Menu Section */}
              {activeTab === 0 && (
                <section
                  id="tabpanel-0"
                  role="tabpanel"
                  aria-labelledby="food-tab"
                  itemScope
                  itemType="https://schema.org/MenuSection"
                  className="pt-2"
                >
                  <h2 className="sr-only" itemProp="name">
                    Indian Food Menu
                  </h2>
                  <p className="sr-only" itemProp="description">
                    Authentic Indian cuisine with vegan, vegetarian, and
                    non-vegetarian options including curries, tikkas, and
                    traditional dishes
                  </p>
                  <FoodMenuComponent />
                </section>
              )}

              {/* Tab 1: Weekend Lunch Menu Section */}
              {activeTab === 1 && (
                <section
                  id="tabpanel-1"
                  role="tabpanel"
                  aria-labelledby="lunch-tab"
                  itemScope
                  itemType="https://schema.org/MenuSection"
                  className="space-y-10 pt-2"
                >
                  <h2 className="sr-only" itemProp="name">
                    Lunch Specials Menu
                  </h2>
                  <p className="sr-only" itemProp="description">
                    Special lunch menu available Saturday and Sunday, 11:00 AM – 2:30 PM
                  </p>

                  {Object.entries(LUNCH_MENU).map(
                    ([sectionKey, section], _sectionIndex) => (
                      <article key={sectionKey} className="scroll-mt-24">
                        <div className="bg-[#FFFDF9] rounded-2xl border-2 border-[#D4AF37]/40 overflow-hidden relative">
                          <RoyalJharokhaArch
                            title={section.title}
                            subtitle={section.subtitle}
                          />

                          <div
                            className="divide-y divide-[#D4AF37]/20 p-2 sm:p-6"
                            style={{
                              backgroundImage: `
                                radial-gradient(circle at 50% 50%, rgba(255, 253, 248, 1) 0%, rgba(250, 246, 237, 0.95) 100%),
                                url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C5A059' fill-opacity='0.02' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")
                              `,
                            }}
                          >
                            {section.items.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="p-4 sm:p-5 hover:bg-[#FAF2DE]/50 rounded-xl transition-all duration-200 group"
                                itemScope
                                itemType="https://schema.org/MenuItem"
                              >
                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2">
                                  <div className="flex items-center flex-wrap gap-2 flex-shrink-0">
                                    <h4
                                      className="text-lg sm:text-xl font-serif font-bold text-[#2A1810] group-hover:text-primary-600 transition-colors tracking-wide"
                                      itemProp="name"
                                    >
                                      {item.name}
                                    </h4>
                                    <RoyalDietaryBadge type={item.type} />
                                  </div>

                                  {/* Dotted Leader Line */}
                                  <div
                                    className="hidden sm:block flex-1 mx-3 border-b-2 border-dotted border-[#C5A059]/40 self-baseline"
                                    aria-hidden="true"
                                  />

                                  {/* Price */}
                                  <div
                                    className="text-left sm:text-right flex-shrink-0 mt-1 sm:mt-0"
                                    itemProp="offers"
                                    itemScope
                                    itemType="https://schema.org/Offer"
                                  >
                                    <span
                                      className="inline-block text-lg sm:text-xl font-serif font-bold text-[#990022] tracking-wide"
                                      itemProp="price"
                                    >
                                      {item.price}
                                    </span>
                                    <meta itemProp="priceCurrency" content="AUD" />
                                  </div>
                                </div>

                                {item.description && (
                                  <p
                                    className="text-[#5F4B3C] font-sans text-sm sm:text-[15px] leading-relaxed mt-1.5 pr-2"
                                    itemProp="description"
                                  >
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>

                          <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
                        </div>
                      </article>
                    )
                  )}
                </section>
              )}

              {/* Tab 2: Beverages & Bar Section */}
              {activeTab === 2 && (
                <section
                  id="tabpanel-2"
                  role="tabpanel"
                  aria-labelledby="beverages-tab"
                  itemScope
                  itemType="https://schema.org/MenuSection"
                  className="space-y-10 pt-2"
                >
                  <h2 className="sr-only" itemProp="name">
                    Wine & Beverages Menu
                  </h2>
                  <p className="sr-only" itemProp="description">
                    Premium beverages selection featuring mocktails, cocktails, beers, spirits and fine wines
                  </p>

                  {Object.entries(BEVERAGES_MENU).map(
                    ([sectionKey, items], _sectionIndex) => (
                      <article key={sectionKey} className="scroll-mt-24">
                        <div className="bg-[#FFFDF9] rounded-2xl border-2 border-[#D4AF37]/40 overflow-hidden relative">
                          <RoyalJharokhaArch
                            title={formatSectionName(sectionKey)}
                            subtitle="Glass & Bottle Offerings"
                          />

                          <div
                            className="divide-y divide-[#D4AF37]/20 p-2 sm:p-6"
                            style={{
                              backgroundImage: `
                                radial-gradient(circle at 50% 50%, rgba(255, 253, 248, 1) 0%, rgba(250, 246, 237, 0.95) 100%),
                                url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C5A059' fill-opacity='0.02' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")
                              `,
                            }}
                          >
                            {items.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="p-4 sm:p-5 hover:bg-[#FAF2DE]/50 rounded-xl transition-all duration-200 group"
                                itemScope
                                itemType="https://schema.org/MenuItem"
                              >
                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2">
                                  <h4
                                    className="text-lg sm:text-xl font-serif font-bold text-[#2A1810] group-hover:text-primary-600 transition-colors tracking-wide"
                                    itemProp="name"
                                  >
                                    {item.name}
                                  </h4>

                                  {/* Dotted Leader Line */}
                                  <div
                                    className="hidden sm:block flex-1 mx-3 border-b-2 border-dotted border-[#C5A059]/40 self-baseline"
                                    aria-hidden="true"
                                  />

                                  {/* Glass / Bottle Price */}
                                  <div
                                    className="text-left sm:text-right flex-shrink-0 mt-1 sm:mt-0"
                                    itemProp="offers"
                                    itemScope
                                    itemType="https://schema.org/Offer"
                                  >
                                    <span
                                      className="inline-block text-base sm:text-lg font-serif font-bold text-[#990022] tracking-wide"
                                      itemProp="price"
                                    >
                                      {formatPricing(item)}
                                    </span>
                                    <meta itemProp="priceCurrency" content="AUD" />
                                  </div>
                                </div>

                                {item.location && (
                                  <p
                                    className="text-[#5F4B3C] font-sans text-sm sm:text-[15px] italic leading-relaxed mt-1"
                                    itemProp="description"
                                  >
                                    {item.location}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>

                          <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
                        </div>
                      </article>
                    )
                  )}
                </section>
              )}
            </RoyalPaperSheet>
          </div>
        </section>
      </EachPageLayout>
    </>
  );
}
