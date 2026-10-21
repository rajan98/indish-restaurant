import { useState } from "react";
import { FOOD_MENU } from "../../constants/menu";
import {
  RoyalJharokhaArch,
  RoyalDietaryBadge,
} from "./RoyalMenuDecorations";

export default function FoodMenuComponent() {
  const tabs = [
    {
      id: "all",
      label: "ALL ITEMS",
      description: "Complete Indian menu",
      icon: "❖",
    },
    {
      id: "vegetarian",
      label: "VEGETARIAN",
      description: "Vegetarian entrees, mains, and street food",
    },
    {
      id: "non_vegetarian",
      label: "NON-VEG",
      description: "Meat, poultry, seafood, and lamb dishes",
    },
    {
      id: "vegan",
      label: "VEGAN",
      description: "Plant-based Indian dishes",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const getFilteredMenu = () => {
    const filteredMenu = {};

    Object.entries(FOOD_MENU).forEach(([sectionKey, section]) => {
      let filteredItems;

      if (activeTab === "all") {
        filteredItems = section.items;
      } else if (activeTab === "vegetarian") {
        filteredItems = section.items.filter(
          (item) => item.type === "Veg" || item.type === "Vegan"
        );
      } else if (activeTab === "non_vegetarian") {
        filteredItems = section.items.filter((item) => item.type === "Non-Veg");
      } else if (activeTab === "vegan") {
        filteredItems = section.items.filter((item) => item.type === "Vegan");
      }

      // Only include sections with matching items
      if (filteredItems && filteredItems.length > 0) {
        filteredMenu[sectionKey] = {
          ...section,
          items: filteredItems,
        };
      }
    });

    return filteredMenu;
  };

  // Helper function to extract dietary tags from item type
  const getDietaryTags = (itemType) => {
    const tags = [];
    if (itemType === "Vegan") tags.push("Vegan");
    if (itemType === "Veg") tags.push("Vegetarian");
    if (itemType === "Non-Veg") tags.push("Non-Vegetarian");
    if (itemType.name && itemType.name.includes("(GF)")) tags.push("Gluten Free");
    return tags;
  };

  // Helper function to determine suitable diet type
  const getSuitableDiet = (itemType) => {
    if (itemType === "Vegan") {
      return "https://schema.org/VeganDiet";
    } else if (itemType === "Veg") {
      return "https://schema.org/VegetarianDiet";
    }
    return null;
  };

  // Generate structured data for current tab's menu items
  const generateTabStructuredData = () => {
    const currentMenu = getFilteredMenu();
    const menuItems = [];

    Object.entries(currentMenu).forEach(([sectionKey, section]) => {
      section.items.forEach((item) => {
        const dietaryTags = getDietaryTags(item.type);
        const suitableDiet = getSuitableDiet(item.type);

        menuItems.push({
          "@type": "MenuItem",
          name: item.name.replace(/\s*\([^)]*\)/g, ""),
          description: item.description,
          offers: {
            "@type": "Offer",
            price: item.price.replace("$", "").replace(" per person", ""),
            priceCurrency: "AUD",
          },
          suitableForDiet: suitableDiet,
          menuAddOn: dietaryTags,
        });
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "MenuSection",
      name: `${tabs.find((tab) => tab.id === activeTab)?.label} Menu`,
      description: tabs.find((tab) => tab.id === activeTab)?.description,
      hasMenuItem: menuItems,
    };
  };

  const filteredSections = Object.entries(getFilteredMenu());

  return (
    <>
      {/* Structured Data for current tab */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateTabStructuredData()),
        }}
      />

      <div className="container mx-auto px-2 sm:px-4 relative z-10 max-w-5xl">
        {/* Royal Dietary Filter Navigation */}
        <div className="mb-10 text-center">
          <div className="inline-flex flex-wrap justify-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-[#24130C]/90 border border-[#D4AF37]/50 shadow-lg backdrop-blur-sm">
            <h2 className="sr-only">Food Menu Categories</h2>
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`food-tabpanel-${tab.id}`}
                  aria-describedby={`food-tab-desc-${tab.id}`}
                  className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 font-serif text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 rounded-full ${
                    isSelected
                      ? "bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] text-[#24130C] shadow-[0_2px_10px_rgba(212,175,55,0.4)] border border-[#FFF8E7]"
                      : "text-[#E6C687] hover:text-[#FFF8E7] hover:bg-white/10"
                  }`}
                >
                  {tab.dotClass && (
                    <span className={`w-2 h-2 rounded-full ${tab.dotClass}`}></span>
                  )}
                  {tab.icon && <span>{tab.icon}</span>}
                  <span>{tab.label}</span>
                  <span id={`food-tab-desc-${tab.id}`} className="sr-only">
                    {tab.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Menu Sections styled as Royal Indian Manuscripts */}
        <div
          id={`food-tabpanel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`food-tab-${activeTab}`}
          className="space-y-12"
        >
          {filteredSections.map(([sectionKey, section], sectionIndex) => (
            <article
              id={`section-${sectionKey}`}
              key={sectionKey}
              className="scroll-mt-24"
              itemScope
              itemType="https://schema.org/MenuSection"
            >
              <div className="bg-[#FFFDF9] rounded-2xl border-2 border-[#D4AF37]/40 overflow-hidden relative">
                {/* Royal Jharokha Arch Header */}
                <RoyalJharokhaArch
                  title={section.title}
                  subtitle={section.subtitle}
                />

                {/* Royal Menu Items List on Warm Parchment Paper */}
                <div
                  className="divide-y divide-[#D4AF37]/20 p-2 sm:p-6"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 50% 50%, rgba(255, 253, 248, 1) 0%, rgba(250, 246, 237, 0.95) 100%),
                      url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C5A059' fill-opacity='0.02' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")
                    `,
                  }}
                >
                  {section.items.map((item, itemIndex) => {
                    const dietaryTags = getDietaryTags(item.type);
                    const suitableDiet = getSuitableDiet(item.type);

                    return (
                      <div
                        key={itemIndex}
                        className="p-4 sm:p-5 hover:bg-[#FAF2DE]/50 rounded-xl transition-all duration-200 group"
                        itemScope
                        itemType="https://schema.org/MenuItem"
                      >
                        {/* Dish Header: Name + Badges + Leader Line + Price */}
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

                          {/* Ornamental Dotted Leader Line (Classic Royal Menu Style) */}
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
                              content={item.price
                                .replace("$", "")
                                .replace(" per person", "")}
                            >
                              {item.price}
                            </span>
                            <meta itemProp="priceCurrency" content="AUD" />
                            <meta
                              itemProp="availability"
                              content="https://schema.org/InStock"
                            />
                          </div>
                        </div>

                        {/* Dish Description */}
                        {item.description && (
                          <p
                            className="text-[#5F4B3C] font-sans text-sm sm:text-[15px] leading-relaxed mt-1.5 pr-2"
                            itemProp="description"
                          >
                            {item.description}
                          </p>
                        )}

                        {/* Hidden structured data for dietary restrictions */}
                        {suitableDiet && (
                          <meta
                            itemProp="suitableForDiet"
                            content={suitableDiet}
                          />
                        )}

                        {/* Hidden dietary tags for SEO only */}
                        {dietaryTags.length > 0 && (
                          <div
                            className="sr-only"
                            aria-label="Dietary information"
                          >
                            {dietaryTags.map((tag, tagIndex) => (
                              <span key={tagIndex} itemProp="menuAddOn">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Royal Bottom Filigree Border */}
                <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
              </div>
            </article>
          ))}
        </div>

        {/* Location and cuisine type context for SEO */}
        <div
          className="sr-only"
          itemScope
          itemType="https://schema.org/Restaurant"
        >
          <meta itemProp="servesCuisine" content="Indian" />
          <meta itemProp="servesCuisine" content="Vegetarian" />
          <meta itemProp="servesCuisine" content="Vegan" />
          <meta itemProp="priceRange" content="$$" />
          <div itemProp="hasMenu" itemScope itemType="https://schema.org/Menu">
            <meta itemProp="name" content="Indian Restaurant Menu" />
          </div>
        </div>
      </div>
    </>
  );
}