import Link from "next/link";
import styles from "../styles/Menu.module.css";

const Menu = ({ menu, setMenu }) => {
  return (
    <div className={styles.menu}>
      <a className={styles.menuClose} onClick={() => setMenu(false)}>
        <p>Close</p>
        <img src="/images/x.svg" className={styles.menuIcon} />
      </a>
      <div className={styles.menuContainer}>
      <ul className={styles.menuLeft}>
        <li className={styles.menuLeftList}>
          01.
          <Link href="/our-work">
            <span className={styles.menuLeftLink}>Work</span>
          </Link>
        </li>
        <li className={styles.menuLeftList}>
          02.
          <Link href="/contact">
            <span className={styles.menuLeftLink}>Contact</span>
          </Link>
        </li>
        <li className={styles.menuLeftList}>
          03.
          <Link href="/about">
            <span className={styles.menuLeftLink}>About</span>
          </Link>
        </li>
        <li className={styles.menuLeftList}>
          04.
          <Link href="/how-it-works">
            <span className={styles.menuLeftLink}>How it works</span>
          </Link>
        </li>
        <li className={styles.menuLeftListLast}>
          Call Betacrew{" "}
          <img src="/images/x.svg" onClick={() => setMenu(false)} />
        </li>
      </ul>
      <ul className={styles.menuRight}>
        <li className={styles.menuRightLink1}>
          More<span></span>
        </li>
        <li className={styles.menuRightLink}>
          Linkedin<span></span>
        </li>
        <li className={styles.menuRightLink}>
          Instagram<span></span>
        </li>
        <li className={styles.menuRightLink}>
          Facebook<span></span>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Menu;
