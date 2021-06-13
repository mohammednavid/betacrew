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
        <img src="/images/logo.svg" className={styles.headerLogo} />
      </Link>
      <div onClick={(menu) => setMenu(true)} className={styles.headerMenu}>
        <p>Menu</p>
        <img src="/images/Burgermenu.svg" width={30} height={30} />
      </div>
    </nav>
  );
};

export default Header;
