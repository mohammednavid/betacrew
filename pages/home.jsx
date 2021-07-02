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
import Chat from '../components/Chat';

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
      <div className={styles.homeHeroContainer}>
      <div className={styles.homeContent}>
        <Fade delay={250}>
          <h1 className={styles.homeTitle}>
          ON-DEMAND ELASTIC <span>TECH TEAMS</span>.
          </h1>
        </Fade>
        <Chat/>
        <Fade delay={500}>
          <p className={styles.homeDescp}>
          BetaCrew helps tech companies and start-ups enhance their engineering team by custom-building Pods most suitable to them.
          </p>
        </Fade>
        <Fade delay={750}>
          <div className={styles.homeButtons}>
            <Link href="/contact">
              <a className={styles.homeButtonLeft}>Create your Team</a>
            </Link>
            <Link href="/how-it-works">
              <a className={styles.homeButtonRight}>How it works?</a>
            </Link>
          </div>
        </Fade>
          </div>
        <div className={styles.homeVector} style={{ zIndex: 0 }}>
          <Fade>
            <Player
              ref={vector}
              hover
              autoplay={true}
              loop={false}
              src="/illustration/lottie.json"
            />
          </Fade>
        </div>
        </div>
        <div className={styles.homeWWD}>
          <Fade>
            <h2 className={styles.homeWWDTitle}>
              WHAT WE DO<span>.</span>
            </h2>
          </Fade>
          <Fade>
            <p className={styles.homeWWDDescp}>
            Pioneering a new and unique concept of <span>‘Pods’</span>, we bring you the best-in-class developers.
            </p>
          </Fade>
          {homeWWDData.map((item) => {
            return (
              <div className={styles.homeStepContainer} key={item.id}>
                <div className={styles.homeStepContent}>
                  <Fade>
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
                    <Fade>
                      <p className={styles.homeStepNo}>Step 1 : {item.step1}</p>
                    </Fade>
                    <Fade>
                      <h3 className={styles.homeStepTitle}>
                        {item.step1Title}
                      </h3>
                    </Fade>
                    <Fade>
                      <p className={styles.homeStepDescp}>{item.step1Descp}</p>
                    </Fade>
                  </div>
                </div>
                <div className={styles.homeForward}>
                  <Fade>
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
                    <Fade>
                      <p className={styles.homeStepNo}>Step 2 : {item.step2}</p>
                    </Fade>
                    <Fade>
                      <h3 className={styles.homeStepTitle}>
                        {item.step2Title}
                      </h3>
                    </Fade>
                    <Fade>
                      <p className={styles.homeStepDescp}>{item.step2Descp}</p>
                    </Fade>
                  </div>
                  <Fade>
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
                <Fade>
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
                  <Fade>
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
                    <Fade>
                      <p className={styles.homeStepNo}>Step 3 : {item.step3}</p>
                    </Fade>
                    <Fade>
                      <h3 className={styles.homeStepTitle}>
                        {item.step3Title}
                      </h3>
                    </Fade>
                    <Fade>
                      <p className={styles.homeStepDescp}>{item.step3Descp}</p>
                    </Fade>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.homePOD}>
          <Fade>
            <h2 className={styles.homePODTitle}>WHAT IS A POD?</h2>
          </Fade>
          <div className={styles.homePODContainer}>
            {homePODData?.map((item) => {
              return (
                <div className={styles.homePODLeft} key={item.id}>
                  <Fade delay={150}>
                    <div className={styles.homePODContent}>
                      <span className={styles.homePODCircle}></span>
                      <p className={styles.homePODText}>
                        {item.firstPOD1}
                        <span>{item.firstPOD2}</span>
                        {item.firstPOD3}
                      </p>
                    </div>
                  </Fade>
                  <Fade delay={300}>
                    <div className={styles.homePODContent}>
                      <span className={styles.homePODCircle}></span>
                      <p className={styles.homePODText}>
                        {item.secondPOD1}
                        <span>{item.secondPOD2}</span>
                        {item.secondPOD3}
                      </p>
                    </div>
                  </Fade>
                  <Fade delay={450}>
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
            <Fade>
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
          <Fade>
            <h2 className={styles.homeWWDTitle2} style={{ marginTop: "-5%" }}>
              WHY A POD<span>?</span>
            </h2>
          </Fade>
          <ul>
          <Fade>
            <li className={styles.homeWWDList}>
            Inheriting the protocols, expectations and the end-objectives, our pod welds with the parents organizations so that it does not feel any different than them. 
            </li>
          </Fade>
          <Fade>
            <li className={styles.homeWWDList}>
            The Pods help accelerating the development of your software.
            </li>
          </Fade>
          <Fade>
            <li className={styles.homeWWDList}>
            Clients can reap the benefits of skilled developers and engineers from the BetaCrew team when their own in-house team may lack such expertise.
            </li>
          </Fade>
          <Fade>
            <li className={styles.homeWWDList}>
            In addition to all these, clients can cut back on their total cost, since Pods don’t require hiring on pay-roll. Instead, they utilize our experts on tech stack for their module on a contractual basis.
            </li>
          </Fade>
          <Fade>
            <li className={styles.homeWWDList}>
            Our Pods are very flexible, and can be scaled up/down at any point, according to the client's needs.
            </li>
          </Fade>
          <Fade>
            <li className={styles.homeWWDList}>
              The Pods come with various Crew Levels for ease of selection according to your specifications.
            </li>
          </Fade>
          </ul>
        </div>
        <PodSlider />

        <Process />
        <div className={styles.homeDiffContainer}>
          <div className={styles.homeDiff}>
            <Fade>
              <h2 className={styles.homeDiffTitle}>THE OLD WAY</h2>
            </Fade>
            <Fade>
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
              <Fade>
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
                  The organisation provides the same team for all the clients; lack of variety
                  </p>
                </li>
              </Fade>
              <Fade>
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
                  Team members are fixed, without the scope of interchanging members or scaling the team up or down.
                  </p>
                </li>
              </Fade>
              <Fade>
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

          <Fade>
            <div className={styles.homeDiffLine}></div>

            <div className={styles.homeDiffVs}>Vs</div>
          </Fade>

          <div className={styles.homeDiff}>
            <Fade>
              <h2 className={styles.homeDiffTitle}>THE BETACREW WAY</h2>
            </Fade>
            <Fade>
              <div className={styles.homeDiffImg}>
                <Player
                  ref={fourthVector}
                  hover
                  autoplay={true}
                  loop={false}
                  src="/illustration/betacrewWay.json"
                />
              </div>
            </Fade>
            <ul className={styles.homeDiffContent}>
              <Fade>
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
                  Engineers within the pod can consult other Pods which will result in more efficiency and better decision-making.
                  </p>
                </li>
              </Fade>
              <Fade>
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
                    Organizations can Scale-Up and Scale-down teams as per your needs.
                  </p>
                </li>
              </Fade>
              <Fade>
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
                  Chosen from a pool of experienced engineers through aptitude tests that you fit your goals.
                  </p>
                </li>
              </Fade>
            </ul>
          </div>
        </div>
        <div className={styles.homeSlider}>
          <Fade>
            <h2 className={styles.homeSliderTitle}>
              OUR CODING TOOLS <span>ARSENAL</span>.
            </h2>
          </Fade>
        </div>
        <Fade>
          <Slider />
        </Fade>
        <div className={styles.homeCaseStudies} style={{paddingTop:"5%"}}>
          <Fade>
            <h2 className={styles.homeCaseStudiesTitle}>
              CASE STUDIES<span>.</span>
            </h2>
          </Fade>
              <Fade>
          <div className={styles.homeCaseStudiesCards}>
            <Link href="/our-work/case-study-1">
                <div className={styles.homeCaseStudiesCard}>
                  <Image
                    src="/images/bild.png"
                    alt="Betacrew - Case Study"
                    width={340}
                    height={130}
                  />
                </div>
            </Link>
            <Link href="/our-work/case-study-2">
                <div className={styles.homeCaseStudiesCard2}>
                  <Image
                    src="/images/stopspoof.png"
                    alt="Betacrew - Case Study"
                    width={340}
                    height={130}
                  />
                </div>
            </Link>
          </div>
              </Fade>
          <Fade>
            <Link href="/our-work">
              <p className={styles.homeCaseStudiesMore}>VIEW MORE</p>
            </Link>
          </Fade>
        </div>
        <div className={styles.homeCaseStudies}>
          <Fade>
            <h2 className={styles.homeCaseStudiesTitle}>FEEDBACK.</h2>
          </Fade>
        </div>
        {homeFeedback?.map((val, index) => {
          return (
            <div className={styles.caseStudyPerson} key={index}>
              <Fade>
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
                <Fade>
                  <h2 className={styles.caseStudyPersonHeader}>
                    {val.feedbackCompany}
                  </h2>
                </Fade>
                <Fade>
                  <div className={styles.caseStudyPersonLine}></div>
                </Fade>
                <Fade>
                  <p className={styles.caseStudyPersonWords}>
                    "{val.feedbackDescp}"
                  </p>
                </Fade>
              </div>
            </div>
          );
        })}
        <Fade delay={100}>
          <div className={styles.homeHire}>
            <div className={styles.hire}>
              <Fade delay={250}>
                <p className={styles.hireContent}>
                  Hire The Best Developers And Designers Around!
                </p>
              </Fade>
              <div className={styles.hireRight}>
                <Fade delay={500}>
                  <div className={styles.hireLineWhite}>
                    <div className={styles.hireUpperLine}></div>
                    <div className={styles.hireUpperLine}></div>
                    <div className={styles.hireUpperLine}></div>
                  </div>
                </Fade>
                <Fade delay={400}>
                  <Link href="/contact">
                    <a className={styles.hireButton}>HIRE TOP DEVELOPERS</a>
                  </Link>
                </Fade>
                <Fade delay={500}>
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
