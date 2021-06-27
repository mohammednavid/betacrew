import Header from "../components/Header";
import Image from "next/image";
import { aboutData } from "../data/aboutData";
import styles from "../styles/About.module.css";
import Footer from "../components/Footer";
import Hire from "../components/Hire";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRef } from "react";
import Head from "next/head";
import Fade from "react-reveal/Fade";

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
      </Head>
      <Header />
      {aboutData?.map((val) => {
        return (
          <div className={styles.about} key={val.id}>
            <div className={styles.aboutContainer}>
              <div className={styles.aboutLeft}>
                <Fade delay={1000}>
                  <h1 className={styles.aboutTitle}>
                    About <span>Betacrew .</span>
                  </h1>
                </Fade>
                <br />
                <br />
                <Fade delay={1500}>
                  <p className={styles.aboutDescp}>{val.descpFirst}</p>
                </Fade>
                <br />
                <Fade delay={2000}>
                  <p className={styles.aboutDescp}>{val.descpSecond}</p>
                </Fade>
              </div>
              <Fade delay={500}>
                <div className={styles.aboutVector}>
                  <Player
                    ref={aboutVector}
                    hover
                    autoplay={true}
                    loop={false}
                    src="/illustration/about.json"
                  />
                </div>
              </Fade>
            </div>
              <Fade delay={1000}>
            <div className={styles.aboutFounder}>
                <div className={styles.aboutImageLeft}>
                  <Image
                    src="/images/Founder_RV.svg"
                    alt="Betacrew Co-Founder"
                    width={350}
                    height={420}
                  />
                  <Fade delay={1300}>
                  <h1 className={styles.aboutFounderTitle}>Rushabh Vora</h1>
                  </Fade>
                  <Fade delay={1600}>
                  <p className={styles.aboutFounderDescp}>Co-Founder</p>
                  </Fade>
                </div>
                <div className={styles.aboutImageRight}>
                  <Image
                    src="/images/Founder_RM.svg"
                    alt="Betacrew Co-Founder"
                    width={540}
                    height={590}
                  />
                  <Fade delay={1400}>
                  <h1 className={styles.aboutFounderTitle}>Ronil Mehta</h1>
                  </Fade>
                  <Fade delay={1700}>
                  <p className={styles.aboutFounderDescp}>Co-Founder</p>
                  </Fade>
                </div>
            </div>
              </Fade>
            <div className={styles.aboutCulture}>
              <Fade delay={500}>
                <h1 className={styles.aboutCultureHeader}>Our Culture .</h1>
              </Fade>
              <div className={styles.aboutCultureContainer}>
                <Fade delay={1000}>
                  <div className={styles.aboutCultureContent}>
                    <h1 className={styles.aboutCultureTitle}>
                      {val.firstTitle}
                    </h1>
                    <Fade delay={1250}>
                      <p className={styles.aboutCultureDescp}>
                        {val.firstDescp}
                      </p>
                    </Fade>
                  </div>
                </Fade>
                <Fade delay={1500}>
                  <div className={styles.aboutCultureContent}>
                    <h1 className={styles.aboutCultureTitle}>
                      {val.secondTitle}
                    </h1>
                    <Fade delay={1750}>
                      <p className={styles.aboutCultureDescp}>
                        {val.secondDescp}
                      </p>
                    </Fade>
                  </div>
                </Fade>
              </div>
              <div className={styles.aboutCultureContainer}>
                <Fade delay={2000}>
                  <div className={styles.aboutCultureContent}>
                    <h1 className={styles.aboutCultureTitle}>
                      {val.thirdTitle}
                    </h1>
                    <Fade delay={2250}>
                      <p className={styles.aboutCultureDescp}>
                        {val.thirdDescp}
                      </p>
                    </Fade>
                  </div>
                </Fade>
                <Fade delay={2500}>
                  <div className={styles.aboutCultureContent}>
                    <h1 className={styles.aboutCultureTitle}>
                      {val.fourthTitle}
                    </h1>
                    <Fade delay={2750}>
                      <p className={styles.aboutCultureDescp}>
                        {val.fourthDescp}
                      </p>
                    </Fade>
                  </div>
                </Fade>
              </div>
            </div>
            <div className={styles.aboutOperate}>
              <Fade delay={500}>
              <h1 className={styles.aboutOperateTitle}>
                How do we operate <span>?</span>
              </h1>
              </Fade>
              <Fade delay={700}>
              <p className={styles.aboutOperateDescp}>
                Our 5 step approach outlines how we choose a dedicated team to
                work on your project.
              </p>
              </Fade>
              <Fade delay={1000}>
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
                  <Fade delay={1200}>
                  <p className={styles.aboutHDWO_Descp}>{val.firstStep}</p>
                    </Fade>
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
                  <Fade delay={1400}>
                  <p className={styles.aboutHDWO_Descp}>{val.secondStep}</p>
                  </Fade>
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
                  <Fade delay={1600}>
                  <p className={styles.aboutHDWO_Descp}>{val.thirdStep}</p>
                  </Fade>
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
                  <Fade delay={1800}>
                  <p className={styles.aboutHDWO_Descp}>{val.fourthStep}</p>
                    </Fade>
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
                  <Fade delay={2000}>
                  <p className={styles.aboutHDWO_Descp}>{val.fifthStep}</p>
                    </Fade>
                </div>
                <div className={styles.aboutHDWO_Line}></div>
              </div>
              </Fade>
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
