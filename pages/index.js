import Head from "next/head";
import Portfolio from "../components/portfolio";

function HomePage() {
  return (
    <>
      <Head>
        <title>Badrul Hanif</title>
        <meta
          name="description"
          content="Professional profile of Badrul Hanif. You can refer here to see my recent works."
        />
        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://my-portfolio-seven-steel.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Badrul Hanif" />
        <meta
          property="og:description"
          content="Professional profile of Badrul Hanif. You can refer here to see my recent works."
        />
        <meta
          property="og:image"
          content="https://my-portfolio-seven-steel.vercel.app/banner.png"
        />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="my-portfolio-ashy-xi.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://my-portfolio-seven-steel.vercel.app/"
        />
        <meta name="twitter:title" content="Badrul Hanif" />
        <meta
          name="twitter:description"
          content="Professional profile of Badrul Hanif. You can refer here to see my recent works."
        />
        <meta
          name="twitter:image"
          content="https://my-portfolio-seven-steel.vercel.app/banner.png"
        />
      </Head>
      <Portfolio />
    </>
  );
}

export default HomePage;
