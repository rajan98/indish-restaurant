# Changelog - Indish Restaurant Website

All notable changes to this project are documented in this file.

## [Unreleased / Latest] - 2026-10-14

### Fixed
- **Menu Data Schema & SSR 500 Resolution (`src/constants/menu.js`):**
  - Resolved server-side rendering 500 error on `/menu` by fixing `BEVERAGES_MENU` data structure. Restored array schema for all 10 beverage categories (`mocktails`, `cocktails`, `beer`, `spirits`, `whisky`, `champagne`, `white_wine`, `red_wine`, `beverages`, `tea`) with `name`, `location`, `glass_price`, and `bottle_price`.
  - Re-integrated soft drinks, bottled water, sparkling water, and teas with rich descriptions and updated prices.
  - Re-integrated `dessert` (6 items) and `feast_menu` (2 feast options) directly into `FOOD_MENU` so they render properly in all interactive food filters (All, Vegetarian, Non-Vegetarian).
  - Restored `LUNCH_MENU` (9 lunch specials) and exported it to fix runtime errors when switching to the Lunch Menu tab.
  - Exported `DESSERT_MENU` and `FEAST_MENU` aliases for backward and forward compatibility.

### Changed
- **Square POS URLs & Routing (`src/constants/url.js`):**
  - Updated Order Page URL to root POS domain: `https://indish-indian-restro-bar.square.site/` (as POS site functions directly as the ordering storefront).
  - Updated Table Booking, Contact, and Events URLs to unified contact & reservation page: `https://indish-indian-restro-bar.square.site/contact-us`.
- **New Owner Contact Information (`src/constants/app_constants.js`):**
  - Updated primary phone number to `(02) 4031 5440`.
  - Removed outdated secondary phone number.
  - Updated primary contact email to `ask@indish.com.au`.
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
