const BEVERAGES_MENU = {
  cocktails: [
    {
      name: "Espresso Martini",
      location: "Vodka, espresso, coffee liqueur, and sugar syrup.",
      glass_price: "$14.90",
      bottle_price: null,
    },
    {
      name: "Cosmopolitan",
      location: "Vodka, triple sec, cranberry juice, and lime juice.",
      glass_price: "$16.00",
      bottle_price: null,
    },
    {
      name: "Sex on the Beach",
      location: "Vodka, peach schnapps, cranberry juice, and orange juice.",
      glass_price: "$17.50",
      bottle_price: null,
    },
    {
      name: "Margarita",
      location: "Tequila, lime juice, and Cointreau.",
      glass_price: "$18.90",
      bottle_price: null,
    },
    {
      name: "Piña Colada",
      location:
        "White rum, coconut cream, coconut liqueur, pineapple juice, and lime juice.",
      glass_price: "$18.90",
      bottle_price: null,
    },
    {
      name: "Long Island Iced Tea",
      location:
        "Vodka, gin, rum, tequila, triple sec, lemon juice, simple syrup, and cola.",
      glass_price: "$19.90",
      bottle_price: null,
    },
  ],
  whisky: [
    {
      name: "Glenfiddich 12YO",
      location: "Premium Scotch whisky",
      glass_price: "$12",
      bottle_price: null,
    },
    {
      name: "Jameson",
      location: "Irish whiskey",
      glass_price: "$12",
      bottle_price: null,
    },
    {
      name: "Canadian Club",
      location: "Canadian whisky",
      glass_price: "$12",
      bottle_price: null,
    },
    {
      name: "Jack Daniels",
      location: "Tennessee whiskey",
      glass_price: "$12",
      bottle_price: null,
    },
    {
      name: "Glenmorangie 10YO",
      location: "Highland single malt Scotch whisky",
      glass_price: "$14",
      bottle_price: null,
    },
    {
      name: "Johnnie Walker Black Label",
      location: "Blended Scotch whisky",
      glass_price: "$16",
      bottle_price: null,
    },
    {
      name: "Johnnie Walker Gold Label",
      location: "Premium blended Scotch whisky",
      glass_price: "$18",
      bottle_price: null,
    },
    {
      name: "Chivas Regal 18YO",
      location: "Premium blended Scotch whisky",
      glass_price: "$18",
      bottle_price: null,
    },
    {
      name: "Macallan Double Cask 12YO",
      location: "Single malt Scotch whisky",
      glass_price: "$21",
      bottle_price: null,
    },
    {
      name: "Lagavulin 16YO",
      location: "Islay single malt Scotch whisky",
      glass_price: "$25",
      bottle_price: null,
    },
    {
      name: "Johnnie Walker Blue Label",
      location: "Ultra-premium blended Scotch whisky",
      glass_price: "$30",
      bottle_price: null,
    },
  ],
  mocktails: [
    {
      name: "Virgin Mojito",
      location: "Fresh mint, lime, sugar syrup, and soda water.",
      glass_price: "$15",
      bottle_price: null,
    },
    {
      name: "Blood Orange Mojito",
      location: "Blood orange, bitters, fresh lime, mint, soda.",
      glass_price: "$15",
      bottle_price: null,
    },
    {
      name: "Grand Lime",
      location: "Lychee, coconut, aquafaba, fresh lime, citrus bubbles.",
      glass_price: "$15",
      bottle_price: null,
    },
    {
      name: "Mangoberry",
      location: "Mango, strawberries, fresh lime.",
      glass_price: "$15",
      bottle_price: null,
    },
    {
      name: "Tropical Thunder",
      location:
        "Orange and pineapple, dash of mango puree blended with ice, garnished with an orange slice.",
      glass_price: "$15",
      bottle_price: null,
    },
    {
      name: "Bollywood Smash",
      location: "Club soda, ginger ale, pineapple, and cranberry juice.",
      glass_price: "$15",
      bottle_price: null,
    },
  ],
  champagne: [
    {
      name: "The Family Prosecco",
      location: "Italian sparkling wine",
      glass_price: "$12",
      bottle_price: "$32",
    },
  ],
  white_wine: [
    {
      name: "Secret Garden Pinot Grigio",
      location: "Australia",
      glass_price: "$9.50",
      bottle_price: "$28",
    },
    {
      name: "Secret Garden Shiraz",
      location: "Australia",
      glass_price: "$9.50",
      bottle_price: "$28",
    },
    {
      name: "Trentham Estate Sauvignon Blanc",
      location: "Australia",
      glass_price: "$12",
      bottle_price: "$32",
    },
    {
      name: "Allandale Chardonnay",
      location: "Australia",
      glass_price: "$13",
      bottle_price: "$35",
    },
    {
      name: "Allandale Arabella",
      location: "Australia",
      glass_price: null,
      bottle_price: "$39",
    },
  ],
  red_wine: [
    {
      name: "Secret Garden Shiraz",
      location: "Australia",
      glass_price: "$9.50",
      bottle_price: "$28",
    },
    {
      name: "Angus & Bremer Cabernet Sauvignon",
      location: "Australia",
      glass_price: "$12",
      bottle_price: "$32",
    },
    {
      name: "La Celia Bustos Malbec",
      location: "Argentina",
      glass_price: "$13",
      bottle_price: "$42",
    },
    {
      name: "Allandale GSM",
      location: "Australia",
      glass_price: null,
      bottle_price: "$42.50",
    },
  ],
  beer: [
    {
      name: "James Squire Apple Cider",
      location: "Australian apple cider",
      glass_price: "$8",
      bottle_price: null,
    },
    {
      name: "Pure Blonde (Low Carb)",
      location: "Low carb lager",
      glass_price: "$9",
      bottle_price: null,
    },
    {
      name: "James Squire Pale Ale",
      location: "Australian pale ale",
      glass_price: "$9",
      bottle_price: null,
    },
    {
      name: "Asahi",
      location: "Japanese premium lager",
      glass_price: "$9",
      bottle_price: null,
    },
    {
      name: "Great Northern",
      location: "Australian lager",
      glass_price: "$9",
      bottle_price: null,
    },
    {
      name: "Peroni",
      location: "Italian premium lager",
      glass_price: "$9",
      bottle_price: null,
    },
    {
      name: "Tooheys New",
      location: "Australian lager",
      glass_price: "$9",
      bottle_price: null,
    },
    {
      name: "Indian Kingfisher",
      location: "Indian premium lager",
      glass_price: "$10",
      bottle_price: null,
    },
    {
      name: "Corona",
      location: "Mexican lager",
      glass_price: "$10",
      bottle_price: null,
    },
    {
      name: "Heineken",
      location: "Dutch premium lager",
      glass_price: "$10",
      bottle_price: null,
    },
  ],
  spirits: [
    {
      name: "Bacardi Carta-blanca",
      location: "White Rum",
      glass_price: "$12",
      bottle_price: null,
    },
    {
      name: "Havana Club 7 Anos",
      location: "White Rum",
      glass_price: "$14",
      bottle_price: null,
    },
    {
      name: "Bundaberg",
      location: "Spiced Rum",
      glass_price: "$11",
      bottle_price: null,
    },
    {
      name: "Captain Morgan Spiced Rum",
      location: "Spiced Rum",
      glass_price: "$11.50",
      bottle_price: null,
    },
    {
      name: "Sailor Jerry Spiced Rum",
      location: "Spiced Rum",
      glass_price: "$14.50",
      bottle_price: null,
    },
    {
      name: "Smirnoff",
      location: "Vodka",
      glass_price: "$9",
      bottle_price: null,
    },
    {
      name: "Absolut",
      location: "Vodka",
      glass_price: "$9",
      bottle_price: null,
    },
    {
      name: "Grey Goose",
      location: "Vodka",
      glass_price: "$16.50",
      bottle_price: null,
    },
    {
      name: "Kraken",
      location: "Dark Rum",
      glass_price: "$15",
      bottle_price: null,
    },
    {
      name: "Jose Cuervo",
      location: "Tequila",
      glass_price: "$13",
      bottle_price: null,
    },
    {
      name: "Grand Patron Silver",
      location: "Tequila",
      glass_price: "$17.50",
      bottle_price: null,
    },
    {
      name: "Chatelle Napoleon VSOP",
      location: "Brandy",
      glass_price: "$14",
      bottle_price: null,
    },
    {
      name: "Bombay Sapphire",
      location: "Gin",
      glass_price: "$13.50",
      bottle_price: null,
    },
    {
      name: "Hendrick's",
      location: "Gin",
      glass_price: "$16",
      bottle_price: null,
    },
  ],
  beverages: [
    {
      name: "Soft Drinks",
      location: "Coke, Coke Zero, Sprite",
      glass_price: "$5",
      bottle_price: null,
    },
    {
      name: "Lemonade",
      location: "Refreshing lemonade",
      glass_price: "$5.00",
      bottle_price: null,
    },
    {
      name: "Fruit Juice",
      location: "Orange, Pineapple, Cranberry",
      glass_price: "$5",
      bottle_price: null,
    },
    {
      name: "Ginger Beer",
      location: "Spicy ginger beverage",
      glass_price: "$5",
      bottle_price: null,
    },
    {
      name: "Sparkling Water",
      location: "Premium sparkling water",
      glass_price: "$8",
      bottle_price: null,
    },
    {
      name: "Mineral Water",
      location: "Pure mineral water",
      glass_price: "$5",
      bottle_price: null,
    },
  ],
  lassi: [
    {
      name: "Mango Lassi",
      location: "Traditional Indian mango yogurt drink",
      glass_price: "$6.00",
      bottle_price: null,
    },
  ],
  tea_coffee: [
    {
      name: "Kadak Chai",
      location: "Strong spiced Indian tea",
      glass_price: "$5",
      bottle_price: null,
    },
  ],
};

