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
                    <Image src="/images/HDWO_1.svg" width={110} height={110} />
                  </div>
                  <p className={styles.aboutHDWO_Descp}>{val.firstStep}</p>
                </div>
                <div className={styles.aboutHDWO}>
                  <div className={styles.aboutHDWO_Img}>
                    <Image src="/images/HDWO_2.svg" width={110} height={110} />
                  </div>
                  <p className={styles.aboutHDWO_Descp}>{val.secondStep}</p>
                </div>
                <div className={styles.aboutHDWO}>
                  <div className={styles.aboutHDWO_Img}>
                    <Image src="/images/HDWO_3.svg" width={110} height={110} />
                  </div>
                  <p className={styles.aboutHDWO_Descp}>{val.thirdStep}</p>
                </div>
                <div className={styles.aboutHDWO}>
                  <div className={styles.aboutHDWO_Img}>
                    <Image src="/images/HDWO_4.svg" width={110} height={110} />
                  </div>
                  <p className={styles.aboutHDWO_Descp}>{val.fourthStep}</p>
                </div>
                <div className={styles.aboutHDWO}>
                  <div className={styles.aboutHDWO_Img}>
                    <Image src="/images/HDWO_5.svg" width={110} height={110} />
                  </div>
                  <p className={styles.aboutHDWO_Descp}>{val.fifthStep}</p>
                </div>
                <div className={styles.aboutHDWO_Line}></div>
              </div>
              <div className={styles.aboutOperateHire}>
                <p className={styles.aboutHireContent}>
                  Hire The Best Developers And Designers Around!
                </p>
                <div className={styles.aboutOperateRight}>
                <div className={styles.aboutOperateLineWhite}>
                  <div className={styles.aboutOperateUpperLine}></div>
                  <div className={styles.aboutOperateUpperLine}></div>
                  <div className={styles.aboutOperateUpperLine}></div>
                </div>
                <a className={styles.aboutHireButton}>HIRE TOP DEVELOPERS</a>
                <div className={styles.aboutOperateLineWhite}>
                  <div className={styles.aboutOperateBottomLine}></div>
                  <div className={styles.aboutOperateBottomLine}></div>
                  <div className={styles.aboutOperateBottomLine}></div>
                </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </>
  );
};

export default About;
