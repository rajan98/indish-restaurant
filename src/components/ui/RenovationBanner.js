import { useEffect, useState } from "react";
import APP_CONSTANTS from "../../constants/app_constants";

/* ─────────────────────────────────────────────
   Ornamental Header SVG — symmetric flourish
   Crimson + Gold, sits at top of the card
──────────────────────────────────────────────── */
const OrnamentalHeader = () => (
  <svg
    viewBox="0 0 480 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "85%", maxWidth: "420px", display: "block", margin: "0 auto" }}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="oh-g" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#c41e3a" stopOpacity="0.15" />
        <stop offset="20%"  stopColor="#c41e3a" />
        <stop offset="40%"  stopColor="#d4a044" />
        <stop offset="50%"  stopColor="#f5c842" />
        <stop offset="60%"  stopColor="#d4a044" />
        <stop offset="80%"  stopColor="#c41e3a" />
        <stop offset="100%" stopColor="#c41e3a" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="oh-fill" x1="240" y1="0" x2="240" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#f5c842" />
        <stop offset="100%" stopColor="#c41e3a" />
      </linearGradient>
    </defs>

    {/* Centre palmette */}
    <path d="M240 8 C237 16 229 22 232 30 C229 35 222 33 225 40 C232 36 237 42 240 48 C243 42 248 36 255 40 C258 33 251 35 248 30 C251 22 243 16 240 8Z" fill="url(#oh-fill)" opacity="0.8"/>
    <circle cx="240" cy="6" r="2.5" fill="#f5c842" opacity="0.9"/>

    {/* Left wing petal */}
    <path d="M230 26 C224 21 216 22 214 28 C212 34 218 37 224 33" stroke="url(#oh-g)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    {/* Right wing petal */}
    <path d="M250 26 C256 21 264 22 266 28 C268 34 262 37 256 33" stroke="url(#oh-g)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>

    {/* LEFT main arch */}
    <path d="M222 44 C200 38 170 24 142 16 C114 8 90 14 78 28 C66 42 74 62 88 64 C98 66 106 56 100 50 C95 44 92 54 97 56" stroke="url(#oh-g)" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    {/* Left arch leaf */}
    <path d="M110 12 C104 4 94 6 96 12 C98 18 108 17 110 13" stroke="url(#oh-g)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* Left ear leaf */}
    <path d="M78 38 C68 30 60 34 62 40 C64 46 76 45 77 39" stroke="url(#oh-g)" strokeWidth="1.4" strokeLinecap="round" fill="none"/>

    {/* LEFT inner scroll */}
    <path d="M218 50 C204 56 192 68 188 80 C184 90 190 98 198 96 C204 94 208 86 202 82 C197 78 196 86 200 88" stroke="url(#oh-g)" strokeWidth="1.8" strokeLinecap="round" fill="none"/>

    {/* RIGHT main arch (mirror) */}
    <path d="M258 44 C280 38 310 24 338 16 C366 8 390 14 402 28 C414 42 406 62 392 64 C382 66 374 56 380 50 C385 44 388 54 383 56" stroke="url(#oh-g)" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    {/* Right arch leaf */}
    <path d="M370 12 C376 4 386 6 384 12 C382 18 372 17 370 13" stroke="url(#oh-g)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* Right ear leaf */}
    <path d="M402 38 C412 30 420 34 418 40 C416 46 404 45 403 39" stroke="url(#oh-g)" strokeWidth="1.4" strokeLinecap="round" fill="none"/>

    {/* RIGHT inner scroll */}
    <path d="M262 50 C276 56 288 68 292 80 C296 90 290 98 282 96 C276 94 272 86 278 82 C283 78 284 86 280 88" stroke="url(#oh-g)" strokeWidth="1.8" strokeLinecap="round" fill="none"/>

    {/* Accent dots */}
    <circle cx="142" cy="16" r="1.5" fill="#d4a044" opacity="0.6"/>
    <circle cx="338" cy="16" r="1.5" fill="#d4a044" opacity="0.6"/>
    <circle cx="97"  cy="56" r="2"   fill="#c41e3a" opacity="0.7"/>
    <circle cx="383" cy="56" r="2"   fill="#c41e3a" opacity="0.7"/>
    <circle cx="200" cy="88" r="2"   fill="#d4a044" opacity="0.6"/>
    <circle cx="280" cy="88" r="2"   fill="#d4a044" opacity="0.6"/>

    {/* Bottom connecting arc */}
    <path d="M200 96 C215 102 230 104 240 104 C250 104 265 102 280 96" stroke="url(#oh-g)" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
    <circle cx="240" cy="104" r="1.5" fill="#d4a044" opacity="0.5"/>
  </svg>
);

