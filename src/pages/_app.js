import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return <Component {...pageProps} key={router.asPath} />;
}

export default MyApp;