const FOOD_MENU = {
  veg_entrees: {
    title: "Veg Entrees",
    subtitle: "Veggie Delights with a Masala Twist",
    items: [
      {
        name: "Mumble Chumble Samosa",
        description:
          "Triangular pastry filled with spiced mashed potatoes and garden peas.",
        price: "$9.90",
      },
      {
        name: "Crunchy Crispy Corn (Vegan)",
        description:
          "Crispy golden corn tossed with spices, herbs, and a hint of lemon.",
        price: "$15.90",
      },
      {
        name: "Yummy Mirchi Bajji (Vegan/GF)",
        description:
          "Spicy green chilies coated in crispy gram flour batter and deep-fried.",
        price: "$15.90",
      },
      {
        name: "Heavenly Veg Manchurian (Dry) (Vegan)",
        description:
          "Crispy vegetable balls tossed in a tangy Indo-Chinese sauce.",
        price: "$16.90",
      },
      {
        name: "Baby Corn Manchurian (Dry) (Vegan)",
        description:
          "Crispy baby corn tossed in a spicy, tangy Indo-Chinese sauce with garlic and spring onions.",
        price: "$16.90",
      },
      {
        name: "Super Gobi Manchurian (Dry/Wet) (Vegan)",
        description:
          "Deep-fried cauliflower cooked with diced capsicum and onion with soy sauce.",
        price: "$16.90",
      },
      {
        name: "Kurkuri Gobi (Dry/Wet) (Vegan)",
        description:
          "Crispy cauliflower florets tossed in a flavourful Indo-Chinese garlic sauce.",
        price: "$16.90",
      },
      {
        name: "Schezwan Spring Rolls",
        description:
          "Crispy spring rolls filled with spicy Schezwan-style veggies and flavourful sauces.",
        price: "$16.90",
      },
      {
        name: "Tandoori Soya Chaap",
        description:
          "Marinated soya in yogurt and spices, cooked in a clay oven. Served with mint chutney.",
        price: "$17.90",
      },
      {
        name: "Punjabi Paneer Pakoda",
        description:
          "Soft paneer slices dipped in spiced gram flour batter and deep-fried until crispy.",
        price: "$18.90",
      },
      {
        name: "Shashlik Paneer Tikka",
        description:
          "Overnight marinated cottage cheese pieces with spices, cooked in a clay oven. Served with mint chutney.",
        price: "$18.90",
      },
      {
        name: "Chilli Paneer (Dry/Wet)",
        description:
          "Battered, deep-fried cottage cheese cooked with soy sauce, sweet chilli sauce, and diced capsicum.",
        price: "$18.90",
      },
      {
        name: "Exotic Paneer 65",
        description:
          "Deep-fried paneer cubes tossed in a tangy South Indian-style sauce with curry leaves and chillies.",
        price: "$18.90",
      },
    ],
  },
  chaat_temptations: {
    title: "Chaat Temptations",
    subtitle: "Crispy, Tangy, and Totally Addictive",
    items: [
      {
        name: "Golgappa Shots (Vegan)",
        description:
          "Pastry shells served with a potato and chickpea mixture topped with tamarind sauce and spicy jaljeera water.",
        price: "$12.90",
      },
      {
        name: "Papdi Chaat",
        description:
          "Crisp fried dough wafers topped with boiled potatoes, chickpeas, yogurt, tangy chutney, and a sprinkle of sev for a burst of flavors.",
        price: "$14.90",
      },
      {
        name: "Dahi Mousse Poori",
        description:
          "Pastry shells served with a potato and chickpea mixture topped with tamarind sauce and yogurt.",
        price: "$14.90",
      },
      {
        name: "Chatori Bhel Puri",
        description:
          "A crunchy, tangy street food snack made with puffed rice, sev, chutneys, and fresh veggies.",
        price: "$14.90",
      },
      {
        name: "Papdi Bhalla Chaat",
        description:
          "Soft lentil dumplings and crunchy papdi topped with tangy tamarind chutney, yogurt, and spices.",
        price: "$15.90",
      },
      {
        name: "Samosa Chaat",
        description:
          "Crispy samosa topped with spicy chickpeas, tangy chutneys, yogurt, and fresh herbs for a flavorful chaat.",
        price: "$15.90",
      },
      {
        name: "Khasta Aloo Tikki",
        description:
          "Potatoes, onions, and spices combined into a croquette and deep-fried. Served with tamarind sauce.",
        price: "$15.90",
      },
    ],
  },
  non_veg_entrees: {
    title: "Non-Veg Entrees",
    subtitle: "Opening Act: The Meaty Affair",
    items: [
      {
        name: "Classic Chilli Chicken (Dry/Wet)",
        description:
          "Spicy tender pieces of chicken battered and cooked with soy sauce, diced onions, and capsicum.",
        price: "$18.90",
      },
      {
        name: "Exotic Chicken 65",
        description:
          "Spicy, deep-fried chicken bites tossed in a flavorful South Indian masala with curry leaves and chillies.",
        price: "$18.90",
      },
      {
        name: "Crunchy Fried Chicken",
        description:
          "Crispy, golden-fried chicken seasoned with a blend of herbs and spices for a juicy, flavorful bite.",
        price: "$18.90",
      },
      {
        name: "Majestic Chicken",
        description:
          "Spicy, fried chicken strips tossed in a tangy yogurt-based sauce with green chillies, curry leaves, and garlic.",
        price: "$18.90",
      },
      {
        name: "Murg Tikka (GF)",
        description:
          "Boneless chicken thigh fillet marinated in yogurt and spices, cooked in a tandoor oven, and served with mint chutney.",
        price: "$19.90",
      },
      {
        name: "Indish Afghani Chicken Tikka (GF)",
        description:
          "Chicken marinated with black pepper, cream, cashew nut paste, lime juice, ginger, and garlic paste.",
        price: "$19.90",
      },
      {
        name: "Angry Tandoori Chicken (Half/Full) (GF)",
        description:
          "Juicy chicken marinated in yogurt and aromatic spices, grilled to smoky perfection in a tandoor oven.",
        price: "$19.90",
      },
      {
        name: "Sizzling Lamb Seekh Kebab (GF)",
        description:
          "Lamb mince, herbs, and spices, cooked in a clay oven. Served with mint chutney.",
        price: "$20.90",
      },
      {
        name: "Apollo Fish",
        description:
          "Crispy fried fish fillets tossed in a spicy, tangy Indo-Chinese Apollo sauce with curry leaves and chillies.",
        price: "$22.90",
      },
      {
        name: "Amritsari Fish Fry",
        description:
          "Fish fillets marinated in aromatic spices and coated in batter, deep-fried.",
        price: "$22.90",
      },
      {
        name: "Kali Mirch Prawn",
        description:
          "Juicy Prawns marinated with aromatic spices, pan tossed with freshly crushed black pepper, garlic, green chillies and curry leaves.",
        price: "$22.90",
      },
      {
        name: "Garlic Butter Prawn",
        description: "Prawns marinated in buttery garlic, aromatic spices.",
        price: "$22.90",
      },
      {
        name: "Exotic Tandoori Prawn (GF)",
        description:
          "Prawns marinated in tangy yogurt and spices, grilled to a smoky, charred finish.",
        price: "$23.90",
      },
      {
        name: "Aussie Lamb Chops (GF)",
        description:
          "Lamb cutlets marinated overnight with Kashmiri spices, garlic, and ginger. Skewered and grilled in the tandoor. Served with mint sauce.",
        price: "$25.90",
      },
    ],
  },
  platters: {
    title: "Platter for 2",
    subtitle: "",
    items: [
      {
        name: "Indish Vegetarian Platter",
        description: "Samosa, paneer tikka, kurkuri gobi.",
        price: "$22.90",
      },
      {
        name: "Indish Tandoori Platter",
        description:
          "Afghani chicken, lamb cutlets, seekh kebab, tandoori prawns.",
        price: "$29.90",
      },
    ],
  },
  vegetarian_mains: {
    title: "The Main Show (Vegetarian)",
    subtitle: "Vegetables Reimagined in Every Curry",
    items: [
      {
        name: "Dal Khushbudar (GF)",
        description:
          "A flavorful and protein-rich dish that combines healthy yellow lentils and mild spices.",
        price: "$17.90",
      },
      {
        name: "Dal Maharani (GF)",
        description:
          "Whole black lentils cooked with kidney beans, ginger, garlic, tomatoes, and fresh cream.",
        price: "$18.90",
      },
      {
        name: "Panchratan Dal (GF)",
        description:
          "A wholesome blend of five lentils slow cooked with aromatic spices for a rich, comforting dal.",
        price: "$18.90",
      },
      {
        name: "Aloo Gobi Dry (GF)",
        description:
          "Cauliflower fried and cooked with peas and potatoes. Can be made vegan.",
        price: "$18.90",
      },
      {
        name: "Chatpate Aloo Baingan (GF)",
        description:
          "Eggplant and potato fried and cooked with tomato gravy, herbs, and spices.",
        price: "$18.90",
      },
      {
        name: "Amazing Chana Masala (GF)",
        description:
          "Spicy and tangy chickpeas simmered in a flavorful tomato and onion gravy.",
        price: "$18.90",
      },
      {
        name: "Deewani Veg Korma (GF)",
        description:
          "Mixed vegetables cooked in a creamy, mildly spiced coconut and cashew gravy.",
        price: "$18.90",
      },
      {
        name: "Royal Soya Chaap Masala (GF)",
        description:
          "Tender soya chunks simmered in a rich, spicy tomato-based masala gravy.",
        price: "$18.90",
      },
      {
        name: "Bhindi Do Pyaaza (GF)",
        description:
          "Okra deep-fried and then sautéed with spices, tomatoes, ginger, garlic, and onion.",
        price: "$18.90",
      },
      {
        name: "Khumaani Kofta",
        description:
          "Grated cottage cheese, potato, raisins, sultanas, and cashew nut dumplings simmered in a cashew nut curry sauce.",
        price: "$18.90",
      },
      {
        name: "Matar Paneer (GF)",
        description:
          "Soft paneer and green peas cooked in a flavorful spiced tomato gravy.",
        price: "$19.90",
      },
      {
        name: "Paapi Kadai Paneer (GF)",
        description:
          "Paneer cubes cooked in a spicy tangy tomato sauce, onion, tossed with roasted bell peppers, onions and signature kadai spices.",
        price: "$19.90",
      },
      {
        name: "Lehsuni Saag Paneer (GF)",
        description:
          "Cottage cheese cooked in baby spinach puree with garlic, mild spices, cream.",
        price: "$19.90",
      },
      {
        name: "Paneer Butter Masala (GF)",
        description:
          "Cubes of Indian cottage cheese simmered in a Luscious, buttery tomato based gravy infused with aromatic spices and finished with fresh cream.",
        price: "$19.90",
      },
      {
        name: "Majestic Paneer Tikka Masala (GF)",
        description:
          "Grilled paneer cubes simmered in a rich, creamy tomato-based masala sauce.",
        price: "$19.90",
      },
      {
        name: "Methi Chaman Paneer (GF)",
        description:
          "Paneer cubes cooked in rich, creamy gravy of fenugreek leaves, spinach, and aromatic spices.",
        price: "$19.90",
      },
    ],
  },
  non_vegetarian_mains: {
    title: "The Main Show (Non-Vegetarian)",
    subtitle: "Meat that Melts, Flavour that Rocks",
    items: [
      {
        name: "Creamy Butter Chicken (GF)",
        description:
          "Tender tandoori chicken pieces simmered in rich Makhani gravy spiced with aromatic Indian herbs.",
        price: "$20.90",
      },
      {
        name: "Indian Style Butter Chicken (GF)",
        description:
          "Juicy chicken cooked in creamy, buttery tomato gravy with a perfect blend of hot spices.",
        price: "$20.90",
      },
      {
        name: "Naughty Mango Chicken (GF)",
        description:
          "Tender chicken cooked in a sweet and tangy mango sauce with subtle spices.",
        price: "$20.90",
      },
      {
        name: "Kadak Kadai Chicken (GF)",
        description:
          "Chicken cooked with diced capsicum, onions, ginger, and garlic.",
        price: "$20.90",
      },
      {
        name: "Angelic Chicken Saag (GF)",
        description:
          "Boneless chicken breast cooked in spinach gravy with Indian spices.",
        price: "$20.90",
      },
      {
        name: "Creamy Chicken Korma (GF)",
        description:
          "Chicken simmered in a rich, creamy blend of yogurt, nuts, and aromatic spices.",
        price: "$20.90",
      },
      {
        name: "Fiery Chicken Tikka Masala (GF)",
        description:
          "Marinated chicken fillets cooked in a clay oven, then prepared with capsicum, onion, tomato, and master gravy.",
        price: "$20.90",
      },
      {
        name: "Deewani Chicken Chettinad (GF)",
        description:
          "Dish from Tamilnadu made with chicken pieces cooked in a rich freshly ground spice blend of roasted coconut Blackpepper, funnel and red chillies.",
        price: "$20.90",
      },
      {
        name: "Savoury Methi Chicken (GF)",
        description:
          "Tender chicken cooked with fresh fenugreek leaves and aromatic spices for a flavorful twist.",
        price: "$20.90",
      },
      {
        name: "Blazing Chicken Vindaloo (GF)",
        description:
          "Spicy Goan chicken curry marinated in vinegar, garlic, and bold red chilies.",
        price: "$20.90",
      },
      {
        name: "Mughlai Chicken Curry (GF)",
        description:
          "Rich and aromatic chicken curry simmered with creamy yogurt, nuts, and traditional Mughlai spices.",
        price: "$20.90",
      },
      {
        name: "Andhra Chicken Curry (GF)",
        description:
          "Spicy chicken curry from Andra pradesh Made with blend of red chillies, curry leaves, onions, traditional spices.",
        price: "$20.90",
      },
    ],
  },
  lamb_and_goat: {
    title: "Lamb and Goat",
    subtitle: "",
    items: [
      {
        name: "Lusty Lamb Korma (GF)",
        description:
          "Tender lamb pieces slow-cooked in a rich, aromatic blend of creamy cashew sauce with traditional Indian spices.",
        price: "$22.90",
      },
      {
        name: "Blazing Lamb Vindaloo (GF)",
        description: "Diced lamb braised with red chilies and ginger.",
        price: "$22.90",
      },
      {
        name: "Marvelous Rogan Josh (GF)",
        description:
          "Lamb pieces cooked in a medium-spiced curry with coriander.",
        price: "$22.90",
      },
      {
        name: "Angelic Lamb Saag (GF)",
        description:
          "Tender lamb cooked with baby spinach puree, cream, ginger, and garlic, garnished with herbs.",
        price: "$22.90",
      },
      {
        name: "Dumdaar Kadai Gosh (GF)",
        description:
          "Spicy and flavorful goat meat cooked with bell peppers, onions, and aromatic kadai masala.",
        price: "$22.90",
      },
      {
        name: "Dhakad Goat Curry (GF)",
        description:
          "Tender, slow cooked goat meat simmer in a deeply spices onion tomato gravy with hints of garlic, ginger, and whole spices.",
        price: "$22.90",
      },
      {
        name: "Angelic Saag Goat (GF)",
        description:
          "Tender goat meat slow cooked in a rich, spiced spinach gravy.",
        price: "$22.90",
      },
    ],
  },
  beef_dishes: {
    title: "Beef Dishes",
    subtitle: "",
    items: [
      {
        name: "Lusty Beef Korma (GF)",
        description: "Diced beef slow cooked in cream and cashew sauce.",
        price: "$22.90",
      },
      {
        name: "Blazing Beef Vindaloo (GF)",
        description: "Diced beef braised with red chilies and fresh ginger.",
        price: "$22.90",
      },
      {
        name: "Majestic Beef Masala (GF)",
        description:
          "Rich and spicy beef cooked slow with bold masala spices for a royal, flavorful experience.",
        price: "$22.90",
      },
    ],
  },
  oceans_bounty: {
    title: "Ocean's Bounty",
    subtitle: "From the Sea to Your Plate",
    items: [
      {
        name: "Malabar Fish Curry (Snapper) (GF)",
        description:
          "Fish cooked in a rich, tangy coconut-based curry with traditional Malabar spices.",
        price: "$23.90",
      },
      {
        name: "Awesome Fish Masala (GF)",
        description:
          "Spicy and flavorful fish cooked in a rich, aromatic masala gravy.",
        price: "$23.90",
      },
      {
        name: "Malabar Prawn Curry (GF)",
        description:
          "Prawns cooked in a rich, tangy coconut-based curry with traditional Malabar spices.",
        price: "$23.90",
      },
      {
        name: "Goan Prawn Curry (GF)",
        description:
          "Tangy and spicy prawns cooked in a coconut-based curry with authentic Goan spices.",
        price: "$23.90",
      },
    ],
  },
  biryani: {
    title: "Biryani",
    subtitle: "Biryani So Good, You'll Keep Coming Back",
    items: [
      {
        name: "Veg Biryani",
        description:
          "Fragrant basmati rice cooked with mixed vegetables and aromatic spices for a flavorful, wholesome meal.",
        price: "$18.90",
      },
      {
        name: "Egg Dum Biryani",
        description:
          "Fluffy basmati rice cooked with boiled eggs and fragrant spices, slow cooked to perfection in the traditional dum style.",
        price: "$19.90",
      },
      {
        name: "Chicken Dum Biryani",
        description:
          "Aromatic basmati rice layered with tender chicken and slow cooked with fragrant spices in a traditional dum style.",
        price: "$20.90",
      },
      {
        name: "Ultimate Tikka Biryani",
        description:
          "Flavorful basmati rice layered with spiced vegetable or meat tikki patties, slow cooked to a delicious dum finish.",
        price: "$20.90",
      },
      {
        name: "Indish Chicken 65 Biryani",
        description:
          "Aromatic basmati rice cooked with tender chicken and a special blend of spices for a rich, flavorful biryani experience.",
        price: "$20.90",
      },
      {
        name: "Goat Dum Biryani",
        description:
          "Fragrant basmati rice slow cooked with tender goat meat and rich, aromatic spices in the traditional dum style.",
        price: "$22.90",
      },
    ],
  },
  atta: {
    title: "Atta (Flatbread)",
    subtitle: "Let the Naan Steal the Show",
    items: [
      {
        name: "Plain Naan",
        description: "Plain flour bread cooked in a clay oven.",
        price: "$4.50",
      },
      {
        name: "Tandoori Wholemeal Roti",
        description:
          "Soft whole wheat flatbread brushed with butter for a warm, comforting finish.",
        price: "$5.00",
      },
      {
        name: "Butter Naan",
        description: "Butter-flavored plain flour bread cooked in a clay oven.",
        price: "$5.00",
      },
      {
        name: "Garlic and Herb Naan",
        description: "Garlic-flavored plain flour bread cooked in a clay oven.",
        price: "$5.00",
      },
      {
        name: "Cheese and Garlic Naan",
        description: "Naan stuffed with cheese and chopped garlic.",
        price: "$5.50",
      },
      {
        name: "Cheese and Chilli Naan",
        description: "Naan stuffed with cheese and fresh green chili.",
        price: "$5.50",
      },
      {
        name: "Chicken Tikka and Cheese Naan",
        description: "Naan stuffed with tandoori chicken and cheese.",
        price: "$6.00",
      },
      {
        name: "Kashmiri Naan",
        description:
          "Soft, fluffy naan bread stuffed with a sweet and flavorful mix of nuts and dried fruits.",
        price: "$6.00",
      },
      {
        name: "Lacha Paratha",
        description: "Layered paratha cooked in a clay oven.",
        price: "$6.00",
      },
      {
        name: "Bread Basket",
        description:
          "Tandoori Roti, Garlic Herb Naan, and Butter Naan (1 each).",
        price: "$12.90",
      },
    ],
  },
  dessert: {
    title: "Dessert",
    subtitle: "End Your Meal on a Sweet Note",
    items: [
      {
        name: "Mango Kulfi / Pistachio Kulfi",
        description:
          "Indian ice cream in your choice of mango or pistachio flavor.",
        price: "$7.50",
      },
      {
        name: "Gulab Jamun (2 pcs)",
        description:
          "Two pieces. Sweet dumplings made from reduced milk and soaked in rose water. Served with ice cream.",
        price: "$8.50",
      },
      {
        name: "Gajjar Da Halwa",
        description: "A sweet Indian dessert made from carrots and dry fruit.",
        price: "$8.50",
      },
      {
        name: "Kesar Rasmalai (2 pcs)",
        description:
          "Soft and spongy paneer discs soaked in saffron-infused sweetened milk, garnished with nuts.",
        price: "$8.90",
      },
      {
        name: "Faluda",
        description:
          "Sweet, refreshing dessert drink with rose syrup, vermicelli, basil seeds, and chilled milk topped with a scoop of ice cream.",
        price: "$12.90",
      },
      {
        name: "Platter-E-Dessert",
        description:
          "Choice of 1 halwa, 1 kulfi, and 1 piece each of Ras Malai and Gulab Jamun.",
        price: "$14.90",
      },
    ],
  },
  rice: {
    title: "Rice",
    subtitle: "Fluffy, Aromatic, and Full of Flavours",
    items: [
      {
        name: "Steamed Rice",
        description: "Simply steamed basmati rice.",
        price: "$5.00",
      },
      {
        name: "Saffron Rice",
        description:
          "Aromatic basmati rice delicately infused with the luxurious flavor of saffron, creating a rich and fragrant side dish.",
        price: "$5.50",
      },
      {
        name: "Jeera Rice",
        description: "Indian basmati rice infused with cumin seeds and butter.",
        price: "$6.50",
      },
      {
        name: "Peas Pulao",
        description: "Basmati rice infused with saffron and baby peas.",
        price: "$6.50",
      },
      {
        name: "Kashmiri Pulao",
        description:
          "Indian basmati rice cooked with saffron, mild spices, and topped with dried fruits and fresh fruits for a rich, flavorful dish.",
        price: "$8.50",
      },
    ],
  },
  unusual_sides: {
    title: "Unusual Sides",
    subtitle: "",
    items: [
      {
        name: "Pappadums",
        description: "Served with mint sauce.",
        price: "$3.00",
      },
      {
        name: "Mixed Pickles",
        description: "Mango/lime/chili/mango chutney.",
        price: "$3.00",
      },
      {
        name: "Burani Raita",
        description: "Spiced yogurt.",
        price: "$5.00",
      },
      {
        name: "Garden Salad",
        description: "Mixed leaf salads.",
        price: "$6.90",
      },
      {
        name: "Old-Fashioned Kachumbar",
        description: "Onion, tomato, cucumber mix.",
        price: "$6.90",
      },
      {
        name: "Sirka Masala Pyaaz",
        description: "Pickled spiced onion, green chilies.",
        price: "$6.90",
      },
    ],
  },
  feast_menu: {
    title: "Feast Menu",
    subtitle: "",
    items: [
      {
        name: "INDISH FEAST",
        description:
          "Recommended for 4 people. A delightful spread to indulge in the best of Indian flavors: Starters: Samosa, Chicken Tikka, Gobi Kurkuri. Mains: 1 meat dish, 1 vegetarian selection, 1 daal. Accompaniments: Assorted dips, papadums, choice of bread, and steamed rice. Dessert: A selection of desserts to satisfy your sweet tooth.",
        price: "$44.90 per person",
      },
      {
        name: "ROYAL INDISH FEAST",
        description:
          "Recommended for 4 people. For a lavish, royal experience, this feast offers a variety of indulgent dishes: Starters: Samosa, Kurkuri Gobi, Seekh Kebab, Tandoori Prawns. Mains: 1 meat dish, 1 seafood dish, 1 vegetarian dish, 1 daal. Accompaniments: Assorted dips, papadums, choice of bread, and saffron rice. Dessert: A selection of indulgent desserts to end on a sweet note.",
        price: "$49.90 per person",
      },
    ],
  },
};

export { BEVERAGES_MENU, FOOD_MENU };