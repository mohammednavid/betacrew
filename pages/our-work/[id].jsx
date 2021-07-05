import Image from "next/image";
import { ourWorkData } from "../../data/ourWorkData";
import { useRouter } from "next/router";
import styles from "../../styles/caseStudy.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hire from "../../components/Hire";
import Head from "next/head";
import Fade from "react-reveal/Fade";

const caseStudy = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Case Study</title>
        <meta
          name="description"
          content="Recent Betacrew Work - Recent case studies on how we have helped companies"
        />
      </Head>
      <Header />
      <div className={styles.caseStudy}>
        <div className={styles.caseStudyAll}>
          {ourWorkData?.map((val) => {
            return (
              <div
                className={styles.caseStudyContainer}
                id={val.id}
                key={val.id}
              >
                {router.query.id == "bild-case-study" && (
                  <>
                    <div className={styles.caseStudyContent}>
                      <div className={styles.caseStudyDescpContainer}>
                        <Fade>
                          <h1 className={styles.caseStudyTitle}>Case Study:</h1>
                        </Fade>
                        <Fade>
                          <h2 className={styles.caseStudyName}>
                            About {val.firstName}
                          </h2>
                        </Fade>
                        <Fade>
                          <p className={styles.caseStudyDescp}>
                            {val.firstAbout}
                          </p>
                        </Fade>
                      </div>
                      <Fade delay={200}>
                        <div className={styles.caseStudyDetails}>
                          <Fade>
                            <div className={styles.caseStudyImg}>
                              <Image
                                src={val.firstLogo}
                                alt={val.firstName}
                                width={270}
                                height={100}
                              />
                            </div>
                          </Fade>
                          <Fade>
                            <p className={styles.caseStudyComment}>
                              "{val.firstComment}"
                            </p>
                          </Fade>
                          <div className={styles.caseStudyDetailsBottom}>
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
                    <Fade>
                      <h2 className={styles.caseStudyDescpHeader}>
                        Context and Vision
                      </h2>
                    </Fade>
                    <Fade>
                      <p className={styles.caseStudyDescpFull}>
                        {val.firstFullDescp}
                      </p>
                    </Fade>
                    <div className={styles.caseStudyBottom}>
                      <ul>
                        <Fade>
                          <li className={styles.caseStudyList}>
                            Pod availed: <br/><span>{val.firstPod}</span>
                          </li>
                          <li className={styles.caseStudyList}>
                            Project-building pace: <br/><span>{val.firstBuildingPace}</span>
                          </li>
                          <li className={styles.caseStudyList}>
                            Current relationship: <br/><span>{val.firstRelationship}</span>
                          </li>
                          <li className={styles.caseStudyList}>
                            Technology provided: <br/><span>{val.firstTechnology}</span>
                          </li>
                        </Fade>
                      </ul>
                      <div className={styles.caseStudyPerson}>
                        <Fade>
                          <div className={styles.caseStudyPersonImg}>
                            <Image
                              src={val.firstPersonImg}
                              alt={val.firstPersonName}
                              width={120}
                              height={120}
                            />
                          </div>
                        </Fade>
                        <div className={styles.caseStudyPersonThought}>
                          <Fade>
                            <h2 className={styles.caseStudyPersonHeader}>
                              Selecting Betacrew
                            </h2>
                          </Fade>
                          <Fade>
                            <p className={styles.caseStudyPersonWords}>
                              "{val.firstPersonThought}"
                            </p>
                          </Fade>
                          <br />
                          <br />
                          <Fade>
                            <p className={styles.caseStudyPersonName}>
                              {val.firstPersonName}
                            </p>
                          </Fade>
                          <Fade>
                            <p className={styles.caseStudyPersonPost}>
                              {val.firstPersonPost}
                            </p>
                          </Fade>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {router.query.id == "stopspoof-case-study" && (
                  <>
                    <div className={styles.caseStudyContent}>
                      <div className={styles.caseStudyDescpContainer}>
                        <Fade>
                          <h1 className={styles.caseStudyTitle}>Case Study:</h1>
                        </Fade>
                        <Fade>
                          <h2 className={styles.caseStudyName}>
                            {val.secondName}
                          </h2>
                        </Fade>
                        <Fade>
                          <p className={styles.caseStudyDescp}>
                            {val.secondDescp}
                          </p>
                        </Fade>
                      </div>
                      <Fade delay={200}>
                        <div className={styles.caseStudyDetails2}>
                          <Fade>
                            <div className={styles.caseStudyImg}>
                              <Image
                                src={val.secondLogo}
                                alt={val.secondName}
                                width={270}
                                height={100}
                              />
                            </div>
                          </Fade>
                          <Fade>
                            <p className={styles.caseStudyComment}>
                              "{val.secondComment}"
                            </p>
                          </Fade>
                          <div className={styles.caseStudyDetailsBottom}>
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
                    </div>
                    <Fade>
                      <h2 className={styles.caseStudyDescpHeader}>
                        Context and Vision
                      </h2>
                    </Fade>
                    <Fade>
                      <p className={styles.caseStudyDescpFull}>
                        {val.secondFullDescp}
                      </p>
                    </Fade>
                    <div className={styles.caseStudyPerson}>
                      <Fade>
                        <div className={styles.caseStudyPersonImg}>
                          <Image
                            src={val.secondPersonImg}
                            alt={val.secondPersonName}
                            width={160}
                            height={160}
                          />
                        </div>
                      </Fade>
                      <div className={styles.caseStudyPersonThought}>
                        <Fade>
                          <h2 className={styles.caseStudyPersonHeader}>
                            Selecting Betacrew
                          </h2>
                        </Fade>
                        <Fade>
                          <p className={styles.caseStudyPersonWords}>
                            "{val.secondPersonThought}"
                          </p>
                        </Fade>
                        <br />
                        <br />
                        <Fade>
                          <p className={styles.caseStudyPersonName}>
                            {val.secondPersonName}
                          </p>
                        </Fade>
                        <Fade>
                          <p className={styles.caseStudyPersonPost}>
                            {val.secondPersonPost}
                          </p>
                        </Fade>
                      </div>
                    </div>
                  </>
                )}
                {router.query.id == "nav360-case-study" && (
                  <>
                    <div className={styles.caseStudyContent}>
                      <div className={styles.caseStudyDescpContainer}>
                        <Fade>
                          <h1 className={styles.caseStudyTitle}>Case Study:</h1>
                        </Fade>
                        <Fade>
                          <h2 className={styles.caseStudyName}>
                            {val.thirdName}
                          </h2>
                        </Fade>
                        <Fade>
                          <p className={styles.caseStudyDescp}>
                            {val.thirdDescp}
                          </p>
                        </Fade>
                      </div>
                      <Fade delay={200}>
                        <div className={styles.caseStudyDetails3}>
                          <Fade>
                            <div className={styles.caseStudyImg}>
                              <Image
                                src={val.thirdLogo}
                                alt={val.thirdName}
                                width={270}
                                height={100}
                              />
                            </div>
                          </Fade>
                          <Fade>
                            <p className={styles.caseStudyComment}>
                              "{val.thirdComment}"
                            </p>
                          </Fade>
                          <div className={styles.caseStudyDetailsBottom}>
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
                    <Fade>
                      <h2 className={styles.caseStudyDescpHeader}>
                        Context and Vision
                      </h2>
                    </Fade>
                    <Fade>
                      <p className={styles.caseStudyDescpFull}>
                        {val.thirdFullDescp}
                      </p>
                    </Fade>
                    <div className={styles.caseStudyPerson}>
                      <Fade>
                        <div className={styles.caseStudyPersonImg}>
                          <Image
                            src={val.thirdPersonImg}
                            alt={val.thirdPersonName}
                            width={160}
                            height={160}
                          />
                        </div>
                      </Fade>
                      <div className={styles.caseStudyPersonThought}>
                        <Fade>
                          <h2 className={styles.caseStudyPersonHeader}>
                            Selecting Betacrew
                          </h2>
                        </Fade>
                        <Fade>
                          <p className={styles.caseStudyPersonWords}>
                            "{val.thirdPersonThought}"
                          </p>
                        </Fade>
                        <br />
                        <br />
                        <Fade>
                          <p className={styles.caseStudyPersonName}>
                            {val.thirdPersonName}
                          </p>
                        </Fade>
                        <Fade>
                          <p className={styles.caseStudyPersonPost}>
                            {val.thirdPersonPost}
                          </p>
                        </Fade>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.caseStudyHire}>
          <Hire />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default caseStudy;
