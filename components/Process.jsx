import styles from "../styles/Process.module.css";
const Process = () => {
  return (
    <div className={styles.homeProcess}>
      <div className={styles.homeProcessContainer}>
        <div className={styles.homeProcessLeft}>
          <h2 className={styles.homeProcessLeftTitle}>
            How we build your perfect team .
          </h2>
          <a className={styles.homeProcessLeftButton}>Create your Team</a>
        </div>
        <div className={styles.homeProcessRight}>
          <div className={styles.homeProcessRightContent}>
            <div className={styles.homeProcessRightBlank}></div>
            <div className={styles.homeProcessRightCircle}></div>
            <div className={styles.homeProcessRightNumber}>01</div>
            <div className={styles.homeProcessRightText}>Matching Process</div>
          </div>
          <div className={styles.homeProcessRightContent}>
            <div className={styles.homeProcessRightBlank}></div>
            <div className={styles.homeProcessRightCircle}></div>
            <div className={styles.homeProcessRightNumber}>02</div>
            <div className={styles.homeProcessRightText}>
              Assess The Candidates
            </div>
          </div>
          <div className={styles.homeProcessRightContent}>
            <div className={styles.homeProcessRightBlank}></div>
            <div className={styles.homeProcessRightCircle}></div>
            <div className={styles.homeProcessRightNumber}>03</div>
            <div className={styles.homeProcessRightText}>
              Suggest A Team Structure
            </div>
          </div>
          <div className={styles.homeProcessRightContent}>
            <div className={styles.homeProcessRightBlank}></div>
            <div className={styles.homeProcessRightCircle}></div>
            <div className={styles.homeProcessRightNumber}>04</div>
            <div className={styles.homeProcessRightText}>Build Custom Pods</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
