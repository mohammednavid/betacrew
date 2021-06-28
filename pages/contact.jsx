import styles from "../styles/Contact.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefaults();
  };
  return (
    <>
      <Head>
        <title>Contact Betacrew</title>
        <meta
          name="description"
          content="Contact Betacrew - A team of developers for your organisation"
        />
      </Head>
      <Header />
      <div className={styles.contact}>
        <div className={styles.contactLeft}>
          <Fade>
            <h2 className={styles.contactTitle}>
              Call
              <br />
              Betacrew
            </h2>
          </Fade>
          <Fade>
            <p className={styles.contactDescp}>
              Describe your project and leave us your contact info, we’ll get
              back to you within 24 hours.
            </p>
          </Fade>
          <Fade>
            <p className={styles.contactEmail}>
              <strong>Email-</strong>
              <br />
              info@gmail.com
            </p>
          </Fade>
          <Fade>
            <p className={styles.contactPhone}>
              <strong>Phone-</strong>
              <br />
              022-809-789
            </p>
          </Fade>
        </div>
        <form className={styles.contactRight} onSubmit={onSubmit}>
          <Fade>
            <label for="contactName" className={styles.contactNameLabel}>
              What's your Name?
            </label>
            <input type="text" className={styles.contactNameInput} />
          </Fade>
          <Fade>
            <label for="contactName" className={styles.contactEmailLabel}>
              What's your E-mail?
            </label>
            <input type="text" className={styles.contactEmailInput} />
          </Fade>
          <Fade>
            <label for="contactName" className={styles.contactAboutLabel}>
              Tell us about your project : )
            </label>
            <input type="text" className={styles.contactAboutInput} />
          </Fade>
          <Fade>
            <a className={styles.contactButton}>Send</a>
          </Fade>
        </form>
        <Fade>
          <p className={styles.contactEmail2}>
            <strong>Email-</strong>
            <br />
            info@gmail.com
          </p>
        </Fade>
        <Fade>
          <p className={styles.contactPhone2}>
            <strong>Phone-</strong>
            <br />
            022-809-789
          </p>
        </Fade>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
