import "../styles/globals.css";
import Script from "next/script";

// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-H4BR98L7SL"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-H4BR98L7SL');
// </script>

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-H4BR98L7SL"}
      />
      <Script strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H4BR98L7SL');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
