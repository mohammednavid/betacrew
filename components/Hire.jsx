import styles from "../styles/Hire.module.css";

const Hire = () => {
  return (
    <div className={styles.hire}>
      <p className={styles.hireContent}>
        Hire The Best Developers And Designers Around!
      </p>
      <div className={styles.hireRight}>
        <div className={styles.hireLineWhite}>
          <div className={styles.hireUpperLine}></div>
          <div className={styles.hireUpperLine}></div>
          <div className={styles.hireUpperLine}></div>
        </div>
        <a className={styles.hireButton}>HIRE TOP DEVELOPERS</a>
        <div className={styles.hireLineWhite}>
          <div className={styles.hireBottomLine}></div>
          <div className={styles.hireBottomLine}></div>
          <div className={styles.hireBottomLine}></div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
