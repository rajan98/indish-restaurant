import Head from "next/head";
import { useState } from "react";
import EachPageLayout from "../../components/layout/EachPageLayout";
import FoodMenuComponent from "../../components/menu/FoodMenuComponent";
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
      label: "A la carta Menu",
    },
    {
      id: 1,
      label: "Lunch Menu",
    },
    {
      id: 2,
      label: "Beverages",
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

      <EachPageLayout title={"Menu"}>
        <section className="py-16 bg-gray-100 relative overflow-hidden">
          {/* Background overlay with Beverages imagery */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("/images/Menu/Background.webp")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              opacity: 0.13,
            }}
          />

          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            {/* SEO-friendly Header */}
            <header className="text-center mb-12">
              <h1 className="sr-only">
                {APP_CONSTANTS.company_name_title_case} Menu - Authentic Indian
                Cuisine
              </h1>
              <div className="flex items-center justify-center mb-4">
                <div className="h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent w-32"></div>
                <span className="mx-4 text-primary-400 text-sm tracking-wider font-medium">
                  {`${tabs[activeTab].label}`}
                </span>
                <div className="h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent w-32"></div>
              </div>

              {/* Tab Navigation with SEO-friendly structure */}
              <nav
                className="border-b border-gray-200 flex items-center justify-center"
                role="tablist"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`tabpanel-${tab.id}`}
                    className={`px-6 py-3 border-b-2 font-semibold tracking-wider transition-all duration-300 ${activeTab === tab.id
                      ? "bg-primary-400 text-white border-primary-600"
                      : "bg-gray-300 text-gray-800 hover:bg-gray-300"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </header>

            {/* Lunch Menu Section */}
            {activeTab === 1 && (
              <section
                id="tabpanel-1"
                role="tabpanel"
                aria-labelledby="lunch-tab"
                itemScope
                itemType="https://schema.org/MenuSection"
              >
                <h2 className="sr-only" itemProp="name">
                  Lunch Specials Menu
                </h2>
                <p className="sr-only" itemProp="description">
                  Special lunch menu available Wednesday to Sunday, 11:30AM - 2:30PM
                </p>

                {Object.entries(LUNCH_MENU).map(
                  ([sectionKey, section], _sectionIndex) => (
                    <article key={sectionKey} className="mb-12">
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        {/* Section Header */}
                        <header className="bg-black text-white px-6 py-4">
                          <h3 className="text-xl font-bold" itemProp="name">
                            {section.title}
                          </h3>
                          <p className="text-gray-300 text-sm mt-1">
                            {section.subtitle}
                          </p>
                        </header>

                        {/* Lunch Items */}
                        <div className="divide-y divide-gray-200">
                          {section.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="px-6 py-6 hover:bg-gray-50 transition-colors duration-300"
                              itemScope
                              itemType="https://schema.org/MenuItem"
                            >
                              <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h4
                                      className="text-lg md:text-xl font-semibold text-gray-900"
                                      itemProp="name"
                                    >
                                      {item.name}
                                    </h4>
                                    <span
                                      className={`text-xs px-2 py-1 rounded-full font-medium ${item.type === "Veg"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-800"
                                        }`}
                                    >
                                      {item.type}
                                    </span>
                                  </div>
                                  {item.description && (
                                    <p
                                      className="text-gray-600 text-sm md:text-base"
                                      itemProp="description"
                                    >
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                                <div
                                  className="text-right flex-shrink-0"
                                  itemProp="offers"
                                  itemScope
                                  itemType="https://schema.org/Offer"
                                >
                                  <span
                                    className="text-lg md:text-xl font-bold text-gray-900"
                                    itemProp="price"
                                  >
                                    {item.price}
                                  </span>
                                  <meta itemProp="priceCurrency" content="AUD" />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  )
                )}
              </section>
            )}

            {/* Beverages Section with SEO markup */}
            {activeTab === 2 && (
              <section
                id="tabpanel-1"
                role="tabpanel"
                aria-labelledby="beverages-tab"
                itemScope
                itemType="https://schema.org/MenuSection"
              >
                <h2 className="sr-only" itemProp="name">
                  Wine & Beverages Menu
                </h2>
                <p className="sr-only" itemProp="description">
                  Premium beverages selection featuring white beverages and red
                  beverages from Australia, New Zealand, and California
                </p>

                {Object.entries(BEVERAGES_MENU).map(
                  ([sectionKey, items], _sectionIndex) => (
                    <article key={sectionKey} className="mb-12">
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        {/* Dynamic Section Header */}
                        <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
                          <h3 className="text-xl font-bold" itemProp="name">
                            {formatSectionName(sectionKey)}
                          </h3>
                          <h4 className="text-xl font-bold">
                            Glass / Bottle Pricing
                          </h4>
                        </header>

                        {/* Dynamic Items */}
                        <div className="divide-y divide-gray-200">
                          {items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="px-6 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                              itemScope
                              itemType="https://schema.org/MenuItem"
                            >
                              <div className="flex-1">
                                <h4
                                  className="text-lg font-semibold text-gray-900 mb-2"
                                  itemProp="name"
                                >
                                  {item.name}
                                </h4>
                                <p
                                  className="text-gray-600 italic"
                                  itemProp="description"
                                >
                                  {item.location}
                                </p>
                              </div>
                              <div
                                className="text-right ml-4"
                                itemProp="offers"
                                itemScope
                                itemType="https://schema.org/Offer"
                              >
                                <span
                                  className="text-lg font-semibold text-gray-900"
                                  itemProp="price"
                                >
                                  {formatPricing(item)}
                                </span>
                                <meta itemProp="priceCurrency" content="AUD" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  )
                )}
              </section>
            )}

            {/* Food Menu Section */}
            {activeTab === 0 && (
              <section
                id="tabpanel-0"
                role="tabpanel"
                aria-labelledby="food-tab"
                itemScope
                itemType="https://schema.org/MenuSection"
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
          </div>
        </section>
      </EachPageLayout>
    </>
  );
}
