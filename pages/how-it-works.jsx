import styles from "../styles/howItWorks.module.css";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
const howItWorks = () => {
  const howItWorks = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: howItWorks.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../lottie.json"),
      speed: 5,
    });
  }, [howItWorks]);
  return (
    <div className={styles.app}>
      <div className={styles.howItWorks} ref={howItWorks}></div>
    </div>
  );
};

export default howItWorks;
