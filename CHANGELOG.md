# Changelog - Indish Restaurant Website

All notable changes to this project are documented in this file.

## [Unreleased / Latest] - 2026-10-17

### Changed
- **Operating Hours & Weekend Lunch Timing:**
  - Expanded platform operating hours to include weekend lunch specials: **Saturday & Sunday: 11:00 AM – 2:30 PM (11-2.30pm)** alongside dinner hours **Tuesday – Sunday: 5:00 PM – 10:00 PM**, with **Monday: CLOSED**.
  - Updated `APP_CONSTANTS.opening` to `"Tue-Sun 5-10pm | Sat-Sun Lunch 11-2.30pm | Mon Closed"` and added structured fields (`dinner_hours`, `lunch_hours`, `closed_hours`).
  - Updated `Header.js` top bar styling to ensure responsive, wrap-free rendering across mobile, tablet, and desktop viewports.
  - Formatted `Footer.js` opening hours cleanly into distinct dinner, lunch, and closed entries.
  - Updated `dailyOffer.js` opening hours with explicit dinner and weekend lunch slots.
  - Updated `src/constants/menu.js` lunch specials subtitle to `"Sat & Sun, 11:00AM - 2:30PM"`.
  - Updated schema.org structured data on Homepage (`src/pages/index.js`) to reflect both dinner (`Tu-Su 17:00-22:00`) and weekend lunch (`Sa-Su 11:00-14:30`).

## [2026-10-14]

### Fixed
- **Menu Data Schema & SSR 500 Resolution (`src/constants/menu.js`):**
  - Resolved server-side rendering 500 error on `/menu` by fixing `BEVERAGES_MENU` data structure. Restored array schema for all 10 beverage categories (`mocktails`, `cocktails`, `beer`, `spirits`, `whisky`, `champagne`, `white_wine`, `red_wine`, `beverages`, `tea`) with `name`, `location`, `glass_price`, and `bottle_price`.
  - Re-integrated soft drinks, bottled water, sparkling water, and teas with rich descriptions and updated prices.
  - Re-integrated `dessert` (6 items) and `feast_menu` (2 feast options) directly into `FOOD_MENU` so they render properly in all interactive food filters (All, Vegetarian, Non-Vegetarian).
  - Restored `LUNCH_MENU` (9 lunch specials) and exported it to fix runtime errors when switching to the Lunch Menu tab.
  - Exported `DESSERT_MENU` and `FEAST_MENU` aliases for backward and forward compatibility.

### Changed
- **Official Custom Subdomain URLs & Routing (`src/constants/url.js`):**
  - Connected and activated official custom subdomain `order.indish.com.au` via GoDaddy DNS and Square SSL.
  - Updated Order Page URL to: `https://order.indish.com.au/`.
  - Updated Table Booking & Events URLs to: `https://order.indish.com.au/table-booking`.
  - Updated Contact Us URL to: `https://order.indish.com.au/contact-us`.
- **New Owner Contact Information (`src/constants/app_constants.js`):**
  - Updated primary phone number to `(02) 4031 5440`.
  - Removed outdated secondary phone number.
  - Updated primary contact email to `ask@indish.com.au`.
- **Restaurant Trading Hours & Automatic Status Detection:**
  - Updated operating hours across the entire platform: **Tuesday – Sunday: 17:00 – 22:00 (5:00 PM – 10:00 PM)** | **Monday: CLOSED**.
  - Updated `src/utils/storeStatus.js` to automatically detect Monday closures in Sydney / Australian Eastern Time.
  - Updated `APP_CONSTANTS.opening` to `"Tue-Sun 5-10pm | Mon Closed"` and `closedDay` to `'Monday'`.
  - Updated Homepage Daily Offer banner (`src/constants/descriptions/home/dailyOffer.js`) and schema.org structured data (`src/pages/index.js`) to reflect the new schedule.
- **Store Opening Status (`src/constants/app_constants.js`):**
  - Updated `opened` status flag to `true`.
- **Fulfillment & Square POS Architecture Strategy:**
  - Formulated strategy for Square Online integration: Pickup-only via Square Online; Delivery redirected to Uber Eats.
  - Recommended consolidation of 3 separate Square forms (`/events`, `/contact-us`, `/table-booking`) into 1 unified "Table Bookings & Contact" page containing date, time, guests, and special requests.
- **Brand Alignment Recommendations for Square Online:**
  - Provided exact color hex codes (`#E00034` / `#FF0038` primary red, `#121212` dark header, `#FFFFFF` / `#F8F6F2` body) to replace default mint green and create seamless continuity between `indish.com.au` and Square POS.

### Added
- **`AGENTS.md`:** Comprehensive architectural and developmental reference for AI pair programmers and human engineers.
- **`CHANGELOG.md`:** Historical record of modifications and decisions.
