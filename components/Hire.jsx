import styles from "../styles/Hire.module.css";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const Hire = () => {
  return (
    <Fade delay={100}>
      <div className={styles.hire}>
        <Fade delay={250}>
          <p className={styles.hireContent}>
            Hire The Best Developers And Designers Around!
          </p>
        </Fade>
        <div className={styles.hireRight}>
          <Fade delay={500}>
            <div className={styles.hireLineWhite}>
              <div className={styles.hireUpperLine}></div>
              <div className={styles.hireUpperLine}></div>
              <div className={styles.hireUpperLine}></div>
            </div>
          </Fade>
          <Fade delay={400}>
            <Link href="/contact">
              <a className={styles.hireButton}>HIRE TOP DEVELOPERS</a>
            </Link>
          </Fade>
          <Fade delay={500}>
            <div className={styles.hireLineWhite}>
              <div className={styles.hireBottomLine}></div>
              <div className={styles.hireBottomLine}></div>
              <div className={styles.hireBottomLine}></div>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};

export default Hire;
