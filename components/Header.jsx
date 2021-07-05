import { useState } from "react";
import styles from "../styles/Header.module.css";
import Menu from "./Menu";
import Link from "next/link";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className={styles.header}>
      {menu ? <Menu menu={menu} setMenu={setMenu} /> : ""}
      <Link href="/">
        <img
          src="/images/logo.svg"
          alt="Betacrew"
          className={styles.headerLogo}
        />
      </Link>
      <div onClick={(menu) => setMenu(true)} className={styles.headerMenu}>
        <p>Menu</p>
        <img
          src="/images/Burgermenu.svg"
          alt="Betacrew"
          width={30}
          height={30}
        />
      </div>
      <div className={styles.headerDesktop}>
        <Link href="/our-work">
          <a className={styles.headerLink}>Work</a>
        </Link>
        <Link href="/how-it-works">
          <a className={styles.headerLink}>How it works</a>
        </Link>
        <Link href="/about">
          <a className={styles.headerLink}>About</a>
        </Link>
        <Link href="/contact">
          <a className={styles.headerLink}>Contact</a>
        </Link>
        <Link href="/contact">
          <a className={styles.headerButton}>Email</a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
