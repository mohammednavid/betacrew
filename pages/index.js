import Head from "next/head";
import HomePage from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Betacrew</title>
        <meta
          name="description"
          content="Betacrerw - A team of developers for your organisation"
        />
      </Head>
      <HomePage />
    </>
  );
}
