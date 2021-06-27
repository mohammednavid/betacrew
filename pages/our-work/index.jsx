import { ourWorkData } from "../../data/ourWorkData.js";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/ourWork.module.css";
import Header from "../../components/Header";
import Hire from "../../components/Hire";
import Footer from "../../components/Footer";
import Fade from "react-reveal/Fade";

const Work = () => {
  return (
    <>
      <Head>
        <title>Recent Betacrew Work</title>
        <meta
          name="description"
          content="Recent Betacrew Work - Recent case studies on how we have helped companies"
        />
      </Head>
      <Header />
      <div className={styles.work}>
        <Fade delay={1000}>
          <h1 className={styles.workTitle}>
            Recent case studies on <br />
            <span>how we have helped companies</span>
          </h1>
        </Fade>
        {ourWorkData?.map((val) => {
          return (
            <div className={styles.workContainer} id={val.id} key={val.id}>
              <div className={styles.workContent}>
                <div className={styles.workDescpContainer}>
                  <Fade delay={1000}>
                    <h2 className={styles.workName}>{val.firstName}</h2>
                  </Fade>
                  <Fade delay={1500}>
                    <p className={styles.workDescp}>{val.firstDescp}</p>
                  </Fade>
                  <Fade delay={2000}>
                    <Link href={"/our-work/case-study-1"}>
                      <p className={styles.workView}>VIEW CASE STUDY</p>
                    </Link>
                  </Fade>
                </div>
                <Fade delay={500}>
                  <div className={styles.workDetails}>
                    <Fade delay={1000}>
                      <div className={styles.workImg}>
                        <Image
                          src={val.firstLogo}
                          alt={val.firstName}
                          width={270}
                          height={100}
                        />
                      </div>
                    </Fade>
                    <Fade delay={1200}>
                      <p className={styles.workComment}>"{val.firstComment}"</p>
                    </Fade>
                    <div className={styles.workDetailsBottom}>
                      <Fade delay={1400}>
                        <p>
                          {val.firstTeamScaled}
                          <br />
                          <span>Team Scaled</span>
                        </p>
                      </Fade>
                      <Fade delay={1600}>
                        <p>
                          {val.firstNPS}
                          <br />
                          <span>NPS</span>
                        </p>
                      </Fade>
                      <Fade delay={1800}>
                        <p>
                          {val.firstSaved}
                          <br />
                          <span>saved</span>
                        </p>
                      </Fade>
                      <Fade delay={2000}>
                        <p>
                          {val.firstFaster}
                          <br />
                          <span>faster</span>
                        </p>
                      </Fade>
                    </div>
                  </div>
                </Fade>
              </div>
              {/* second */}
              <div className={styles.workContent}>
                <Fade delay={500}>
                  <div className={styles.workDetails2}>
                    <Fade delay={1000}>
                      <div className={styles.workImg}>
                        <Image
                          src={val.secondLogo}
                          alt={val.secondName}
                          width={270}
                          height={100}
                        />
                      </div>
                    </Fade>
                    <Fade delay={1200}>
                      <p className={styles.workComment}>
                        "{val.secondComment}"
                      </p>
                    </Fade>
                    <div className={styles.workDetailsBottom}>
                      <Fade delay={1400}>
                        <p>
                          {val.secondTeamScaled}
                          <br />
                          <span>Team Scaled</span>
                        </p>
                      </Fade>
                      <Fade delay={1600}>
                        <p>
                          {val.secondNPS}
                          <br />
                          <span>NPS</span>
                        </p>
                      </Fade>
                      <Fade delay={1800}>
                        <p>
                          {val.secondSaved}
                          <br />
                          <span>saved</span>
                        </p>
                      </Fade>
                      <Fade delay={2000}>
                        <p>
                          {val.secondFaster}
                          <br />
                          <span>faster</span>
                        </p>
                      </Fade>
                    </div>
                  </div>
                </Fade>
                <div className={styles.workDescpContainer2}>
                  <Fade delay={1000}>
                    <h2 className={styles.workName}>{val.secondName}</h2>
                  </Fade>
                  <Fade delay={1500}>
                    <p className={styles.workDescp}>{val.secondDescp}</p>
                  </Fade>
                  <Fade delay={2000}>
                    <Link href={"/our-work/case-study-2"}>
                      <p className={styles.workView}>VIEW CASE STUDY</p>
                    </Link>
                  </Fade>
                </div>
              </div>
              {/* third */}
              <div className={styles.workContent}>
                <div className={styles.workDescpContainer}>
<Fade delay={1000}>
                  <h2 className={styles.workName}>{val.thirdName}</h2>
                  </Fade>
<Fade delay={1500}>
                  <p className={styles.workDescp}>{val.thirdDescp}</p>
                  </Fade>
                  <Fade delay={2000}>
                  <Link href={"/our-work/case-study-3"}>
                    <p className={styles.workView}>VIEW CASE STUDY</p>
                  </Link>
                  </Fade>
                </div>
                <Fade delay={500}>
                <div className={styles.workDetails3}>
                  <Fade delay={1000}>
                  <div className={styles.workImg}>
                    <Image
                      src={val.thirdLogo}
                      alt={val.thirdName}
                      width={270}
                      height={100}
                      />
                  </div>
                  </Fade>
                  <Fade delay={1200}>
                  <p className={styles.workComment}>"{val.thirdComment}"</p>
                  </Fade>
                  <div className={styles.workDetailsBottom}>
                    <Fade delay={1400}>
                    <p>
                      {val.thirdTeamScaled}
                      <br />
                      <span>Team Scaled</span>
                    </p>
                    </Fade>
                    <Fade delay={1600}>
                    <p>
                      {val.thirdNPS}
                      <br />
                      <span>NPS</span>
                    </p>
                    </Fade>
                    <Fade delay={1800}>
                    <p>
                      {val.thirdSaved}
                      <br />
                      <span>saved</span>
                    </p>
                    </Fade>
                    <Fade delay={2000}>
                    <p>
                      {val.thirdFaster}
                      <br />
                      <span>faster</span>
                    </p>
                    </Fade>
                  </div>
                </div>
                </Fade>
              </div>
            </div>
          );
        })}
        <Hire />
      </div>
      <Footer />
    </>
  );
};

export default Work;
