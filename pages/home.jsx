import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

const Home = () => {
  const vector = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: vector.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../lottie.json"),
      speed: 5,
    });
  }, [vector]);
  return (
    <>
      <Header />
      <div className={styles.home}>
        <h1 className={styles.homeTitle}>
          A team of developers for your <span>organisation</span>
        </h1>
        <p className={styles.homeDescp}>
          Betacrew helps tech company extend their engineering teams by
          procuring first in class tech people{" "}
        </p>
        <div className={styles.homeButtons}>
          <a className={styles.homeButtonLeft}>Create your Team</a>
          <a className={styles.homeButtonRight}>How it works?</a>
        </div>
        <div className={styles.homeVector} ref={vector}></div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
