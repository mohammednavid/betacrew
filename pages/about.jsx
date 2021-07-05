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
                <Fade delay={250}>
                  <h1 className={styles.aboutTitle}>
                    About <span>Betacrew.</span>
                  </h1>
                </Fade>
                <br />
                <br />
                <Fade delay={500}>
                  <p className={styles.aboutDescp}>{val.descpFirst}</p>
                </Fade>
                <br />
                <Fade delay={700}>
                  <p className={styles.aboutDescp}>{val.descpSecond}</p>
                </Fade>
                <Fade delay={700}>
                  <p className={styles.aboutDescp}>{val.descpThird}</p>
                </Fade>
              </div>
              <Fade delay={200}>
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
              <Fade>
            <div className={styles.aboutFounder}>
                <div className={styles.aboutImageRight}>
                  <Image
                    src="/images/Founder_RM.svg"
                    alt="Betacrew Co-Founder"
                    width={540}
                    height={590}
                  />
                  <Fade delay={100}>
                  <div className={styles.aboutFounderDetails}>
                  <h3 className={styles.aboutFounderTitle}>Ronil Mehta</h3>
                  <a href="https://www.linkedin.com/in/ronilm/" target="_blank">
                    <img src="/images/linkedin.png" alt="Ronil Mehta" className={styles.aboutFounderLinkedin} />
                  </a>
                  </div>
                  </Fade>
                  <Fade delay={200}>
                  <p className={styles.aboutFounderDescp}>Co-Founder</p>
                  </Fade>
                </div>
                <div className={styles.aboutImageLeft}>
                  <Image
                    src="/images/Founder_RV.svg"
                    alt="Betacrew Co-Founder"
                    width={350}
                    height={420}
                  />
                  <Fade delay={100}>
                  <div className={styles.aboutFounderDetails}>
                  <h3 className={styles.aboutFounderTitle}>Rushabh Vora</h3>
                  <a href="https://www.linkedin.com/in/rushabh-vora/" target="_blank">
                  <img src="/images/linkedin.png" alt="Rushabh Vora" className={styles.aboutFounderLinkedin}/>
                  </a>
                  </div>
                  </Fade>
                  <Fade delay={200}>
                  <p className={styles.aboutFounderDescp}>Co-Founder</p>
                  </Fade>
                </div>
            </div>
              </Fade>
            <div className={styles.aboutCulture}>
              <Fade delay={100}>
                <h2 className={styles.aboutCultureHeader}>CULTURE AT BETACREW.</h2>
              </Fade>
              <div className={styles.aboutCultureContainer}>
                <Fade delay={200}>
                  <div className={styles.aboutCultureContent}>
                    <h3 className={styles.aboutCultureTitle}>
                      {val.firstTitle}
                    </h3>
                    <Fade delay={400}>
                      <p className={styles.aboutCultureDescp}>
                        {val.firstDescp}
                      </p>
                    </Fade>
                  </div>
                </Fade>
                <Fade delay={200}>
                  <div className={styles.aboutCultureContent}>
                    <h3 className={styles.aboutCultureTitle}>
                      {val.fourthTitle}
                    </h3>
                    <Fade delay={400}>
                      <p className={styles.aboutCultureDescp}>
                        {val.fourthDescp}
                      </p>
                    </Fade>
                  </div>
                </Fade>
              </div>
              <div className={styles.aboutCultureContainer}>
                <Fade delay={200}>
                  <div className={styles.aboutCultureContent}>
                    <h3 className={styles.aboutCultureTitle}>
                      {val.thirdTitle}
                    </h3>
                    <Fade delay={400}>
                      <p className={styles.aboutCultureDescp}>
                        {val.thirdDescp}
                      </p>
                    </Fade>
                  </div>
                </Fade>
                <Fade delay={200}>
                  <div className={styles.aboutCultureContent}>
                    <h3 className={styles.aboutCultureTitle}>
                      {val.secondTitle}
                    </h3>
                    <Fade delay={400}>
                      <p className={styles.aboutCultureDescp}>
                        {val.secondDescp}
                      </p>
                    </Fade>
                  </div>
                </Fade>
              </div>
            </div>
            <div className={styles.aboutOperate}>
              <Fade delay={100}>
              <h1 className={styles.aboutOperateTitle}>
                How do we operate<span>?</span>
              </h1>
              </Fade>
              <Fade delay={200}>
              <p className={styles.aboutOperateDescp}>
                Our 5 step approach outlines how we choose a dedicated team to
                work on your project.
              </p>
              </Fade>
              <Fade delay={400}>
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
                  <Fade>
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
                  <Fade>
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
                  <Fade>
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
                  <Fade>
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
                  <Fade>
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
