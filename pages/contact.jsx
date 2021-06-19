import styles from "../styles/Contact.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefaults();
  };
  return (
    <>
    <Head>
        <title>Contact Betacrew</title>
        <meta name="description" content="Contact Betacrew - A team of developers for your organisation" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#24509b" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <div className={styles.contact}>
        <div className={styles.contactLeft}>
          <h2 className={styles.contactTitle}>
            Call
            <br />
            Betacrew
          </h2>
          <p className={styles.contactDescp}>
            Describe your project and leave us your contact info, we’ll get back
            to you within 24 hours.
          </p>
          <p className={styles.contactEmail}>
            <strong>Email-</strong>
            <br />
            info@gmail.com
          </p>
          <p className={styles.contactPhone}>
            <strong>Phone-</strong>
            <br />
            022-809-789
          </p>
        </div>
        <form className={styles.contactRight} onSubmit={onSubmit}>
          <label for="contactName" className={styles.contactNameLabel}>
            What's your Name?
          </label>
          <input type="text" className={styles.contactNameInput} />
          <label for="contactName" className={styles.contactEmailLabel}>
            What's your E-mail?
          </label>
          <input type="text" className={styles.contactEmailInput} />
          <label for="contactName" className={styles.contactAboutLabel}>
            Tell us about your project : )
          </label>
          <input type="text" className={styles.contactAboutInput} />
          <a className={styles.contactButton}>Send</a>
        </form>
        <p className={styles.contactEmail2}>
          <strong>Email-</strong>
          <br />
          info@gmail.com
        </p>
        <p className={styles.contactPhone2}>
          <strong>Phone-</strong>
          <br />
          022-809-789
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
