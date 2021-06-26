import styles from "../styles/Process.module.css";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const Process = () => {
  return (
    <div className={styles.homeProcess}>
      <div className={styles.homeProcessContainer}>
        <div className={styles.homeProcessLeft}>
          <Fade delay={1000}>
            <h2 className={styles.homeProcessLeftTitle}>
              How we build your perfect team .
            </h2>
          </Fade>
          <Fade delay={1500}>
            <Link href="/contact">
              <a className={styles.homeProcessLeftButton}>Create your Team</a>
            </Link>
          </Fade>
        </div>
        <Fade delay={2000}>
          <div className={styles.homeProcessRight}>
            <Fade delay={2500}>
              <div className={styles.homeProcessRightContent}>
                <div className={styles.homeProcessRightBlank}></div>
                <div className={styles.homeProcessRightCircle}></div>
                <div className={styles.homeProcessRightNumber}>01</div>
                <div className={styles.homeProcessRightText}>
                  Matching Process
                </div>
              </div>
            </Fade>
            <Fade delay={3000}>
              <div className={styles.homeProcessRightContent}>
                <div className={styles.homeProcessRightBlank}></div>
                <div className={styles.homeProcessRightCircle}></div>
                <div className={styles.homeProcessRightNumber}>02</div>
                <div className={styles.homeProcessRightText}>
                  Assess The Candidates
                </div>
              </div>
            </Fade>
            <Fade delay={3500}>
              <div className={styles.homeProcessRightContent}>
                <div className={styles.homeProcessRightBlank}></div>
                <div className={styles.homeProcessRightCircle}></div>
                <div className={styles.homeProcessRightNumber}>03</div>
                <div className={styles.homeProcessRightText}>
                  Suggest A Team Structure
                </div>
              </div>
            </Fade>
            <Fade delay={4000}>
              <div className={styles.homeProcessRightContent}>
                <div className={styles.homeProcessRightBlank}></div>
                <div className={styles.homeProcessRightCircle}></div>
                <div className={styles.homeProcessRightNumber}>04</div>
                <div className={styles.homeProcessRightText}>
                  Build Custom Pods
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Process;
