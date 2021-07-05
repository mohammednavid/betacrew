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
        <title>BetaCrew | Case Studies</title>
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
            <span>how we have helped companies</span>.
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
                    <Link href={"/case-studies/bild-case-study"}>
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
                    <div className={styles.caseStudyDetailsBottom}>
                      <Fade>
                        <p>
                          <span>Team</span>
                          <br />
                          {val.firstPod}
                        </p>
                      </Fade>
                      <Fade>
                        <p>
                          <span>Faster</span>
                          <br />
                          {val.firstBuildingPace}
                        </p>
                      </Fade>
                      <Fade>
                        <p>
                          <span>Relationship</span>
                          <br />
                          {val.firstRelationship}
                        </p>
                      </Fade>
                      <Fade>
                        <p>
                          <span>Stack</span>
                          <br />
                          {val.firstTechnology}
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
                    <div className={styles.caseStudyDetailsBottom}>
                      <Fade>
                        <p>
                          <span>Team</span>
                          <br />
                          {val.firstPod}
                        </p>
                      </Fade>
                      <Fade>
                        <p>
                          <span>Faster</span>
                          <br />
                          {val.firstBuildingPace}
                        </p>
                      </Fade>
                      <Fade>
                        <p>
                          <span>Relationship</span>
                          <br />
                          {val.firstRelationship}
                        </p>
                      </Fade>
                      <Fade>
                        <p>
                          <span>Stack</span>
                          <br />
                          {val.firstTechnology}
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
                    <Link href={"/case-studies/stopspoof-case-study"}>
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
                    <Link href={"/case-studies/nav360-case-study"}>
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
                    <div className={styles.caseStudyDetailsBottom}>
                      <Fade>
                        <p>
                          <span>Team</span>
                          <br />
                          {val.firstPod}
                        </p>
                      </Fade>
                      <Fade>
                        <p>
                          <span>Faster</span>
                          <br />
                          {val.firstBuildingPace}
                        </p>
                      </Fade>
                      <Fade>
                        <p>
                          <span>Relationship</span>
                          <br />
                          {val.firstRelationship}
                        </p>
                      </Fade>
                      <Fade>
                        <p>
                          <span>Stack</span>
                          <br />
                          {val.firstTechnology}
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
