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
            <div className={styles.caseStudyContainer} id={val.id} key={val.id}>
              {router.query.id == "case-study-1" && (
                <>
                  <div className={styles.caseStudyContent}>
                    <div className={styles.caseStudyDescpContainer}>
                      <Fade>
                        <h1 className={styles.caseStudyTitle}>Case Study:</h1>
                      </Fade>
                      <Fade>
                        <h2 className={styles.caseStudyName}>
                          {val.firstName}
                        </h2>
                      </Fade>
                      <Fade>
                        <p className={styles.caseStudyDescp}>
                          {val.firstDescp}
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
                      About
                    </h2>
                  </Fade>
                  <Fade>
                    <p className={styles.caseStudyDescpFull}>
                      {val.firstAbout}
                    </p>
                  </Fade>
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
                  <Fade>
                    <ul>
                      <li className={styles.caseStudyList}>
                      Pod availed: {val.firstPod}
                    </li>
                      <li className={styles.caseStudyList}>
                      Project-building pace: {val.firstBuildingPace}
                    </li>
                      <li className={styles.caseStudyList}>
                      Current relationship: {val.firstRelationship}
                    </li>
                      <li className={styles.caseStudyList}>
                      Technology provided: {val.firstTechnology}
                    </li>
                    </ul>
                  </Fade>
                  <div className={styles.caseStudyPerson}>
                    <Fade>
                      <div className={styles.caseStudyPersonImg}>
                        <Image
                          src={val.firstPersonImg}
                          alt={val.firstPersonName}
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
                  <Fade>
                    <h2 className={styles.caseStudyDescpHeader2}>Process</h2>
                  </Fade>
                  <Fade>
                    <div className={styles.caseStudyProcess}>
                      <div className={styles.caseStudyProcessLine}></div>
                      <div className={styles.caseStudyProcessContent}>
                        <p className={styles.caseStudyProcessCircle}></p>
                      <Fade>
                        <p className={styles.caseStudyProcessStep}>
                          scoping
                          <br />
                          <span>(1 Week)</span>
                        </p>
                      </Fade>
                      </div>
                      <div className={styles.caseStudyProcessContent}>
                      <Fade>
                        <p className={styles.caseStudyProcessStep}>
                          Initial build
                          <br />
                          <span>(3 Week)</span>
                        </p>
                      </Fade>
                        <p className={styles.caseStudyProcessCircle}></p>
                      </div>
                      <div className={styles.caseStudyProcessContent}>
                        <p className={styles.caseStudyProcessCircle}></p>
                      <Fade>
                        <p className={styles.caseStudyProcessStep}>
                          Rapid Iteration
                          <br />
                          <span>(5 Week)</span>
                        </p>
                      </Fade>
                      </div>
                      <div className={styles.caseStudyProcessContent}>
                      <Fade>
                        <p className={styles.caseStudyProcessStep}>
                          Launch
                          <br />
                          <span>(2 Week)</span>
                        </p>
                      </Fade>
                        <p className={styles.caseStudyProcessCircle}></p>
                      </div>
                    </div>
                  </Fade>
                  <Fade>
                    <div className={styles.caseStudyProcessM}>
                      <div className={styles.caseStudyProcessContentRight}>
                        <div className={styles.caseStudyProcessContentR}>
                        <Fade>
                          <p className={styles.caseStudyProcessStep}>
                            Initial build
                            <br />
                            <span>(3 Week)</span>
                          </p>
                        </Fade>
                          <p className={styles.caseStudyProcessCircle}></p>
                        </div>
                        <div className={styles.caseStudyProcessContentR}>
                        <Fade>
                          <p className={styles.caseStudyProcessStep}>
                            Launch
                            <br />
                            <span>(2 Week)</span>
                          </p>
                        </Fade>
                          <p className={styles.caseStudyProcessCircle}></p>
                        </div>
                      </div>
                      <div className={styles.caseStudyProcessLineM}></div>
                      <div className={styles.caseStudyProcessContentLeft}>
                        <div className={styles.caseStudyProcessContentL}>
                          <p className={styles.caseStudyProcessCircle}></p>
                        <Fade>
                          <p className={styles.caseStudyProcessStep}>
                            scoping
                            <br />
                            <span>(1 Week)</span>
                          </p>
                        </Fade>
                        </div>
                        <div className={styles.caseStudyProcessContentL}>
                          <p className={styles.caseStudyProcessCircle}></p>
                        <Fade>
                          <p className={styles.caseStudyProcessStep}>
                            Rapid Iteration
                            <br />
                            <span>(5 Week)</span>
                          </p>
                      </Fade>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade>
                    <h2 className={styles.caseStudyDescpHeader}>Result</h2>
                  </Fade>
                  <Fade>
                    <p className={styles.caseStudyDescpFull}>
                      {val.firstResult}
                    </p>
                  </Fade>
                </>
              )}
              {router.query.id == "case-study-2" && (
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
                  <Fade>
                    <h2 className={styles.caseStudyDescpHeader2}>Process</h2>
                  </Fade>
                  <Fade>
                    <div className={styles.caseStudyProcess}>
                      <div className={styles.caseStudyProcessLine}></div>
                      <div className={styles.caseStudyProcessContent}>
                        <p className={styles.caseStudyProcessCircle}></p>
                      <Fade>
                        <p className={styles.caseStudyProcessStep}>
                          scoping
                          <br />
                          <span>(1 Week)</span>
                        </p>
                      </Fade>
                      </div>
                      <div className={styles.caseStudyProcessContent}>
                      <Fade>
                        <p className={styles.caseStudyProcessStep}>
                          Initial build
                          <br />
                          <span>(3 Week)</span>
                        </p>
                      </Fade>
                        <p className={styles.caseStudyProcessCircle}></p>
                      </div>
                      <div className={styles.caseStudyProcessContent}>
                        <p className={styles.caseStudyProcessCircle}></p>
                      <Fade>
                        <p className={styles.caseStudyProcessStep}>
                          Rapid Iteration
                          <br />
                          <span>(5 Week)</span>
                        </p>
                      </Fade>
                      </div>
                      <div className={styles.caseStudyProcessContent}>
                      <Fade>
                        <p className={styles.caseStudyProcessStep}>
                          Launch
                          <br />
                          <span>(2 Week)</span>
                        </p>
                      </Fade>
                        <p className={styles.caseStudyProcessCircle}></p>
                      </div>
                    </div>
                  </Fade>
                  <Fade>
                    <div className={styles.caseStudyProcessM}>
                      <div className={styles.caseStudyProcessContentRight}>
                        <div className={styles.caseStudyProcessContentR}>
                        <Fade>
                          <p className={styles.caseStudyProcessStep}>
                            Initial build
                            <br />
                            <span>(3 Week)</span>
                          </p>
                        </Fade>
                          <p className={styles.caseStudyProcessCircle}></p>
                        </div>
                        <div className={styles.caseStudyProcessContentR}>
                        <Fade>
                          <p className={styles.caseStudyProcessStep}>
                            Launch
                            <br />
                            <span>(2 Week)</span>
                          </p>
                        </Fade>
                          <p className={styles.caseStudyProcessCircle}></p>
                        </div>
                      </div>
                      <div className={styles.caseStudyProcessLineM}></div>
                      <div className={styles.caseStudyProcessContentLeft}>
                        <div className={styles.caseStudyProcessContentL}>
                          <p className={styles.caseStudyProcessCircle}></p>
                        <Fade>
                          <p className={styles.caseStudyProcessStep}>
                            scoping
                            <br />
                            <span>(1 Week)</span>
                          </p>
                        </Fade>
                        </div>
                        <div className={styles.caseStudyProcessContentL}>
                          <p className={styles.caseStudyProcessCircle}></p>
                        <Fade>
                          <p className={styles.caseStudyProcessStep}>
                            Rapid Iteration
                            <br />
                            <span>(5 Week)</span>
                          </p>
                      </Fade>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade>
                    <h2 className={styles.caseStudyDescpHeader}>Result</h2>
                  </Fade>
                  <Fade>
                    <p className={styles.caseStudyDescpFull}>
                      {val.firstResult}
                    </p>
                  </Fade>
                </>
              )}
              {router.query.id == "case-study-3" && (
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
                  <Fade>
                    <h2 className={styles.caseStudyDescpHeader2}>Process</h2>
                  </Fade>
                  <Fade>
                    <div className={styles.caseStudyProcess}>
                      <div className={styles.caseStudyProcessLine}></div>
                      <div className={styles.caseStudyProcessContent}>
                        <p className={styles.caseStudyProcessCircle}></p>
                      <Fade>
                        <p className={styles.caseStudyProcessStep}>
                          scoping
                          <br />
                          <span>(1 Week)</span>
                        </p>
                      </Fade>
                      </div>
                      <div className={styles.caseStudyProcessContent}>
                      <Fade>
                        <p className={styles.caseStudyProcessStep}>
                          Initial build
                          <br />
                          <span>(3 Week)</span>
                        </p>
                      </Fade>
                        <p className={styles.caseStudyProcessCircle}></p>
                      </div>
                      <div className={styles.caseStudyProcessContent}>
                        <p className={styles.caseStudyProcessCircle}></p>
                      <Fade>
                        <p className={styles.caseStudyProcessStep}>
                          Rapid Iteration
                          <br />
                          <span>(5 Week)</span>
                        </p>
                      </Fade>
                      </div>
                      <div className={styles.caseStudyProcessContent}>
                      <Fade>
                        <p className={styles.caseStudyProcessStep}>
                          Launch
                          <br />
                          <span>(2 Week)</span>
                        </p>
                      </Fade>
                        <p className={styles.caseStudyProcessCircle}></p>
                      </div>
                    </div>
                  </Fade>
                  <Fade>
                    <div className={styles.caseStudyProcessM}>
                      <div className={styles.caseStudyProcessContentRight}>
                        <div className={styles.caseStudyProcessContentR}>
                        <Fade>
                          <p className={styles.caseStudyProcessStep}>
                            Initial build
                            <br />
                            <span>(3 Week)</span>
                          </p>
                        </Fade>
                          <p className={styles.caseStudyProcessCircle}></p>
                        </div>
                        <div className={styles.caseStudyProcessContentR}>
                        <Fade>
                          <p className={styles.caseStudyProcessStep}>
                            Launch
                            <br />
                            <span>(2 Week)</span>
                          </p>
                        </Fade>
                          <p className={styles.caseStudyProcessCircle}></p>
                        </div>
                      </div>
                      <div className={styles.caseStudyProcessLineM}></div>
                      <div className={styles.caseStudyProcessContentLeft}>
                        <div className={styles.caseStudyProcessContentL}>
                          <p className={styles.caseStudyProcessCircle}></p>
                        <Fade>
                          <p className={styles.caseStudyProcessStep}>
                            scoping
                            <br />
                            <span>(1 Week)</span>
                          </p>
                        </Fade>
                        </div>
                        <div className={styles.caseStudyProcessContentL}>
                          <p className={styles.caseStudyProcessCircle}></p>
                        <Fade>
                          <p className={styles.caseStudyProcessStep}>
                            Rapid Iteration
                            <br />
                            <span>(5 Week)</span>
                          </p>
                      </Fade>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade>
                    <h2 className={styles.caseStudyDescpHeader}>Result</h2>
                  </Fade>
                  <Fade>
                    <p className={styles.caseStudyDescpFull}>
                      {val.firstResult}
                    </p>
                  </Fade>
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
