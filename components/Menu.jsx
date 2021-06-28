import Link from "next/link";
import styles from "../styles/Menu.module.css";

const Menu = ({ menu, setMenu }) => {
  return (
    <div className={styles.menu}>
      <a className={styles.menuClose} onClick={() => setMenu(false)}>
        <p>Close</p>
        <img src="/images/x.svg" alt="Close" className={styles.menuIcon} />
      </a>
      <div className={styles.menuContainer}>
        <ul className={styles.menuLeft}>
          <li className={styles.menuLeftList}>
            01.
            <Link href="/">
              <a className={styles.menuLeftLink}>Home</a>
            </Link>
          </li>
          <li className={styles.menuLeftList}>
            02.
            <Link href="/our-work">
              <a className={styles.menuLeftLink}>Work</a>
            </Link>
          </li>
          <li className={styles.menuLeftList}>
            03.
            <Link href="/contact">
              <a className={styles.menuLeftLink}>Contact</a>
            </Link>
          </li>
          <li className={styles.menuLeftList}>
            04.
            <Link href="/about">
              <a className={styles.menuLeftLink}>About</a>
            </Link>
          </li>
          <li className={styles.menuLeftList}>
            05.
            <Link href="/how-it-works">
              <a className={styles.menuLeftLink}>How it works</a>
            </Link>
          </li>
          <Link href="/contact">
            <li className={styles.menuLeftListLast}>
              <a>
                Call Betacrew
                <img
                  src="/images/arrow.svg"
                  alt="Call Betacrew"
                  onClick={() => setMenu(false)}
                />
              </a>
            </li>
          </Link>
        </ul>
        <ul className={styles.menuRight}>
          <li className={styles.menuRightLink1}>
            More<span></span>
          </li>
          <li className={styles.menuRightLink}>
            <a>
              Linkedin<span></span>
            </a>
          </li>
          <li className={styles.menuRightLink}>
            <a>
              Instagram<span></span>
            </a>
          </li>
          <li className={styles.menuRightLink}>
            <a>
              Facebook<span></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
