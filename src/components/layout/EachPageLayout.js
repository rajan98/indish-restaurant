import Link from "next/link";
import { useRouter } from "next/router";
import APP_URL from "../../constants/url";
import Footer from "./Footer";
import Header from "./Header";

export default function EachPageLayout({ children, title }) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div
        className="h-[330px] md:h-[450px] overflow-hidden -mt-1 relative"
        style={{
          backgroundColor: "#000",
          backgroundImage: `url("/images/Home/AboutSection/Background.webp")`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute h-full w-full flex flex-col gap-4 items-center justify-center"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.55) 80%, rgba(0,0,0,0.5) 100%)",
          }}
        >
          <h2 className="text-5xl text-white font-bold">{title}</h2>
          <div className="bg-black/80 flex items-center justify-center p-3 rounded-lg">
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
