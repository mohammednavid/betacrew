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
              width={200}
              height={170}
            />
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/case-studies">
              <a>Case Studies</a>
            </Link>
          </li>
          <li>
            <Link href="/how-it-works">
              <a>How It Works</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.linkedin.com/company/betacrew-solutions/" target="_blank">Linkedin</a>
          </li>
          <li>
            <a href="https://twitter.com/betacrewhq" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://www.facebook.com/BetaCrewHQ" target="_blank">Facebook</a>
          </li>
          {/* <li>
            <a target="_blank">Medium</a>
          </li> */}
        </ul>
        <p className={styles.footerCopyright}>
          © <span>Copyright@{new Date().getFullYear()}</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
