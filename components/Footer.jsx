import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <hr />
      <div className={styles.footerContainer}>
        <Link href="/">
          <a className={styles.footerLogo}>
            <Image
              src="/images/footerLogo.svg"
              alt="Betacrew"
              width={174}
              height={124}
            />
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/our-work">
              <a>Work</a>
            </Link>
          </li>
          <li>
            <Link href="/how-it-works">
              <a>How it works</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <a>limkedin</a>
          </li>
          <li>
            <a>Instagram</a>
          </li>
          <li>
            <a>Facebook</a>
          </li>
          <li>
            <a>Medium</a>
          </li>
        </ul>
        <p className={styles.footerCopyright}>
          © <span>Copyright@{new Date().getFullYear()}</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
