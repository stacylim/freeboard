import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Stacy Mall"></meta>
        <meta
          property="og:image"
          content="https://www.pinterest.co.kr/pin/582653270523543412/"
        ></meta>
        <meta
          property="og:description"
          content="Stacy Mall 확인해주세요"
        ></meta>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LRWVM1KK8Q"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LRWVM1KK8Q')`,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
