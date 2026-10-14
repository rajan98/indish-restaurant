# AGENTS.md - Developer & Agent Guide for Indish Restaurant

## 1. Project Overview
- **Project Name:** Indish Indian Restro-Bar Website
- **Repository:** `indish-restaurant`
- **Framework:** Next.js (React 18, Pages router)
- **Styling:** Tailwind CSS + Vanilla CSS (`src/styles/globals.css`)
- **Icons:** `lucide-react`
- **Business Identity:** Authentic Indian Restro-Bar located in Cooks Hill, Newcastle, NSW, Australia.

---

## 2. Architecture & Directory Structure
```
indish-restaurant/
├── public/                  # Static assets (images, logos, videos)
│   └── images/logo.webp     # Official psychedelic Indish logo
├── src/
│   ├── components/
│   │   ├── home/            # Home sections (Hero, About, Featured, PlanningEvent, etc.)
│   │   ├── layout/          # Header, Footer, EachPageLayout
│   │   ├── menu/            # FoodMenuComponent (interactive tabs: All, Veg, Non-Veg, Vegan)
│   │   └── ui/              # RenovationBanner, SiteLogo, Popup
│   ├── constants/
│   │   ├── app_constants.js # Business details, opening hours, contact info, renovation status
│   │   ├── menu.js          # Authoritative menu data (FOOD_MENU, BEVERAGES_MENU, LUNCH_MENU)
│   │   ├── menu_backup.js   # Reference backup with exact schemas
│   │   ├── url.js           # Internal routes and external Square/delivery URLs
│   │   └── descriptions.js  # Copywriting for home and about sections
│   ├── pages/
│   │   ├── index.js         # Landing page
│   │   ├── menu/index.js    # Comprehensive interactive menu (A la carte, Lunch, Beverages)
│   │   ├── about/index.js   # About us page
│   │   ├── gallery/index.js # Photo gallery
│   │   └── contact/index.js # Contact page
│   └── styles/
│       └── globals.css      # Base Tailwind styles & typography
```

---

## 3. Brand Identity & Design System
- **Colors:**
  - **Primary Crimson/Red:** `#FF0038` (in Tailwind: `primary-500`, buttons and highlights)
  - **Square Main Colour:** `#E00034` or `#FF0038`
  - **Dark Base:** `#0A0A0A` / `#121212` / `#1A1A1A` (Restro-bar header, footer, hero)
  - **Light Base:** `#FFFFFF` (Content cards, item list) and `#F8F6F2` (Warm ivory)
  - **Saffron/Gold Accent:** `#D97706` / `#F59E0B` (from logo pattern)
- **Typography:**
  - Headings: Serif (`Playfair Display`) or Sans (`Poppins` on Square POS)
  - Body: Sans (`Inter` / `Poppins`)
- **Corners:** `Rounded` (`rounded-lg` / `rounded-2xl`)

---

## 4. Menu Data Architecture (`src/constants/menu.js`)
**CRITICAL:** Any modifications to `src/constants/menu.js` must strictly follow these schemas to prevent SSR crashes:

1. **`BEVERAGES_MENU`:**
   - Must be an object where each category (`mocktails`, `cocktails`, `beer`, `spirits`, `whisky`, `champagne`, `white_wine`, `red_wine`, `beverages`, `tea`) is an **Array** of item objects:
   ```javascript
   {
     name: "Mango Lassi",
     location: "A creamy blend of ripe mangoes...",
     glass_price: "$6.00",
     bottle_price: null // or "$32"
   }
   ```
2. **`FOOD_MENU`:**
   - An object of section objects (`veg_entrees`, `chaat_and_snack_temptations`, `non_veg_entrees`, ..., `dessert`, `feast_menu`):
   ```javascript
   section_key: {
     title: "Section Title",
     subtitle: "",
     items: [
       {
         name: "Dish Name",
         description: "Dish description...",
         price: "$18.90",
         type: "Veg" // "Veg" | "Non-Veg" | "Vegan"
       }
     ]
   }
   ```
   *Note: `dessert` and `feast_menu` MUST be sections inside `FOOD_MENU`.*
3. **`LUNCH_MENU`:**
   - Contains `lunch_specials` section with item objects.
4. **Exports:**
   - `export { BEVERAGES_MENU, FOOD_MENU, LUNCH_MENU, DESSERT_MENU, FEAST_MENU };`

---

## 5. Fulfillment & External Integration Strategy
- **Pickup Orders:** Handled directly via Square Online (`https://indish-indian-restro-bar.square.site/`). The POS site serves as the dedicated ordering storefront.
- **Delivery Orders:** Fulfilled through Uber Eats. The website does not provide in-house delivery; customers seeking delivery must be routed to Uber Eats.
- **Table Bookings & Inquiries:** Consolidated into a single Square Online booking/contact page (`https://indish-indian-restro-bar.square.site/contact-us`) capturing Name, Email, Phone, Guests, Date, Time, and Special Requests. Replaces redundant separate event/contact forms.
- **Contact Details (New Owner):**
  - Phone: `(02) 4031 5440`
  - Email: `ask@indish.com.au`

---

## 6. Development Guidelines
- Dev Server: `npm run dev`
- Build Check: `npm run build`
- Always verify SSR compatibility by testing `http://localhost:3000/menu` after touching menu constants.
