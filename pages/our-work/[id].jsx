import Image from "next/image";
import { ourWorkData } from "../../data/ourWorkData";
import { useRouter } from "next/router";
import styles from "../../styles/caseStudy.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hire from "../../components/Hire";
import Head from "next/head";

const caseStudy = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Case study</title>
        <meta
          name="description"
          content="Recent Betacrew Work - Recent case studies on how we have helped companies"
        />
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
      <div className={styles.caseStudy}>
        {ourWorkData?.map((val) => {
          return (
            <div className={styles.caseStudyContainer} id={val.id} key={val.id}>
              {router.query.id == "case-study-1" && (
                <>
                  <div className={styles.caseStudyContent}>
                    <div className={styles.caseStudyDescpContainer}>
                      <h1 className={styles.caseStudyTitle}>Case study :</h1>
                      <h2 className={styles.caseStudyName}>{val.firstName}</h2>
                      <p className={styles.caseStudyDescp}>{val.firstDescp}</p>
                    </div>
                    <div className={styles.caseStudyDetails}>
                      <div className={styles.caseStudyImg}>
                        <Image
                          src={val.firstLogo}
                          alt={val.firstName}
                          width={270}
                          height={100}
                        />
                      </div>
                      <p className={styles.caseStudyComment}>
                        "{val.firstComment}"
                      </p>
                      <div className={styles.caseStudyDetailsBottom}>
                        <p>
                          {val.firstTeamScaled}
                          <br />
                          <span>Team Scaled</span>
                        </p>
                        <p>
                          {val.firstNPS}
                          <br />
                          <span>NPS</span>
                        </p>
                        <p>
                          {val.firstSaved}
                          <br />
                          <span>saved</span>
                        </p>
                        <p>
                          {val.firstFaster}
                          <br />
                          <span>faster</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <h2 className={styles.caseStudyDescpHeader}>
                    Context and Vision
                  </h2>
                  <p className={styles.caseStudyDescpFull}>
                    {val.firstFullDescp}
                  </p>
                  <div className={styles.caseStudyPerson}>
                    <div className={styles.caseStudyPersonImg}>
                      <Image
                        src={val.firstPersonImg}
                        alt={val.firstPersonName}
                        width={160}
                        height={160}
                      />
                    </div>
                    <div className={styles.caseStudyPersonThought}>
                      <h2 className={styles.caseStudyPersonHeader}>
                        Selecting Betacrew
                      </h2>
                      <p className={styles.caseStudyPersonWords}>
                        "{val.firstPersonThought}"
                      </p>
                      <br />
                      <br />
                      <p className={styles.caseStudyPersonName}>
                        {val.firstPersonName}
                      </p>
                      <p className={styles.caseStudyPersonPost}>
                        {val.firstPersonPost}
                      </p>
                    </div>
                  </div>
                  <h2 className={styles.caseStudyDescpHeader2}>Process</h2>
                  <div className={styles.caseStudyProcess}>
                    <div className={styles.caseStudyProcessLine}></div>
                    <div className={styles.caseStudyProcessContent}>
                      <p className={styles.caseStudyProcessCircle}></p>
                      <p className={styles.caseStudyProcessStep}>
                        scoping
                        <br />
                        <span>(1 Week)</span>
                      </p>
                    </div>
                    <div className={styles.caseStudyProcessContent}>
                      <p className={styles.caseStudyProcessStep}>
                        Initial build
                        <br />
                        <span>(3 Week)</span>
                      </p>
                      <p className={styles.caseStudyProcessCircle}></p>
                    </div>
                    <div className={styles.caseStudyProcessContent}>
                      <p className={styles.caseStudyProcessCircle}></p>
                      <p className={styles.caseStudyProcessStep}>
                        Rapid Iteration
                        <br />
                        <span>(5 Week)</span>
                      </p>
                    </div>
                    <div className={styles.caseStudyProcessContent}>
                      <p className={styles.caseStudyProcessStep}>
                        Launch
                        <br />
                        <span>(2 Week)</span>
                      </p>
                      <p className={styles.caseStudyProcessCircle}></p>
                    </div>
                  </div>
                  <div className={styles.caseStudyProcessM}>
                    <div className={styles.caseStudyProcessContentRight}>
                      <div className={styles.caseStudyProcessContentR}>
                        <p className={styles.caseStudyProcessStep}>
                          Initial build
                          <br />
                          <span>(3 Week)</span>
                        </p>
                        <p className={styles.caseStudyProcessCircle}></p>
                      </div>
                      <div className={styles.caseStudyProcessContentR}>
                        <p className={styles.caseStudyProcessStep}>
                          Launch
                          <br />
                          <span>(2 Week)</span>
                        </p>
                        <p className={styles.caseStudyProcessCircle}></p>
                      </div>
                    </div>
                    <div className={styles.caseStudyProcessLineM}></div>
                    <div className={styles.caseStudyProcessContentLeft}>
                      <div className={styles.caseStudyProcessContentL}>
                        <p className={styles.caseStudyProcessCircle}></p>
                        <p className={styles.caseStudyProcessStep}>
                          scoping
                          <br />
                          <span>(1 Week)</span>
                        </p>
                      </div>
                      <div className={styles.caseStudyProcessContentL}>
                        <p className={styles.caseStudyProcessCircle}></p>
                        <p className={styles.caseStudyProcessStep}>
                          Rapid Iteration
                          <br />
                          <span>(5 Week)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <h2 className={styles.caseStudyDescpHeader}>Result</h2>
                  <p className={styles.caseStudyDescpFull}>{val.firstResult}</p>
                </>
              )}
              {router.query.id == "case-study-2" && (
                <>
                  <div className={styles.caseStudyContent}>
                    <div className={styles.caseStudyDescpContainer}>
                      <h1 className={styles.caseStudyTitle}>Case study :</h1>
                      <h2 className={styles.caseStudyName}>{val.secondName}</h2>
                      <p className={styles.caseStudyDescp}>{val.secondDescp}</p>
                    </div>
                    <div className={styles.caseStudyDetails2}>
                      <div className={styles.caseStudyImg}>
                        <Image
                          src={val.secondLogo}
                          alt={val.secondName}
                          width={270}
                          height={100}
                        />
                      </div>
                      <p className={styles.caseStudyComment}>
                        "{val.secondComment}"
                      </p>
                      <div className={styles.caseStudyDetailsBottom}>
                        <p>
                          {val.secondTeamScaled}
                          <br />
                          <span>Team Scaled</span>
                        </p>
                        <p>
                          {val.secondNPS}
                          <br />
                          <span>NPS</span>
                        </p>
                        <p>
                          {val.secondSaved}
                          <br />
                          <span>saved</span>
                        </p>
                        <p>
                          {val.secondFaster}
                          <br />
                          <span>faster</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <h2 className={styles.caseStudyDescpHeader}>
                    Context and Vision
                  </h2>
                  <p className={styles.caseStudyDescpFull}>
                    {val.secondFullDescp}
                  </p>
                  <div className={styles.caseStudyPerson}>
                    <div className={styles.caseStudyPersonImg}>
                      <Image
                        src={val.secondPersonImg}
                        alt={val.secondPersonName}
                        width={160}
                        height={160}
                      />
                    </div>
                    <div className={styles.caseStudyPersonThought}>
                      <h2 className={styles.caseStudyPersonHeader}>
                        Selecting Betacrew
                      </h2>
                      <p className={styles.caseStudyPersonWords}>
                        "{val.secondPersonThought}"
                      </p>
                      <br />
                      <br />
                      <p className={styles.caseStudyPersonName}>
                        {val.secondPersonName}
                      </p>
                      <p className={styles.caseStudyPersonPost}>
                        {val.secondPersonPost}
                      </p>
                    </div>
                  </div>
                  <h2 className={styles.caseStudyDescpHeader2}>Process</h2>
                  <div className={styles.caseStudyProcess}>
                    <div className={styles.caseStudyProcessLine}></div>
                    <div className={styles.caseStudyProcessContent}>
                      <p className={styles.caseStudyProcessCircle}></p>
                      <p className={styles.caseStudyProcessStep}>
                        scoping
                        <br />
                        <span>(1 Week)</span>
                      </p>
                    </div>
                    <div className={styles.caseStudyProcessContent}>
                      <p className={styles.caseStudyProcessStep}>
                        Initial build
                        <br />
                        <span>(3 Week)</span>
                      </p>
                      <p className={styles.caseStudyProcessCircle}></p>
                    </div>
                    <div className={styles.caseStudyProcessContent}>
                      <p className={styles.caseStudyProcessCircle}></p>
                      <p className={styles.caseStudyProcessStep}>
                        Rapid Iteration
                        <br />
                        <span>(5 Week)</span>
                      </p>
                    </div>
                    <div className={styles.caseStudyProcessContent}>
                      <p className={styles.caseStudyProcessStep}>
                        Launch
                        <br />
                        <span>(2 Week)</span>
                      </p>
                      <p className={styles.caseStudyProcessCircle}></p>
                    </div>
                  </div>
                  <div className={styles.caseStudyProcessM}>
                    <div className={styles.caseStudyProcessContentRight}>
                      <div className={styles.caseStudyProcessContentR}>
                        <p className={styles.caseStudyProcessStep}>
                          Initial build
                          <br />
                          <span>(3 Week)</span>
                        </p>
                        <p className={styles.caseStudyProcessCircle}></p>
                      </div>
                      <div className={styles.caseStudyProcessContentR}>
                        <p className={styles.caseStudyProcessStep}>
                          Launch
                          <br />
                          <span>(2 Week)</span>
                        </p>
                        <p className={styles.caseStudyProcessCircle}></p>
                      </div>
                    </div>
                    <div className={styles.caseStudyProcessLineM}></div>
                    <div className={styles.caseStudyProcessContentLeft}>
                      <div className={styles.caseStudyProcessContentL}>
                        <p className={styles.caseStudyProcessCircle}></p>
                        <p className={styles.caseStudyProcessStep}>
                          scoping
                          <br />
                          <span>(1 Week)</span>
                        </p>
                      </div>
                      <div className={styles.caseStudyProcessContentL}>
                        <p className={styles.caseStudyProcessCircle}></p>
                        <p className={styles.caseStudyProcessStep}>
                          Rapid Iteration
                          <br />
                          <span>(5 Week)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <h2 className={styles.caseStudyDescpHeader}>Result</h2>
                  <p className={styles.caseStudyDescpFull}>{val.firstResult}</p>
                </>
              )}
              {router.query.id == "case-study-3" && (
                <>
                  <div className={styles.caseStudyContent}>
                    <div className={styles.caseStudyDescpContainer}>
                      <h1 className={styles.caseStudyTitle}>Case study :</h1>
                      <h2 className={styles.caseStudyName}>{val.thirdName}</h2>
                      <p className={styles.caseStudyDescp}>{val.thirdDescp}</p>
                    </div>
                    <div className={styles.caseStudyDetails3}>
                      <div className={styles.caseStudyImg}>
                        <Image
                          src={val.thirdLogo}
                          alt={val.thirdName}
                          width={270}
                          height={100}
                        />
                      </div>
                      <p className={styles.caseStudyComment}>
                        "{val.thirdComment}"
                      </p>
                      <div className={styles.caseStudyDetailsBottom}>
                        <p>
                          {val.thirdTeamScaled}
                          <br />
                          <span>Team Scaled</span>
                        </p>
                        <p>
                          {val.thirdNPS}
                          <br />
                          <span>NPS</span>
                        </p>
                        <p>
                          {val.thirdSaved}
                          <br />
                          <span>saved</span>
                        </p>
                        <p>
                          {val.thirdFaster}
                          <br />
                          <span>faster</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <h2 className={styles.caseStudyDescpHeader}>
                    Context and Vision
                  </h2>
                  <p className={styles.caseStudyDescpFull}>
                    {val.thirdFullDescp}
                  </p>
                  <div className={styles.caseStudyPerson}>
                    <div className={styles.caseStudyPersonImg}>
                      <Image
                        src={val.thirdPersonImg}
                        alt={val.thirdPersonName}
                        width={160}
                        height={160}
                      />
                    </div>
                    <div className={styles.caseStudyPersonThought}>
                      <h2 className={styles.caseStudyPersonHeader}>
                        Selecting Betacrew
                      </h2>
                      <p className={styles.caseStudyPersonWords}>
                        "{val.thirdPersonThought}"
                      </p>
                      <br />
                      <br />
                      <p className={styles.caseStudyPersonName}>
                        {val.thirdPersonName}
                      </p>
                      <p className={styles.caseStudyPersonPost}>
                        {val.thirdPersonPost}
                      </p>
                    </div>
                  </div>
                  <h2 className={styles.caseStudyDescpHeader2}>Process</h2>
                  <div className={styles.caseStudyProcess}>
                    <div className={styles.caseStudyProcessLine}></div>
                    <div className={styles.caseStudyProcessContent}>
                      <p className={styles.caseStudyProcessCircle}></p>
                      <p className={styles.caseStudyProcessStep}>
                        scoping
                        <br />
                        <span>(1 Week)</span>
                      </p>
                    </div>
                    <div className={styles.caseStudyProcessContent}>
                      <p className={styles.caseStudyProcessStep}>
                        Initial build
                        <br />
                        <span>(3 Week)</span>
                      </p>
                      <p className={styles.caseStudyProcessCircle}></p>
                    </div>
                    <div className={styles.caseStudyProcessContent}>
                      <p className={styles.caseStudyProcessCircle}></p>
                      <p className={styles.caseStudyProcessStep}>
                        Rapid Iteration
                        <br />
                        <span>(5 Week)</span>
                      </p>
                    </div>
                    <div className={styles.caseStudyProcessContent}>
                      <p className={styles.caseStudyProcessStep}>
                        Launch
                        <br />
                        <span>(2 Week)</span>
                      </p>
                      <p className={styles.caseStudyProcessCircle}></p>
                    </div>
                  </div>
                  <div className={styles.caseStudyProcessM}>
                    <div className={styles.caseStudyProcessContentRight}>
                      <div className={styles.caseStudyProcessContentR}>
                        <p className={styles.caseStudyProcessStep}>
                          Initial build
                          <br />
                          <span>(3 Week)</span>
                        </p>
                        <p className={styles.caseStudyProcessCircle}></p>
                      </div>
                      <div className={styles.caseStudyProcessContentR}>
                        <p className={styles.caseStudyProcessStep}>
                          Launch
                          <br />
                          <span>(2 Week)</span>
                        </p>
                        <p className={styles.caseStudyProcessCircle}></p>
                      </div>
                    </div>
                    <div className={styles.caseStudyProcessLineM}></div>
                    <div className={styles.caseStudyProcessContentLeft}>
                      <div className={styles.caseStudyProcessContentL}>
                        <p className={styles.caseStudyProcessCircle}></p>
                        <p className={styles.caseStudyProcessStep}>
                          scoping
                          <br />
                          <span>(1 Week)</span>
                        </p>
                      </div>
                      <div className={styles.caseStudyProcessContentL}>
                        <p className={styles.caseStudyProcessCircle}></p>
                        <p className={styles.caseStudyProcessStep}>
                          Rapid Iteration
                          <br />
                          <span>(5 Week)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <h2 className={styles.caseStudyDescpHeader}>Result</h2>
                  <p className={styles.caseStudyDescpFull}>{val.firstResult}</p>
                </>
              )}
            </div>
          );
        })}
        <div className={styles.caseStudyHire}>
          <Hire />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default caseStudy;
