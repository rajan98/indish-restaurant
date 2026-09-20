import RenovationBanner from "../components/ui/RenovationBanner";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <RenovationBanner />
      <Component {...pageProps} key={router.asPath} />
    </>
  );
}

export default MyApp;
