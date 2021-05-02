import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../Styletron.js";
import { Header } from "../components/Header";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <StyletronProvider value={styletron}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Banner2 />
      <Features />
      <Footer />
    </StyletronProvider>
  );
}