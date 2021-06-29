import { useState,useRef } from "react";
import styles from "../styles/Contact.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Fade from "react-reveal/Fade";
// import Recaptcha from "react-recaptcha";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = (props) => {
  const recaptchaRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [descp, setDescp] = useState("");
  const [verified, setVerified] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setVerified(recaptchaRef.current.execute())
     if(verified){
      alert("Message sent!");
      setName("")
      setEmail("")
      setDescp("")
      }
  };
  function recaptchaLoader() {
    console.log("Recaptcha is Loaded");
  }
  function verifyCallback(response) {
    if (response) {
      setVerified(true);
    }
  }
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
            <label htmlFor="contactName" className={styles.contactNameLabel}>
              What's your Name?
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.contactNameInput}
            />
          </Fade>
          <Fade>
            <label htmlFor="contactName" className={styles.contactEmailLabel}>
              What's your E-mail?
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.contactEmailInput}
            />
          </Fade>
          <Fade>
            <label htmlFor="contactName" className={styles.contactAboutLabel}>
              Tell us about your project : )
            </label>
            <input
              type="text"
              value={descp}
              onChange={(e) => setDescp(e.target.value)}
              className={styles.contactAboutInput}
            />
          </Fade>
          <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey="6LdxDWAbAAAAADjtqH17aw4pU0IZG0S_bJtdrIMN"
      />
          {/* <Recaptcha
            sitekey=""
            render="invisible"
            onloadCallback={recaptchaLoader}
            verifyCallback={verifyCallback}
          /> */}
          <Fade>
            <a className={styles.contactButton} onClick={onSubmit}>
              Send
            </a>
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
