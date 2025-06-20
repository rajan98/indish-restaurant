import { useState } from "react";
import { FOOD_MENU } from "../../constants/menu";

export default function FoodMenuComponent() {
  const tabs = [
    {
      id: "all",
      label: "ALL",
      description: "Complete Indian menu"
    },
    {
      id: "vegetarian",
      label: "VEGETARIAN",
      description: "Vegetarian entrees, mains, and street food"
    },
    {
      id: "non_vegetarian",
      label: "NON-VEGETARIAN",
      description: "Meat, poultry, seafood, and lamb dishes"
    },
    {
      id: "vegan",
      label: "VEGAN",
      description: "Plant-based Indian dishes"
    }
  ];

  const [activeTab, setActiveTab] = useState("all");

  const getFilteredMenu = () => {
    if (activeTab === "all") {
      return FOOD_MENU;
    } else if (activeTab === "vegetarian") {
      return Object.fromEntries(
        Object.entries(FOOD_MENU).filter(([key]) => 
          key === 'veg_entrees' || 
          key === 'chaat_temptations' || 
          key === 'vegetarian_mains' ||
          key === 'platters' ||
          key === 'biryani' ||
          key === 'atta' ||
          key === 'rice' ||
          key === 'dessert' ||
          key === 'unusual_sides' ||
          key === 'feast_menu'
        )
      );
    } else if (activeTab === "non_vegetarian") {
      return Object.fromEntries(
        Object.entries(FOOD_MENU).filter(([key]) => 
          key === 'non_veg_entrees' || 
          key === 'non_vegetarian_mains' || 
          key === 'lamb_and_goat' || 
          key === 'beef_dishes' || 
          key === 'oceans_bounty' ||
          key === 'platters' ||
          key === 'biryani' ||
          key === 'atta' ||
          key === 'rice' ||
          key === 'dessert' ||
          key === 'unusual_sides' ||
          key === 'feast_menu'
        )
      );
    } else if (activeTab === "vegan") {
      // Filter items that are specifically marked as vegan
      const veganMenu = {};
      Object.entries(FOOD_MENU).forEach(([sectionKey, section]) => {
        const veganItems = section.items.filter(item => 
          item.name.includes("(Vegan)") || 
          section.subtitle?.includes("Vegan")
        );
        if (veganItems.length > 0) {
          veganMenu[sectionKey] = {
            ...section,
            items: veganItems
          };
        }
      });
      return veganMenu;
    }
    return FOOD_MENU;
  };

  // Helper function to extract dietary tags from item names
  const getDietaryTags = (itemName, sectionSubtitle) => {
    const tags = [];
    if (itemName.includes("(Vegan)") || sectionSubtitle?.includes("Vegan"))
      tags.push("Vegan");
    if (itemName.includes("(V)") || sectionSubtitle?.includes("Vegetarian"))
      tags.push("Vegetarian");
    if (itemName.includes("(GF)") || sectionSubtitle?.includes("Gluten Free"))
      tags.push("Gluten Free");
    if (itemName.includes("(N)") || sectionSubtitle?.includes("Contain Nuts"))
      tags.push("Contains Nuts");
    return tags;
  };

  // Helper function to determine suitable diet type
  const getSuitableDiet = (itemName, sectionKey) => {
    if (itemName.includes("(Vegan)") || sectionKey.includes('vegan')) {
      return "https://schema.org/VeganDiet";
    } else if (sectionKey.includes('vegetarian') || sectionKey.includes('veg_')) {
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
        const dietaryTags = getDietaryTags(item.name, section.subtitle);
        const suitableDiet = getSuitableDiet(item.name, sectionKey);
        
        menuItems.push({
          "@type": "MenuItem",
          name: item.name.replace(/\s*\([^)]*\)/g, ""), // Clean name without parenthetical tags
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

  return (
    <>
      {/* Structured Data for current tab */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateTabStructuredData()),
        }}
      />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Dynamic Tab Navigation */}
        <nav
          className="flex flex-wrap justify-center mb-8 bg-white rounded-lg shadow-md p-1"
          role="tablist"
        >
          <h2 className="sr-only">Food Menu Categories</h2>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`food-tabpanel-${tab.id}`}
              aria-describedby={`food-tab-desc-${tab.id}`}
              className={`px-6 py-3 font-semibold text-sm tracking-wider transition-all duration-300 rounded-md mx-1 ${
                activeTab === tab.id
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.label}
              <span id={`food-tab-desc-${tab.id}`} className="sr-only">
                {tab.description}
              </span>
            </button>
          ))}
        </nav>

        {/* Dynamic Menu Sections with enhanced SEO markup */}
        <div
          id={`food-tabpanel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`food-tab-${activeTab}`}
        >
          {Object.entries(getFilteredMenu()).map(
            ([sectionKey, section], sectionIndex) => (
              <article
                key={sectionKey}
                className="mb-8"
                itemScope
                itemType="https://schema.org/MenuSection"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Section Header with proper heading hierarchy */}
                  <header className="bg-black text-white px-6 py-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold" itemProp="name">
                          {section.title}
                        </h3>
                        {section.subtitle && (
                          <p
                            className="text-gray-300 text-sm mt-1"
                            itemProp="description"
                          >
                            {section.subtitle}
                          </p>
                        )}
                      </div>
                      <h4 className="text-xl font-bold">Price</h4>
                    </div>
                  </header>

                  {/* Menu Items with rich markup */}
                  <div className="divide-y divide-gray-200">
                    {section.items.map((item, itemIndex) => {
                      const dietaryTags = getDietaryTags(
                        item.name,
                        section.subtitle
                      );
                      const suitableDiet = getSuitableDiet(item.name, sectionKey);

                      return (
                        <div
                          key={itemIndex}
                          className="px-6 py-6 flex justify-between items-start hover:bg-gray-50 transition-colors duration-300"
                          itemScope
                          itemType="https://schema.org/MenuItem"
                        >
                          <div className="flex-1 pr-4">
                            <h4
                              className="text-lg font-semibold text-gray-900 mb-2"
                              itemProp="name"
                            >
                              {item.name}
                            </h4>
                            <p
                              className="text-gray-600 leading-relaxed text-sm"
                              itemProp="description"
                            >
                              {item.description}
                            </p>

                            {/* Hidden structured data for dietary restrictions */}
                            {suitableDiet && (
                              <meta
                                itemProp="suitableForDiet"
                                content={suitableDiet}
                              />
                            )}

                            {/* Hidden dietary tags for SEO only */}
                            {dietaryTags.length > 0 && (
                              <div className="sr-only" aria-label="Dietary information">
                                {dietaryTags.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    itemProp="menuAddOn"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>

                          <div
                            className="text-right flex-shrink-0"
                            itemProp="offers"
                            itemScope
                            itemType="https://schema.org/Offer"
                          >
                            <span
                              className="text-lg font-bold text-gray-900"
                              itemProp="price"
                              content={item.price.replace("$", "").replace(" per person", "")}
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
                      );
                    })}
                  </div>
                </div>
              </article>
            )
          )}
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
};