/* ──────────────────────────────────────────
   Ornamental Divider
────────────────────────────────────────────── */
const OrnamentalDivider = () => (
  <svg viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width: "55%", maxWidth: "260px", display: "block", margin: "0 auto" }} aria-hidden="true">
    <defs>
      <linearGradient id="od-g" x1="0" y1="6" x2="300" y2="6" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#c41e3a" stopOpacity="0"/>
        <stop offset="30%"  stopColor="#c41e3a" stopOpacity="0.5"/>
        <stop offset="50%"  stopColor="#d4a044"/>
        <stop offset="70%"  stopColor="#c41e3a" stopOpacity="0.5"/>
        <stop offset="100%" stopColor="#c41e3a" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <line x1="0" y1="6" x2="130" y2="6" stroke="url(#od-g)" strokeWidth="0.7"/>
    <line x1="170" y1="6" x2="300" y2="6" stroke="url(#od-g)" strokeWidth="0.7"/>
    <path d="M140 6 L145 2 L150 6 L145 10 Z" fill="#c41e3a" opacity="0.6"/>
    <circle cx="150" cy="6" r="2" fill="#d4a044"/>
    <path d="M150 6 L155 2 L160 6 L155 10 Z" fill="#c41e3a" opacity="0.6"/>
  </svg>
);

/* ──────────────────────────────────────────
   Main Banner Component
────────────────────────────────────────────── */
const RenovationBanner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!APP_CONSTANTS.is_store_renovating) return null;
  if (!mounted) return null;

  return (
    <>
      <style>{`
        @keyframes reno-fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes reno-cardIn {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes reno-shimmer {
          0%   { background-position: -500px 0; }
          100% { background-position:  500px 0; }
        }
        @keyframes reno-glow {
          0%,100% { opacity: 0.5; }
          50%      { opacity: 0.8; }
        }
        #reno-backdrop  { animation: reno-fadeIn 0.3s ease both; }
        #reno-card      { animation: reno-cardIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
        .reno-shimmer-text {
          background: linear-gradient(90deg,
            #c41e3a 0%, #d4a044 35%, #f5c842 50%, #d4a044 65%, #c41e3a 100%
          );
          background-size: 500px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: reno-shimmer 3.5s linear infinite;
        }
      `}</style>

      {/* ── Backdrop ── */}
      <div
        id="reno-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="renovation-heading"
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "1rem",
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
        }}
      >
        {/* ── Card ── */}
        <div
          id="reno-card"
          style={{
            position: "relative",
            width: "100%", maxWidth: "720px",
            background: "#0c0a09",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {/* Outer gold border glow */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: "20px", pointerEvents: "none",
            boxShadow: "inset 0 0 0 1px rgba(212,160,68,0.25), 0 0 60px rgba(196,30,58,0.15), 0 24px 48px rgba(0,0,0,0.5)",
          }}/>

          {/* Subtle corner glow — top */}
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            width: "400px", height: "200px",
            background: "radial-gradient(ellipse at 50% 0%, rgba(196,30,58,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}/>

          {/* ── Top gold line ── */}
          <div style={{
            height: "2px",
            background: "linear-gradient(90deg, transparent, rgba(196,30,58,0.6) 15%, #d4a044 40%, #f5c842 50%, #d4a044 60%, rgba(196,30,58,0.6) 85%, transparent)",
          }}/>

          {/* ── Content ── */}
          <div style={{ padding: "2.5rem 3rem 2rem", position: "relative" }}>

            {/* Ornament */}
            <OrnamentalHeader />

            {/* Title */}
            <h2
              id="renovation-heading"
              className="reno-shimmer-text"
              style={{
                textAlign: "center",
                fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                fontWeight: 700,
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "0.02em",
                lineHeight: 1.2,
                margin: "0.5rem 0 0.3rem",
              }}
            >
              Under Renovation
            </h2>

            {/* Subtitle */}
            <p style={{
              textAlign: "center",
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(0.8rem, 1.6vw, 0.92rem)",
              color: "rgba(212,160,68,0.55)",
              margin: "0 0 1.5rem",
              letterSpacing: "0.04em",
            }}>
              A new chapter is being crafted for you
            </p>

            {/* Divider */}
            <OrnamentalDivider />

            {/* Message */}
            <p style={{
              textAlign: "center",
              color: "rgba(255,255,255,0.7)",
              fontSize: "clamp(0.88rem, 1.8vw, 1rem)",
              lineHeight: 1.85,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              maxWidth: "520px",
              margin: "1.5rem auto 1.8rem",
            }}>
              {APP_CONSTANTS.renovation_message}
            </p>

            {/* Bottom divider */}
            <OrnamentalDivider />

            {/* Footer */}
            <p style={{
              textAlign: "center",
              color: "rgba(255,255,255,0.22)",
              fontSize: "0.65rem",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: "1.2rem 0 0",
            }}>
              This notice will be removed once renovation is complete
            </p>
          </div>

          {/* ── Bottom gold line ── */}
          <div style={{
            height: "2px",
            background: "linear-gradient(90deg, transparent, rgba(196,30,58,0.6) 15%, #d4a044 40%, #f5c842 50%, #d4a044 60%, rgba(196,30,58,0.6) 85%, transparent)",
          }}/>
        </div>
      </div>
    </>
  );
};

export default RenovationBanner;
