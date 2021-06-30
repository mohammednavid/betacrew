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
        <Fade delay={200}>
          <h1 className={styles.workTitle}>
            Recent case studies on <br />
            <span>how we have helped companies.</span>
          </h1>
        </Fade>
        {ourWorkData?.map((val) => {
          return (
            <div className={styles.workContainer} id={val.id} key={val.id}>
              <div className={styles.workContent}>
                <div className={styles.workDescpContainer}>
                  <Fade>
                    <h3 className={styles.workName}>{val.firstName}</h3>
                  </Fade>
                  <Fade>
                    <p className={styles.workDescp}>{val.firstDescp}</p>
                  </Fade>
                  <Fade>
                    <Link href={"/our-work/case-study-1"}>
                      <p className={styles.workView}>VIEW CASE STUDY</p>
                    </Link>
                  </Fade>
                </div>
                <Fade delay={200}>
                  <div className={styles.workDetails}>
                    <Fade>
                      <div className={styles.workImg}>
                        <Image
                          src={val.firstLogo}
                          alt={val.firstName}
                          width={270}
                          height={100}
                        />
                      </div>
                    </Fade>
                    <Fade>
                      <p className={styles.workComment}>"{val.firstComment}"</p>
                    </Fade>
                    <div className={styles.workDetailsBottom}>
                      <Fade>
                        <p>
                          {val.firstTeamScaled}
                          <br />
                          <span>Team Scaled</span>
                        </p>
                      </Fade>
                      <Fade>
                        <p>
                          {val.firstNPS}
                          <br />
                          <span>NPS</span>
                        </p>
                      </Fade>
                      <Fade>
                        <p>
                          {val.firstSaved}
                          <br />
                          <span>saved</span>
                        </p>
                      </Fade>
                      <Fade>
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
                <Fade delay={200}>
                  <div className={styles.workDetails2}>
                    <Fade>
                      <div className={styles.workImg}>
                        <Image
                          src={val.secondLogo}
                          alt={val.secondName}
                          width={270}
                          height={100}
                        />
                      </div>
                    </Fade>
                    <Fade>
                      <p className={styles.workComment}>
                        "{val.secondComment}"
                      </p>
                    </Fade>
                    <div className={styles.workDetailsBottom}>
                      <Fade>
                        <p>
                          {val.secondTeamScaled}
                          <br />
                          <span>Team Scaled</span>
                        </p>
                      </Fade>
                      <Fade>
                        <p>
                          {val.secondNPS}
                          <br />
                          <span>NPS</span>
                        </p>
                      </Fade>
                      <Fade>
                        <p>
                          {val.secondSaved}
                          <br />
                          <span>saved</span>
                        </p>
                      </Fade>
                      <Fade>
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
                  <Fade>
                    <h3 className={styles.workName}>{val.secondName}</h3>
                  </Fade>
                  <Fade>
                    <p className={styles.workDescp}>{val.secondDescp}</p>
                  </Fade>
                  <Fade>
                    <Link href={"/our-work/case-study-2"}>
                      <p className={styles.workView}>VIEW CASE STUDY</p>
                    </Link>
                  </Fade>
                </div>
              </div>
              {/* third */}
              <div className={styles.workContent}>
                <div className={styles.workDescpContainer}>
                <Fade>
                  <h3 className={styles.workName}>{val.thirdName}</h3>
                  </Fade>
                <Fade>
                  <p className={styles.workDescp}>{val.thirdDescp}</p>
                  </Fade>
                  <Fade>
                  <Link href={"/our-work/case-study-3"}>
                    <p className={styles.workView}>VIEW CASE STUDY</p>
                  </Link>
                  </Fade>
                </div>
                <Fade delay={200}>
                <div className={styles.workDetails3}>
                  <Fade>
                  <div className={styles.workImg}>
                    <Image
                      src={val.thirdLogo}
                      alt={val.thirdName}
                      width={270}
                      height={100}
                      />
                  </div>
                  </Fade>
                  <Fade>
                  <p className={styles.workComment}>"{val.thirdComment}"</p>
                  </Fade>
                  <div className={styles.workDetailsBottom}>
                    <Fade>
                    <p>
                      {val.thirdTeamScaled}
                      <br />
                      <span>Team Scaled</span>
                    </p>
                    </Fade>
                    <Fade>
                    <p>
                      {val.thirdNPS}
                      <br />
                      <span>NPS</span>
                    </p>
                    </Fade>
                    <Fade>
                    <p>
                      {val.thirdSaved}
                      <br />
                      <span>saved</span>
                    </p>
                    </Fade>
                    <Fade>
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
