import Header from "../components/Header";
import Image from "next/image";
import { aboutData } from "../data/aboutData";
import styles from "../styles/About.module.css";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      {aboutData?.map((val, index) => {
        return (
          <div className={styles.about} kay={index}>
            <div className={styles.aboutContainer}>
              <div className={styles.aboutLeft}>
                <h1 className={styles.aboutTitle}>
                  About <span>Betacrew .</span>
                </h1>
                <br />
                <br />
                <p className={styles.aboutDescp}>{val.descpFirst}</p>
                <br />
                <p className={styles.aboutDescp}>{val.descpSecond}</p>
              </div>
              <Image
                src="/images/aboutMain.svg"
                className={styles.aboutRight}
                width={600}
                height={400}
              />
            </div>
            <div className={styles.aboutFounder}>
              <div className={styles.aboutImageLeft}>
                <Image src="/images/Founder_RV.svg" width={350} height={420} />
                <h1 className={styles.aboutFounderTitle}>Rushabh Vora</h1>
                <p className={styles.aboutFounderDescp}>Co-Founder</p>
              </div>
              <div className={styles.aboutImageRight}>
                <Image src="/images/Founder_RM.svg" width={540} height={590} />
                <h1 className={styles.aboutFounderTitle}>Ronil Mehta</h1>
                <p className={styles.aboutFounderDescp}>Co-Founder</p>
              </div>
            </div>
            <div className={styles.aboutCulture}>
              <h1 className={styles.aboutCultureHeader}>Our Culture .</h1>
              <div className={styles.aboutCultureContainer}>
                <div className={styles.aboutCultureContent}>
                  <h1 className={styles.aboutCultureTitle}>Collaborate</h1>
                  <p className={styles.aboutCultureDescp}>{val.collaborate}</p>
                </div>
                <div className={styles.aboutCultureContent}>
                  <h1 className={styles.aboutCultureTitle}>Client-first</h1>
                  <p className={styles.aboutCultureDescp}>{val.clientFirst}</p>
                </div>
              </div>
              <div className={styles.aboutCultureContainer}>
                <div className={styles.aboutCultureContent}>
                  <h1 className={styles.aboutCultureTitle}>Work smart</h1>
                  <p className={styles.aboutCultureDescp}>{val.workSmart}</p>
                </div>
                <div className={styles.aboutCultureContent}>
                  <h1 className={styles.aboutCultureTitle}>Be transparent</h1>
                  <p className={styles.aboutCultureDescp}>{val.beTransparent}</p>
                </div>
              </div>
            </div>
            <div className={styles.aboutOperate}>
              <h1 className={styles.aboutOperateTitle}>How do we operate <span>?</span></h1>
              <p className={styles.aboutOperateDescp}>Our 5 step approach outlines how we choose a dedicated team to work on your project.</p>
              <div className={styles.aboutOperateHire}>
                <p className={styles.aboutHireContent}>Hire The Best Developers And Designers Around!</p>
                <a className={styles.aboutHireButton}>HIRE TOP DEVELOPERS</a>
              </div>
            </div>
          </div>
        );
      })}
      <Footer/>
    </>
  );
};

export default About;
