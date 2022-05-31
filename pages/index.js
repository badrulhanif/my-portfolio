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
      </Head>
      <Portfolio />
    </>
  );
}

export default HomePage;
