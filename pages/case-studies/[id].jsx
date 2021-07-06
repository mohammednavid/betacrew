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
        <title>BetaCrew | {router.query.id == "stopspoof-case-study" ? "StopSpoof Case Study" : "Nav360 Case Study" }</title>
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
                {/* {router.query.id == "bild-case-study" && (
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
                                <span>Current Status</span>
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
                    <div className={styles.caseStudyBottom}>
                      <div className={styles.caseStudyBottomLeft}>
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
                      </div>
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
                )} */}
                {router.query.id == "stopspoof-case-study" && (
                  <>
                  <div className={styles.caseStudyContent}>
                    <div className={styles.caseStudyDescpContainer}>
                      <Fade>
                        <h1 className={styles.caseStudyTitle}>Case Study:</h1>
                      </Fade>
                      <Fade>
                        <h2 className={styles.caseStudyName}>
                          About {val.secondName}
                        </h2>
                      </Fade>
                      <Fade>
                        <p className={styles.caseStudyDescp}>
                          {val.secondAbout}
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
                              <span>Team</span>
                              <br />
                              {val.secondPod}
                            </p>
                          </Fade>
                          <Fade>
                            <p>
                              <span>Faster</span>
                              <br />
                              {val.secondBuildingPace}
                            </p>
                          </Fade>
                          <Fade>
                            <p>
                              <span>Current Status</span>
                              <br />
                              {val.secondRelationship}
                            </p>
                          </Fade>
                          <Fade>
                            <p>
                              <span>Stack</span>
                              <br />
                              {val.secondTechnology}
                            </p>
                          </Fade>
                        </div>
                      </div>
                    </Fade>
                  </div>
                  <div className={styles.caseStudyBottom}>
                    <div className={styles.caseStudyBottomLeft}>
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
                    </div>
                    <div className={styles.caseStudyPerson}>
                      <Fade>
                        <div className={styles.caseStudyPersonImg}>
                          <Image
                            src={val.secondPersonImg}
                            alt={val.secondPersonName}
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
                          About {val.thirdName}
                        </h2>
                      </Fade>
                      <Fade>
                        <p className={styles.caseStudyDescp}>
                          {val.thirdAbout}
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
                              <span>Team</span>
                              <br />
                              {val.thirdPod}
                            </p>
                          </Fade>
                          <Fade>
                            <p>
                              <span>Faster</span>
                              <br />
                              {val.thirdBuildingPace}
                            </p>
                          </Fade>
                          <Fade>
                            <p>
                              <span>Current Status</span>
                              <br />
                              {val.thirdRelationship}
                            </p>
                          </Fade>
                          <Fade>
                            <p>
                              <span>Stack</span>
                              <br />
                              {val.thirdTechnology}
                            </p>
                          </Fade>
                        </div>
                      </div>
                    </Fade>
                  </div>
                  <div className={styles.caseStudyBottom}>
                    <div className={styles.caseStudyBottomLeft}>
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
                    </div>
                    <div className={styles.caseStudyPerson}>
                      <Fade>
                        <div className={styles.caseStudyPersonImg}>
                          <Image
                            src={val.thirdPersonImg}
                            alt={val.thirdPersonName}
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
