import Head from "next/head";
import About from "./about";

export default function Home() {
  return (
    <>
      <Head>
        <title>Betacrew</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About/>
    </>
  );
}
