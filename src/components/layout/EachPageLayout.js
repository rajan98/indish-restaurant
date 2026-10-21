import Link from "next/link";
import { useRouter } from "next/router";
import APP_URL from "../../constants/url";
import Footer from "./Footer";
import Header from "./Header";

export default function EachPageLayout({
  children,
  title,
  bannerHeight = "h-[320px] md:h-[420px]",
}) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div
        className={`${bannerHeight} overflow-hidden -mt-1 relative`}
        style={{
          backgroundColor: "#000",
          backgroundImage: `url("/images/Home/AboutSection/Background.webp")`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 flex flex-col gap-2.5 sm:gap-3 items-center justify-center pt-20 md:pt-28 pb-4 px-4"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)",
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-wide drop-shadow-md text-center">{title}</h2>
          <div className="bg-black/80 flex items-center justify-center py-2 px-3.5 sm:px-4 rounded-lg border border-white/10 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF0038"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-house-icon lucide-house"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            &nbsp;&nbsp;
            <Link href={APP_URL.home} className="text-md text-white font-bold">
              HOME
            </Link>
            &nbsp;&nbsp;{" "}
            <span className="text-md text-white font-bold">{"|"}</span>
            &nbsp;&nbsp;
            <Link href={path} className="text-md text-white font-bold">
              {path.toUpperCase().slice(1)}
            </Link>
          </div>
        </div>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
