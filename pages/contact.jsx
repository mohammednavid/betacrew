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
          <Fade delay={1000}>
            <h2 className={styles.contactTitle}>
              Call
              <br />
              Betacrew
            </h2>
          </Fade>
          <Fade delay={1300}>
            <p className={styles.contactDescp}>
              Describe your project and leave us your contact info, we’ll get
              back to you within 24 hours.
            </p>
          </Fade>
          <Fade delay={1600}>
            <p className={styles.contactEmail}>
              <strong>Email-</strong>
              <br />
              info@gmail.com
            </p>
          </Fade>
          <Fade delay={1900}>
            <p className={styles.contactPhone}>
              <strong>Phone-</strong>
              <br />
              022-809-789
            </p>
          </Fade>
        </div>
        <form className={styles.contactRight} onSubmit={onSubmit}>
          <Fade delay={1000}>
            <label for="contactName" className={styles.contactNameLabel}>
              What's your Name?
            </label>
            <input type="text" className={styles.contactNameInput} />
          </Fade>
          <Fade delay={1300}>
            <label for="contactName" className={styles.contactEmailLabel}>
              What's your E-mail?
            </label>
            <input type="text" className={styles.contactEmailInput} />
          </Fade>
          <Fade delay={1600}>
            <label for="contactName" className={styles.contactAboutLabel}>
              Tell us about your project : )
            </label>
            <input type="text" className={styles.contactAboutInput} />
          </Fade>
          <Fade delay={1900}>
            <a className={styles.contactButton}>Send</a>
          </Fade>
        </form>
        <Fade delay={500}>
          <p className={styles.contactEmail2}>
            <strong>Email-</strong>
            <br />
            info@gmail.com
          </p>
        </Fade>
        <Fade delay={800}>
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
