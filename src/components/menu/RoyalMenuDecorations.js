import React from "react";

/**
 * Royal Corner Ornament - Intricate filigree corner scroll
 * Mirrors automatically for top-left (tl), top-right (tr), bottom-left (bl), bottom-right (br)
 */
export const RoyalCornerOrnament = ({ position = "tl", className = "w-16 h-16 text-[#C5A059]" }) => {
  const transform = {
    tl: "",
    tr: "scale-x-[-1]",
    bl: "scale-y-[-1]",
    br: "scale-[-1]",
  }[position] || "";

  return (
    <div className={`pointer-events-none select-none ${transform} ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        className="w-full h-full drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
      >
        {/* Corner point flourish */}
        <circle cx="6" cy="6" r="2.5" />
        <path d="M 6 6 Q 16 3 24 10 Q 15 15 6 6 Z" />
        <path d="M 6 6 Q 3 16 10 24 Q 15 15 6 6 Z" />

        {/* Outer border lines */}
        <line x1="6" y1="6" x2="94" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="6" y1="6" x2="6" y2="94" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

        {/* Inner thin guide line */}
        <line x1="12" y1="12" x2="85" y2="12" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.7" />
        <line x1="12" y1="12" x2="12" y2="85" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.7" />

        {/* Horizontal arm filigree flourishes */}
        <path
          d="M 12 12 C 20 5, 30 18, 40 12 C 48 8, 44 2, 38 4 C 30 6, 32 16, 24 16 C 18 16, 14 12, 12 12 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="44" cy="5" r="1.5" />
        <circle cx="60" cy="9" r="1.2" />

        {/* Vertical arm filigree flourishes */}
        <path
          d="M 12 12 C 5 20, 18 30, 12 40 C 8 48, 2 44, 4 38 C 6 30, 16 32, 16 24 C 16 18, 12 14, 12 12 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="5" cy="44" r="1.5" />
        <circle cx="9" cy="60" r="1.2" />

        {/* Diagonal corner heart/spiral motif */}
        <path
          d="M 14 14 C 26 24, 34 16, 30 30 C 26 42, 14 28, 14 14 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M 14 14 C 24 26, 16 34, 30 30 C 42 26, 28 14, 14 14 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="28" cy="28" r="2" />
        <circle cx="21" cy="21" r="1.2" />

        {/* Fine trailing vine */}
        <path
          d="M 30 30 C 40 40, 50 35, 46 26 C 42 18, 35 22, 38 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M 30 30 C 40 40, 35 50, 26 46 C 18 42, 22 35, 28 38"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

/**
 * Royal Side Scroll - Ornamental curly wing used to flank text
 */
export const RoyalSideScroll = ({ position = "left", className = "w-12 h-6 text-[#C5A059]" }) => {
  const transform = position === "right" ? "scale-x-[-1]" : "";
  return (
    <div className={`inline-block ${transform} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 60 30" fill="none" stroke="currentColor" className="w-full h-full">
        <path
          d="M 55 15 C 45 15, 38 8, 28 8 C 18 8, 12 15, 8 20 C 4 25, 2 22, 5 18 C 10 12, 18 12, 26 15 C 32 18, 38 24, 46 22 C 52 20, 50 15, 42 16"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="5" cy="18" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="42" cy="16" r="1.4" fill="currentColor" stroke="none" />
        <path
          d="M 28 8 C 22 4, 14 5, 12 10"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <circle cx="12" cy="10" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
};

/**
 * Royal Header Crest - Exact ornate vintage filigree centerpiece from the user's reference image
 */
export const RoyalHeaderCrest = ({
  title = "MENU",
  subtitle = "ROYAL DINING EXPERIENCE",
  className = "",
}) => {
  return (
    <div className={`relative flex flex-col items-center justify-center text-center select-none ${className}`}>
      {/* Top Symmetrical Filigree Crest */}
      <div className="w-64 sm:w-80 md:w-96 h-14 md:h-16 text-[#B8860B] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
        <svg viewBox="0 0 320 60" fill="none" className="w-full h-full">
          {/* Central Finial & Crown */}
          <circle cx="160" cy="8" r="2.5" fill="currentColor" />
          <path
            d="M 160 11 C 158 16, 153 22, 148 24 C 142 26, 137 22, 140 16 C 143 10, 154 10, 160 20 C 166 10, 177 10, 180 16 C 183 22, 178 26, 172 24 C 167 22, 162 16, 160 11 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.15"
          />

          {/* Left Wing Flourishes */}
          <path
            d="M 152 22 C 140 20, 125 10, 115 15 C 105 20, 108 32, 120 30 C 132 28, 136 18, 148 24 C 154 27, 155 35, 148 40 C 140 45, 128 42, 122 36 C 118 32, 110 32, 106 38 C 102 44, 108 50, 116 50 C 128 50, 142 42, 156 38"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M 115 15 C 98 12, 85 24, 70 20 C 58 16, 62 8, 72 10 C 82 12, 90 22, 102 24"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <circle cx="62" cy="9" r="1.8" fill="currentColor" />
          <circle cx="106" cy="38" r="1.8" fill="currentColor" />
          <circle cx="118" cy="18" r="1.5" fill="currentColor" />

          {/* Right Wing Flourishes (Symmetrical mirror) */}
          <path
            d="M 168 22 C 180 20, 195 10, 205 15 C 215 20, 212 32, 200 30 C 188 28, 184 18, 172 24 C 166 27, 165 35, 172 40 C 180 45, 192 42, 198 36 C 202 32, 210 32, 214 38 C 218 44, 212 50, 204 50 C 192 50, 178 42, 164 38"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M 205 15 C 222 12, 235 24, 250 20 C 262 16, 258 8, 248 10 C 238 12, 230 22, 218 24"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <circle cx="258" cy="9" r="1.8" fill="currentColor" />
          <circle cx="214" cy="38" r="1.8" fill="currentColor" />
          <circle cx="202" cy="18" r="1.5" fill="currentColor" />

          {/* Subtle connecting arch */}
          <path
            d="M 50 48 Q 160 56 270 48"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeDasharray="2 4"
            strokeOpacity="0.7"
          />
        </svg>
      </div>

      {/* Top Beaded Ornamental Rail Bar */}
      <div className="w-full max-w-xl flex items-center justify-center my-1">
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059] to-[#996515]"></div>
        <div className="mx-2 flex items-center space-x-1 text-[#B8860B]">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#B8860B] inline-block"></span>
          <span className="w-2 h-2 rotate-45 bg-[#996515] inline-block"></span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#B8860B] inline-block"></span>
        </div>
        <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-[#C5A059] to-[#996515]"></div>
      </div>

      {/* Decorative Beaded Dot Rail */}
      <div className="w-full max-w-lg flex items-center justify-between text-[#C5A059] px-6 text-[8px] opacity-70 tracking-[6px] overflow-hidden">
        <span>❖</span>
        <span className="h-[1px] w-full bg-[#C5A059]/40 mx-2"></span>
        <span>❖</span>
      </div>

      {/* Central Title with Side Flourishes */}
      <div className="flex items-center justify-center gap-3 md:gap-6 py-2 px-4">
        <RoyalSideScroll position="left" className="w-10 sm:w-14 md:w-20 h-6 sm:h-8 text-[#B8860B]" />
        
        <div className="text-center px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-[0.22em] text-[#2C1810] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] uppercase">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[10px] sm:text-xs md:text-sm font-serif tracking-[0.35em] text-[#8C6D37] uppercase font-semibold mt-1">
              {subtitle}
            </p>
          )}
        </div>

        <RoyalSideScroll position="right" className="w-10 sm:w-14 md:w-20 h-6 sm:h-8 text-[#B8860B]" />
      </div>

      {/* Bottom Beaded Dot Rail */}
      <div className="w-full max-w-lg flex items-center justify-between text-[#C5A059] px-6 text-[8px] opacity-70 tracking-[6px] overflow-hidden">
        <span>❖</span>
        <span className="h-[1px] w-full bg-[#C5A059]/40 mx-2"></span>
        <span>❖</span>
      </div>

      {/* Bottom Beaded Ornamental Rail Bar */}
      <div className="w-full max-w-xl flex items-center justify-center my-1">
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059] to-[#996515]"></div>
        <div className="mx-2 flex items-center space-x-1 text-[#B8860B]">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#B8860B] inline-block"></span>
          <span className="w-2 h-2 rotate-45 bg-[#996515] inline-block"></span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#B8860B] inline-block"></span>
        </div>
        <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-[#C5A059] to-[#996515]"></div>
      </div>

      {/* Bottom Symmetrical Filigree Crest (Inverted) */}
      <div className="w-64 sm:w-80 md:w-96 h-12 md:h-14 text-[#B8860B] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] scale-y-[-1]">
        <svg viewBox="0 0 320 60" fill="none" className="w-full h-full">
          <circle cx="160" cy="8" r="2.5" fill="currentColor" />
          <path
            d="M 160 11 C 158 16, 153 22, 148 24 C 142 26, 137 22, 140 16 C 143 10, 154 10, 160 20 C 166 10, 177 10, 180 16 C 183 22, 178 26, 172 24 C 167 22, 162 16, 160 11 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.15"
          />
          <path
            d="M 152 22 C 140 20, 125 10, 115 15 C 105 20, 108 32, 120 30 C 132 28, 136 18, 148 24 C 154 27, 155 35, 148 40 C 140 45, 128 42, 122 36 C 118 32, 110 32, 106 38 C 102 44, 108 50, 116 50 C 128 50, 142 42, 156 38"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M 115 15 C 98 12, 85 24, 70 20 C 58 16, 62 8, 72 10 C 82 12, 90 22, 102 24"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <circle cx="62" cy="9" r="1.8" fill="currentColor" />
          <circle cx="106" cy="38" r="1.8" fill="currentColor" />
          <path
            d="M 168 22 C 180 20, 195 10, 205 15 C 215 20, 212 32, 200 30 C 188 28, 184 18, 172 24 C 166 27, 165 35, 172 40 C 180 45, 192 42, 198 36 C 202 32, 210 32, 214 38 C 218 44, 212 50, 204 50 C 192 50, 178 42, 164 38"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M 205 15 C 222 12, 235 24, 250 20 C 262 16, 258 8, 248 10 C 238 12, 230 22, 218 24"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <circle cx="258" cy="9" r="1.8" fill="currentColor" />
          <circle cx="214" cy="38" r="1.8" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

/**
 * Royal Section Ornament - Header flourish used atop individual category blocks
 */
export const RoyalSectionOrnament = ({ title, subtitle, count = null }) => {
  return (
    <div className="relative py-4 px-4 text-center select-none bg-gradient-to-b from-[#2A170F] to-[#1A0D08] text-[#F5E6C8] rounded-t-xl border-b-2 border-[#D4AF37]/40 shadow-inner overflow-hidden">
      {/* Background Indian Jaali subtle pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
        }}
      />

      {/* Decorative top mini-crest */}
      <div className="flex items-center justify-center space-x-2 text-[#D4AF37] mb-1">
        <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/60"></span>
        <svg viewBox="0 0 40 16" className="w-8 h-3 fill-[#D4AF37]">
          <path d="M 20 0 L 23 8 L 31 8 L 25 12 L 27 20 L 20 15 L 13 20 L 15 12 L 9 8 L 17 8 Z" transform="scale(0.8) translate(5, -2)" />
        </svg>
        <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/60"></span>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold tracking-wider text-[#FAF3E3] uppercase drop-shadow-md">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs sm:text-sm font-sans tracking-wide text-[#E6C687] mt-1 font-light italic max-w-xl">
            {subtitle}
          </p>
        )}
      </div>

      {/* Ornate arch scallop line along bottom of header */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
    </div>
  );
};

/**
 * Royal Decorative Divider
 */
export const RoyalDivider = ({ className = "my-6" }) => {
  return (
    <div className={`flex items-center justify-center text-[#B8860B] opacity-75 ${className}`}>
      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-[#B8860B]/70"></span>
      <div className="mx-3 flex items-center space-x-1.5">
        <span className="w-1 h-1 rounded-full bg-[#B8860B]"></span>
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#B8860B] stroke-[1.5]">
          <path d="M12 2 C8 7, 8 11, 12 15 C16 11, 16 7, 12 2 Z" />
          <path d="M7 12 C10 10, 14 10, 17 12" />
        </svg>
        <span className="w-1 h-1 rounded-full bg-[#B8860B]"></span>
      </div>
      <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C5A059]/40 to-[#B8860B]/70"></span>
    </div>
  );
};

/**
 * Royal Dietary Badge (Veg, Non-Veg, Vegan, Gluten Free)
 */
export const RoyalDietaryBadge = ({ type }) => {
  if (!type) return null;

  if (type === "Veg" || type === "Vegetarian") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-[#F0FDF4] text-[#166534] border border-[#86EFAC] shadow-xs">
        <span className="w-2 h-2 rounded-full bg-[#16A34A] ring-2 ring-[#BBF7D0]"></span>
        Veg
      </span>
    );
  }

  if (type === "Non-Veg" || type === "Non-Vegetarian") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-[#FFF1F2] text-[#9F1239] border border-[#FECDD3] shadow-xs">
        <span className="w-2 h-2 rounded-full bg-[#E11D48] ring-2 ring-[#FFE4E6]"></span>
        Non-Veg
      </span>
    );
  }

  if (type === "Vegan") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-[#FEFCE8] text-[#854D0E] border border-[#FEF08A] shadow-xs">
        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#CA8A04]">
          <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.6 8.4C6.2 19 6 17.5 6 16c0-4.4 3.6-8 8-8 1.5 0 3 .2 4.4.6C16.6 3.8 13.5 2 12 2z" />
        </svg>
        Vegan
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#F5F5F4] text-[#57534E] border border-[#E7E5E4]">
      {type}
    </span>
  );
};

/**
 * Curved Paper Trim - Decorative wavy scalloped Indian lace border along top and bottom
 */
export const CurvedPaperTrim = ({ position = "top", className = "" }) => {
  const isBottom = position === "bottom";
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none text-[#C5A059] ${
        isBottom ? "rotate-180 -mt-1" : "-mb-1"
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 24"
        fill="currentColor"
        className="w-full h-4 sm:h-5 md:h-6 opacity-80"
        preserveAspectRatio="none"
      >
        <path d="M0,0 C15,12 35,12 50,0 C65,12 85,12 100,0 C115,12 135,12 150,0 C165,12 185,12 200,0 C215,12 235,12 250,0 C265,12 285,12 300,0 C315,12 335,12 350,0 C365,12 385,12 400,0 C415,12 435,12 450,0 C465,12 485,12 500,0 C515,12 535,12 550,0 C565,12 585,12 600,0 C615,12 635,12 650,0 C665,12 685,12 700,0 C715,12 735,12 750,0 C765,12 785,12 800,0 C815,12 835,12 850,0 C865,12 885,12 900,0 C915,12 935,12 950,0 C965,12 985,12 1000,0 C1015,12 1035,12 1050,0 C1065,12 1085,12 1100,0 C1115,12 1135,12 1150,0 C1165,12 1185,12 1200,0 L1200,24 L0,24 Z" />
      </svg>
    </div>
  );
};

/**
 * Royal Jharokha Arch Header
 * Classic multi-foil Mughal / Rajput palace curved arch framing the section titles
 */
export const RoyalJharokhaArch = ({ title, subtitle, count = null }) => {
  return (
    <div className="relative pt-6 pb-4 px-4 text-center select-none bg-gradient-to-b from-[#1F110B] via-[#2A160F] to-[#170B06] text-[#F5E6C8] rounded-t-2xl border-b-2 border-[#D4AF37]/50 shadow-inner overflow-hidden">
      {/* Indian Jaali Lattice Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 1.5px, transparent 1.5px)`,
          backgroundSize: "18px 18px",
        }}
      />

      {/* Royal Mughal Arch Curve Silhouette */}
      <div className="flex justify-center mb-2">
        <svg viewBox="0 0 200 40" className="w-48 sm:w-64 h-8 fill-none text-[#D4AF37]">
          {/* Multi-foil Indian Arch Silhouette */}
          <path
            d="M 10 38 Q 40 38 60 28 Q 75 18 90 24 Q 100 10 110 24 Q 125 18 140 28 Q 160 38 190 38"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Center Lotus Finial */}
          <circle cx="100" cy="8" r="2.5" fill="currentColor" />
          <path d="M 100 11 L 96 18 L 104 18 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-3">
          <span className="text-[#C5A059] text-xs hidden sm:inline">❖</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold tracking-[0.12em] text-[#FAF3E3] uppercase drop-shadow-md">
            {title}
          </h3>
          <span className="text-[#C5A059] text-xs hidden sm:inline">❖</span>
        </div>

        {subtitle && (
          <p className="text-xs sm:text-sm font-sans tracking-wide text-[#E6C687] mt-1.5 font-light italic max-w-xl px-4">
            {subtitle}
          </p>
        )}
      </div>

      {/* Decorative Gold Filigree Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5C158] to-transparent"></div>
    </div>
  );
};

/**
 * Royal Paper Sheet Container
 * Wraps content in authentic antique royal parchment with:
 * - 4 corner filigree flourishes
 * - Gold double borders
 * - Subtle deckled/textured paper background
 * - Warm ambient drop-shadow
 */
export const RoyalPaperSheet = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Top curved ornamental trim */}
      <div className="relative z-10 mx-4 sm:mx-8">
        <CurvedPaperTrim position="top" />
      </div>

      <div
        className="relative bg-[#FAF5E8] rounded-2xl p-4 sm:p-8 md:p-12 shadow-[0_25px_60px_rgba(40,25,12,0.22),0_4px_15px_rgba(40,25,12,0.1)] border-2 border-[#D4AF37]/60"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 0%, rgba(255, 253, 245, 0.98) 0%, rgba(250, 245, 232, 0.98) 50%, rgba(243, 233, 212, 0.95) 100%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C5A059' fill-opacity='0.04' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")
          `,
        }}
      >
        {/* Ornate Gold Double Inset Frame */}
        <div className="absolute inset-2 sm:inset-4 md:inset-5 border border-[#B8860B]/40 rounded-xl pointer-events-none"></div>
        <div className="absolute inset-3 sm:inset-5 md:inset-6 border border-[#C5A059]/20 rounded-lg pointer-events-none"></div>

        {/* 4 Authentic Royal Filigree Corner Ornaments (from reference photo) */}
        <RoyalCornerOrnament position="tl" className="absolute top-1 left-1 sm:top-3 sm:left-3 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#B8860B]" />
        <RoyalCornerOrnament position="tr" className="absolute top-1 right-1 sm:top-3 sm:right-3 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#B8860B]" />
        <RoyalCornerOrnament position="bl" className="absolute bottom-1 left-1 sm:bottom-3 sm:left-3 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#B8860B]" />
        <RoyalCornerOrnament position="br" className="absolute bottom-1 right-1 sm:bottom-3 sm:right-3 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#B8860B]" />

        {/* Subtle Central Royal Mandala Watermark */}
        <div
          className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.035] overflow-hidden"
          aria-hidden="true"
        >
          <svg viewBox="0 0 500 500" className="w-[550px] h-[550px] text-[#B8860B] fill-currentColor">
            <circle cx="250" cy="250" r="230" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
            <circle cx="250" cy="250" r="190" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="250" cy="250" r="150" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M250,50 L260,200 L300,100 L280,210 L350,150 L290,230 L390,200 L300,250 L390,300 L290,270 L350,350 L280,290 L300,400 L260,300 L250,450 L240,300 L200,400 L220,290 L150,350 L210,270 L110,300 L200,250 L110,200 L210,230 L150,150 L220,210 L200,100 L240,200 Z" opacity="0.4" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>

      {/* Bottom curved ornamental trim */}
      <div className="relative z-10 mx-4 sm:mx-8">
        <CurvedPaperTrim position="bottom" />
      </div>
    </div>
  );
};
