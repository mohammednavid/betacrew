import Header from "../components/Header";
import Image from "next/image";
import { aboutData } from "../data/aboutData";
import styles from "../styles/About.module.css";
import Footer from "../components/Footer";
import Hire from "../components/Hire";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRef } from "react";
import Head from "next/head";

const About = () => {
  const aboutVector = useRef(null);
  return (
    <>
      <Head>
        <title>About Betacrew</title>
        <meta
          name="description"
          content="About Betacrerw - A team of developers for your organisation"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#24509b" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      {aboutData?.map((val) => {
        return (
          <div className={styles.about} key={val.id}>
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
              <div className={styles.aboutVector}>
                <Player
                  ref={aboutVector}
                  hover
                  autoplay={true}
                  loop={false}
                  src="/illustration/about.json"
                ></Player>
              </div>
            </div>
            <div className={styles.aboutFounder}>
              <div className={styles.aboutImageLeft}>
                <Image
                  src="/images/Founder_RV.svg"
                  alt="Betacrew Co-Founder"
                  width={350}
                  height={420}
                />
                <h1 className={styles.aboutFounderTitle}>Rushabh Vora</h1>
                <p className={styles.aboutFounderDescp}>Co-Founder</p>
              </div>
              <div className={styles.aboutImageRight}>
                <Image
                  src="/images/Founder_RM.svg"
                  alt="Betacrew Co-Founder"
                  width={540}
                  height={590}
                />
                <h1 className={styles.aboutFounderTitle}>Ronil Mehta</h1>
                <p className={styles.aboutFounderDescp}>Co-Founder</p>
              </div>
            </div>
            <div className={styles.aboutCulture}>
              <h1 className={styles.aboutCultureHeader}>Our Culture .</h1>
              <div className={styles.aboutCultureContainer}>
                <div className={styles.aboutCultureContent}>
                  <h1 className={styles.aboutCultureTitle}>{val.firstTitle}</h1>
                  <p className={styles.aboutCultureDescp}>{val.firstDescp}</p>
                </div>
                <div className={styles.aboutCultureContent}>
                  <h1 className={styles.aboutCultureTitle}>
                    {val.secondTitle}
                  </h1>
                  <p className={styles.aboutCultureDescp}>{val.secondDescp}</p>
                </div>
              </div>
              <div className={styles.aboutCultureContainer}>
                <div className={styles.aboutCultureContent}>
                  <h1 className={styles.aboutCultureTitle}>{val.thirdTitle}</h1>
                  <p className={styles.aboutCultureDescp}>{val.thirdDescp}</p>
                </div>
                <div className={styles.aboutCultureContent}>
                  <h1 className={styles.aboutCultureTitle}>
                    {val.fourthTitle}
                  </h1>
                  <p className={styles.aboutCultureDescp}>{val.fourthDescp}</p>
                </div>
              </div>
            </div>
            <div className={styles.aboutOperate}>
              <h1 className={styles.aboutOperateTitle}>
                How do we operate <span>?</span>
              </h1>
              <p className={styles.aboutOperateDescp}>
                Our 5 step approach outlines how we choose a dedicated team to
                work on your project.
              </p>
              <div className={styles.aboutOperateHDWO}>
                <div className={styles.aboutHDWO}>
                  <div className={styles.aboutHDWO_Img}>
                    <Image
                      src="/images/HDWO_1.svg"
                      alt="Betacrew - HOW DO WE OPERATE"
                      width={110}
                      height={110}
                    />
                  </div>
                  <p className={styles.aboutHDWO_Descp}>{val.firstStep}</p>
                </div>
                <div className={styles.aboutHDWO}>
                  <div className={styles.aboutHDWO_Img}>
                    <Image
                      src="/images/HDWO_2.svg"
                      alt="Betacrew - HOW DO WE OPERATE"
                      width={110}
                      height={110}
                    />
                  </div>
                  <p className={styles.aboutHDWO_Descp}>{val.secondStep}</p>
                </div>
                <div className={styles.aboutHDWO}>
                  <div className={styles.aboutHDWO_Img}>
                    <Image
                      src="/images/HDWO_3.svg"
                      alt="Betacrew - HOW DO WE OPERATE"
                      width={110}
                      height={110}
                    />
                  </div>
                  <p className={styles.aboutHDWO_Descp}>{val.thirdStep}</p>
                </div>
                <div className={styles.aboutHDWO}>
                  <div className={styles.aboutHDWO_Img}>
                    <Image
                      src="/images/HDWO_4.svg"
                      alt="Betacrew - HOW DO WE OPERATE"
                      width={110}
                      height={110}
                    />
                  </div>
                  <p className={styles.aboutHDWO_Descp}>{val.fourthStep}</p>
                </div>
                <div className={styles.aboutHDWO}>
                  <div className={styles.aboutHDWO_Img}>
                    <Image
                      src="/images/HDWO_5.svg"
                      alt="Betacrew - HOW DO WE OPERATE"
                      width={110}
                      height={110}
                    />
                  </div>
                  <p className={styles.aboutHDWO_Descp}>{val.fifthStep}</p>
                </div>
                <div className={styles.aboutHDWO_Line}></div>
              </div>
              <Hire />
            </div>
          </div>
        );
      })}
      <Footer />
    </>
  );
};

export default About;
