import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { homePODData, homeWWDData, homeFeedback } from "../data/homeData";
import Slider from "../components/Slider";
import Link from "next/link";
import Head from "next/head";
import Process from "../components/Process";
import Hire from "../components/Hire";
import PodSlider from "../components/PodSlider";
import Fade from "react-reveal/Fade";

const HomePage = () => {
  const vector = useRef(null);
  const secondVector = useRef(null);
  const thirdVector = useRef(null);
  const fourthVector = useRef(null);

  return (
    <>
      <Head>
        <title>Betacrew</title>
        <meta
          name="description"
          content="Betacrerw - A team of developers for your organisation"
        />
      </Head>
      <Header />
      <div className={styles.home}>
        <Fade delay={1000}>
          <h1 className={styles.homeTitle}>
            A team of developers for your <span>organisation</span>
          </h1>
        </Fade>
        <Fade delay={1500}>
          <p className={styles.homeDescp}>
            Betacrew helps tech company extend their engineering teams by
            procuring first in class tech people{" "}
          </p>
        </Fade>
            <Fade delay={2000}>
        <div className={styles.homeButtons}>
          <Link href="/contact">
              <a className={styles.homeButtonLeft}>Create your Team</a>
          </Link>
          <Link href="/how-it-works">
              <a className={styles.homeButtonRight}>How it works?</a>
          </Link>
        </div>
            </Fade>
        <div className={styles.homeVector}>
          <Fade delay={2500}>
            <Player
              ref={vector}
              hover
              autoplay={true}
              loop={false}
              src="/illustration/lottie.json"
              style={{ zIndex: -1 }}
            />
          </Fade>
        </div>
        <div className={styles.homeWWD}>
          <Fade delay={1000}>
            <h2 className={styles.homeWWDTitle}>
              WHAT WE DO <span>.</span>
            </h2>
          </Fade>
          <Fade delay={1500}>
            <p className={styles.homeWWDDescp}>
              We provide best in class <span>developer team</span> . So you can
              build the plane as you fly it.
            </p>
          </Fade>
          {homeWWDData.map((item) => {
            return (
              <div className={styles.homeStepContainer} key={item.id}>
                <div className={styles.homeStepContent}>
                  <Fade delay={1500}>
                    <div className={styles.homeStepImgContainer}>
                      <div className={styles.homeStepImgBg}></div>
                      <Image
                        className={styles.homeStepImg1}
                        src={item.step1Image}
                        alt="Betacrew - WHAT WE DO"
                        width={740}
                        height={490}
                      />
                    </div>
                  </Fade>
                  <div className={styles.homeStepRight}>
                    <Fade delay={2000}>
                      <p className={styles.homeStepNo}>Step 1 : {item.step1}</p>
                    </Fade>
                    <Fade delay={2200}>
                      <h3 className={styles.homeStepTitle}>
                        {item.step1Title}
                      </h3>
                    </Fade>
                    <Fade delay={2400}>
                      <p className={styles.homeStepDescp}>{item.step1Descp}</p>
                    </Fade>
                  </div>
                </div>
                <div className={styles.homeForward}>
                  <Fade delay={1000}>
                    <Image
                      src="/images/leftToRight.svg"
                      className={styles.homeForwardImg}
                      alt="Betacrew"
                      width={750}
                      height={330}
                    />
                  </Fade>
                </div>
                {/* second */}
                <div className={styles.homeStepContent}>
                  <div className={styles.homeStepRight}>
                    <Fade delay={1500}>
                      <p className={styles.homeStepNo}>Step 2 : {item.step2}</p>
                    </Fade>
                    <Fade delay={1700}>
                      <h3 className={styles.homeStepTitle}>
                        {item.step2Title}
                      </h3>
                    </Fade>
                    <Fade delay={1900}>
                      <p className={styles.homeStepDescp}>{item.step2Descp}</p>
                    </Fade>
                  </div>
                  <Fade delay={1000}>
                    <div className={styles.homeStepImgContainer}>
                      <div className={styles.homeStepImgBg}></div>
                      <Image
                        className={styles.homeStepImg}
                        src={item.step2Image}
                        alt="Betacrew - WHAT WE DO"
                        width={740}
                        height={490}
                      />
                    </div>
                  </Fade>
                </div>
                <Fade delay={1000}>
                  <div className={styles.homeForward2}>
                    <Image
                      src="/images/rightToLeft.svg"
                      className={styles.homeForwardImg}
                      alt="Betacrew"
                      width={750}
                      height={330}
                    />
                  </div>
                </Fade>
                {/* third */}
                <div className={styles.homeStepContent}>
                  <Fade delay={1000}>
                    <div className={styles.homeStepImgContainer}>
                      <div className={styles.homeStepImgBg3}></div>
                      <Image
                        className={styles.homeStepImg3}
                        src={item.step3Image}
                        alt="Betacrew - WHAT WE DO"
                        width={740}
                        height={490}
                      />
                    </div>
                  </Fade>
                  <div className={styles.homeStepRight}>
                    <Fade delay={1500}>
                      <p className={styles.homeStepNo}>Step 3 : {item.step3}</p>
                    </Fade>
                    <Fade delay={1700}>
                      <h3 className={styles.homeStepTitle}>
                        {item.step3Title}
                      </h3>
                    </Fade>
                    <Fade delay={1900}>
                      <p className={styles.homeStepDescp}>{item.step3Descp}</p>
                    </Fade>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.homePOD}>
          <Fade delay={1000}>
            <h2 className={styles.homePODTitle}>WHAT is a pod ?</h2>
          </Fade>
          <div className={styles.homePODContainer}>
            {homePODData?.map((item) => {
              return (
                <div className={styles.homePODLeft} key={item.id}>
                  <Fade delay={2000}>
                    <div className={styles.homePODContent}>
                      <span className={styles.homePODCircle}></span>
                      <p className={styles.homePODText}>
                        {item.firstPOD1}
                        <span>{item.firstPOD2}</span>
                        {item.firstPOD3}
                      </p>
                    </div>
                  </Fade>
                  <Fade delay={2500}>
                    <div className={styles.homePODContent}>
                      <span className={styles.homePODCircle}></span>
                      <p className={styles.homePODText}>
                        {item.secondPOD1}
                        <span>{item.secondPOD2}</span>
                        {item.secondPOD3}
                      </p>
                    </div>
                  </Fade>
                  <Fade delay={3000}>
                    <div className={styles.homePODContent}>
                      <span className={styles.homePODCircle3}></span>
                      <p className={styles.homePODText}>
                        {item.thirdPOD1}
                        <span>{item.thirdPOD2}</span>
                        {item.thirdPOD3}
                      </p>
                    </div>
                  </Fade>
                </div>
              );
            })}
            <Fade delay={500}>
              <div className={styles.homePODRight}>
                <Player
                  ref={secondVector}
                  hover
                  autoplay={true}
                  loop={false}
                  src="/illustration/pod.json"
                />
              </div>
            </Fade>
          </div>
        </div>
        <div className={styles.homeWWD}>
          <Fade delay={1000}>
            <h2 className={styles.homeWWDTitle} style={{ marginTop: "-5%" }}>
              OUR POD <span>.</span>
            </h2>
          </Fade>
          <Fade delay={1500}>
            <p className={styles.homeWWDDescp}>
              A Pod can be thought of as <span>“just another team”</span> within
              the parent organization. It will not feel different than a team
              within the organization.
            </p>
          </Fade>
        </div>
        <PodSlider />

        <Process />
        <div className={styles.homeDiffContainer}>
          <div className={styles.homeDiff}>
            <Fade delay={1000}>
              <h2 className={styles.homeDiffTitle}>THE OLD WAY</h2>
            </Fade>
            <Fade delay={1500}>
              <div className={styles.homeDiffImg}>
                <Player
                  ref={thirdVector}
                  hover
                  autoplay={true}
                  loop={false}
                  src="/illustration/oldWay.json"
                />
              </div>
            </Fade>
            <ul className={styles.homeDiffContent}>
              <Fade delay={2000}>
                <li className={styles.homeDiffPoint}>
                  <div className={styles.homeDiffIcon}>
                    <Image
                      src="/images/x.svg"
                      alt="Old Way"
                      width={50}
                      height={50}
                    />
                  </div>
                  <p className={styles.homeDiffText}>
                    The normal organization just provides a single team
                  </p>
                </li>
              </Fade>
              <Fade delay={2300}>
                <li className={styles.homeDiffPoint}>
                  <div className={styles.homeDiffIcon}>
                    <Image
                      src="/images/x.svg"
                      alt="Old Way"
                      width={50}
                      height={50}
                    />
                  </div>
                  <p className={styles.homeDiffText}>
                    A fixed team members are there and cannot be interchanged
                  </p>
                </li>
              </Fade>
              <Fade delay={2600}>
                <li className={styles.homeDiffPoint}>
                  <div className={styles.homeDiffIcon}>
                    <Image
                      src="/images/x.svg"
                      alt="Old Way"
                      width={50}
                      height={50}
                    />
                  </div>
                  <p className={styles.homeDiffText}>
                    Choosen from a pool of engineers
                  </p>
                </li>
              </Fade>
            </ul>
          </div>

          <Fade delay={1300}>
            <div className={styles.homeDiffLine}></div>

            <div className={styles.homeDiffVs}>Vs</div>
          </Fade>

          <div className={styles.homeDiff}>
            <Fade delay={1000}>
              <h2 className={styles.homeDiffTitle}>THE BETACREW WAY</h2>
            </Fade>
            <Fade delay={1500}>
              <div className={styles.homeDiffImg}>
                <Player
                  ref={thirdVector}
                  hover
                  autoplay={true}
                  loop={false}
                  src="/illustration/betacrewWay.json"
                />
              </div>
            </Fade>
            <ul className={styles.homeDiffContent}>
              <Fade delay={2000}>
                <li className={styles.homeDiffPoint}>
                  <div className={styles.homeDiffIcon}>
                    <Image
                      src="/images/check.svg"
                      alt="Betacrew Way"
                      width={50}
                      height={50}
                    />
                  </div>
                  <p className={styles.homeDiffText}>
                    Engineers within the pod can take help of different pod
                  </p>
                </li>
              </Fade>
              <Fade delay={2200}>
                <li className={styles.homeDiffPoint}>
                  <div className={styles.homeDiffIcon}>
                    <Image
                      src="/images/check.svg"
                      alt="Betacrew Way"
                      width={50}
                      height={50}
                    />
                  </div>
                  <p className={styles.homeDiffText}>
                    Organizations can Scale-Up and Scale-down teams as per your
                    needs
                  </p>
                </li>
              </Fade>
              <Fade delay={2600}>
                <li className={styles.homeDiffPoint}>
                  <div className={styles.homeDiffIcon}>
                    <Image
                      src="/images/check.svg"
                      alt="Betacrew Way"
                      width={50}
                      height={50}
                    />
                  </div>
                  <p className={styles.homeDiffText}>
                    Chosen from experienced engineers with our aptitude tests
                  </p>
                </li>
              </Fade>
            </ul>
          </div>
        </div>
        <div className={styles.homeSlider}>
          <Fade delay={1000}>
            <h2 className={styles.homeSliderTitle}>
              OUR CODING TOOLS <span>ARSENAL</span> .
            </h2>
          </Fade>
        </div>
        <Fade delay={1500}>
          <Slider />
        </Fade>
        <div className={styles.homeCaseStudies}>
          <Fade delay={1000}>
            <h2 className={styles.homeCaseStudiesTitle}>
              CASE STUDIES <span>.</span>
            </h2>
          </Fade>
          <div className={styles.homeCaseStudiesCards}>
            <Link href="/our-work/case-study-1">
              <Fade delay={1500}>
                <div className={styles.homeCaseStudiesCard}>
                  <Image
                    src="/images/bild.png"
                    alt="Betacrew - Case Study"
                    width={340}
                    height={130}
                  />
                </div>
              </Fade>
            </Link>
            <Link href="/our-work/case-study-2">
              <Fade delay={2000}>
                <div className={styles.homeCaseStudiesCard2}>
                  <Image
                    src="/images/stopspoof.png"
                    alt="Betacrew - Case Study"
                    width={340}
                    height={130}
                  />
                </div>
              </Fade>
            </Link>
          </div>
          <Fade delay={2500}>
            <Link href="/our-work">
              <p className={styles.homeCaseStudiesMore}>VIEW MORE</p>
            </Link>
          </Fade>
        </div>
        <div className={styles.homeCaseStudies}>
          <Fade delay={1000}>
            <h2 className={styles.homeCaseStudiesTitle}>FEEDBACK</h2>
          </Fade>
        </div>
        {homeFeedback?.map((val, index) => {
          return (
            <div className={styles.caseStudyPerson} key={index}>
              <Fade delay={1500}>
                <div className={styles.caseStudyPersonImg}>
                  <Image
                    src={val.feedbackImage}
                    alt={val.feedbackCompany}
                    width={160}
                    height={160}
                  />
                </div>
              </Fade>
              <div className={styles.caseStudyPersonThought}>
                <Fade delay={2000}>
                  <h2 className={styles.caseStudyPersonHeader}>
                    {val.feedbackCompany}
                  </h2>
                </Fade>
                <Fade delay={2200}>
                  <div className={styles.caseStudyPersonLine}></div>
                </Fade>
                <Fade delay={2500}>
                  <p className={styles.caseStudyPersonWords}>
                    "{val.feedbackDescp}"
                  </p>
                </Fade>
              </div>
            </div>
          );
        })}
            <Fade delay={500}>
        <div className={styles.homeHire}>
          <div className={styles.hire}>
            <Fade delay={1000}>
              <p className={styles.hireContent}>
                Hire The Best Developers And Designers Around!
              </p>
            </Fade>
            <div className={styles.hireRight}>
              <Fade delay={2000}>
                <div className={styles.hireLineWhite}>
                  <div className={styles.hireUpperLine}></div>
                  <div className={styles.hireUpperLine}></div>
                  <div className={styles.hireUpperLine}></div>
                </div>
              </Fade>
              <Fade delay={1500}>
                <Link href="/contact">
                  <a className={styles.hireButton}>HIRE TOP DEVELOPERS</a>
                </Link>
              </Fade>
              <Fade delay={2000}>
                <div className={styles.hireLineWhite}>
                  <div className={styles.hireBottomLine}></div>
                  <div className={styles.hireBottomLine}></div>
                  <div className={styles.hireBottomLine}></div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
          </Fade>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
