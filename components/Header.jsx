import { useState } from "react";
import styles from "../styles/Header.module.css";
import Menu from "./Menu";
import Link from "next/link";
import {useRouter} from "next/router";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter()
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
        <Link href="/case-studies">
          <a className={router.pathname == "/case-studies" ? styles.headerActive:styles.headerLink}>Case studies</a>
        </Link>
        <Link href="/how-it-works">
          <a className={router.pathname == "/how-it-works" ? styles.headerActive:styles.headerLink}>How it works</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname == "/about" ? styles.headerActive:styles.headerLink}>About</a>
        </Link>
        <Link href="/contact">
          <a className={router.pathname == "/contact" ? styles.headerActive:styles.headerLink}>Contact</a>
        </Link>
          <a className={styles.headerButton} href="https://calendly.com/meetbetacrew" target="_blank">Book a meeting</a>
      </div>
    </nav>
  );
};

export default Header;
