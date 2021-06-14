import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { homePODData, homeWWDData, homeFeedback } from "../data/homeData";
import lottie from "../lottie.json";
import Slider from "../components/Slider";
import Link from "next/link";
import Hire from "../components/Hire";

const HomePage = () => {
  const vector = useRef(null);

  return (
    <>
      <Header />
      <div className={styles.home}>
        <h1 className={styles.homeTitle}>
          A team of developers for your <span>organisation</span>
        </h1>
        <p className={styles.homeDescp}>
          Betacrew helps tech company extend their engineering teams by
          procuring first in class tech people{" "}
        </p>
        <div className={styles.homeButtons}>
          <a className={styles.homeButtonLeft}>Create your Team</a>
          <a className={styles.homeButtonRight}>How it works?</a>
        </div>
        <div className={styles.homeVector}>
          <Player
            ref={vector}
            hover
            autoplay={true}
            loop={false}
            src={lottie}
          ></Player>
        </div>
        <div className={styles.homeWWD}>
          <h2 className={styles.homeWWDTitle}>
            WHAT WE DO <span>.</span>
          </h2>
          <p className={styles.homeWWDDescp}>
            We provide best in classs <span>developer team</span> . So you can
            build the plane as you fly it.
          </p>
          {homeWWDData.map((item) => {
            return (
              <div className={styles.homeStepContainer} key={item.id}>
                <div className={styles.homeStepContent}>
                  <div className={styles.homeStepImgContainer}>
                    <div className={styles.homeStepImgBg}></div>
                    <Image
                      className={styles.homeStepImg1}
                      src={item.step1Image}
                      alt="WHAT WE DO"
                      width={740}
                      height={490}
                    />
                  </div>
                  <div className={styles.homeStepRight}>
                    <p className={styles.homeStepNo}>Step 1 : {item.step1}</p>
                    <h3 className={styles.homeStepTitle}>{item.step1Title}</h3>
                    <p className={styles.homeStepDescp}>{item.step1Descp}</p>
                  </div>
                </div>
                <div className={styles.homeForward}>
                  <Image
                    src="/images/leftToRight.svg"
                    className={styles.homeForwardImg}
                    width={750}
                    height={330}
                  />
                </div>
                {/* second */}
                <div className={styles.homeStepContent}>
                  <div className={styles.homeStepRight}>
                    <p className={styles.homeStepNo}>Step 2 : {item.step2}</p>
                    <h3 className={styles.homeStepTitle}>{item.step2Title}</h3>
                    <p className={styles.homeStepDescp}>{item.step2Descp}</p>
                  </div>
                  <div className={styles.homeStepImgContainer}>
                    <div className={styles.homeStepImgBg}></div>
                    <Image
                      className={styles.homeStepImg}
                      src={item.step2Image}
                      alt="WHAT WE DO"
                      width={740}
                      height={490}
                    />
                  </div>
                </div>
                <div className={styles.homeForward2}>
                  <Image
                    src="/images/rightToLeft.svg"
                    className={styles.homeForwardImg}
                    width={750}
                    height={330}
                  />
                </div>
                {/* third */}
                <div className={styles.homeStepContent}>
                  <div className={styles.homeStepImgContainer}>
                    <div className={styles.homeStepImgBg3}></div>
                    <Image
                      className={styles.homeStepImg3}
                      src={item.step3Image}
                      alt="WHAT WE DO"
                      width={740}
                      height={490}
                    />
                  </div>
                  <div className={styles.homeStepRight}>
                    <p className={styles.homeStepNo}>Step 3 : {item.step3}</p>
                    <h3 className={styles.homeStepTitle}>{item.step3Title}</h3>
                    <p className={styles.homeStepDescp}>{item.step3Descp}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.homePOD}>
          <h2 className={styles.homePODTitle}>WHAT is a pod ?</h2>
          <div className={styles.homePODContainer}>
            {homePODData?.map((item) => {
              return (
                <div className={styles.homePODLeft} key={item.id}>
                  <div className={styles.homePODContent}>
                    <span className={styles.homePODCircle}></span>
                    <p className={styles.homePODText}>
                      {item.firstPOD1}
                      <span>{item.firstPOD2}</span>
                      {item.firstPOD3}
                    </p>
                  </div>
                  <div className={styles.homePODContent}>
                    <span className={styles.homePODCircle}></span>
                    <p className={styles.homePODText}>
                      {item.secondPOD1}
                      <span>{item.secondPOD2}</span>
                      {item.secondPOD3}
                    </p>
                  </div>
                  <div className={styles.homePODContent}>
                    <span className={styles.homePODCircle3}></span>
                    <p className={styles.homePODText}>
                      {item.thirdPOD1}
                      <span>{item.thirdPOD2}</span>
                      {item.thirdPOD3}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className={styles.homePODRight}>
              <Image src="/images/POD.svg" alt="" width={500} height={400} />
            </div>
          </div>
        </div>
        <div className={styles.homeWWD} style={{ marginTop: "-5%" }}>
          <h2 className={styles.homeWWDTitle}>
            OUR POD <span>.</span>
          </h2>
          <p className={styles.homeWWDDescp}>
            A Pod can be thought of as <span>“just another team”</span> within
            the parent organization. It will not feel different than a team
            within the organization.
          </p>
        </div>
        <div className={styles.homeCL1}>
          <h2 className={styles.homeCL1Title}>CL1(CREW LEVEL 1)</h2>
          <p className={styles.homeCL1Descp}>
            These are entry-level engineers expected to be able to write modules
            and fix bugs. We expect them to be keen learners and perform well
            under a more senior engineer.
          </p>
        </div>
        <div className={styles.homeProcess}>
          <div className={styles.homeProcessContainer}>
            <div className={styles.homeProcessLeft}>
              <h2 className={styles.homeProcessLeftTitle}>
                How we build your perfect team .
              </h2>
              <a className={styles.homeProcessLeftButton}>Create your Team</a>
            </div>
            <div className={styles.homeProcessRight}>
              <div className={styles.homeProcessRightContent}>
                <div className={styles.homeProcessRightBlank}></div>
                <div className={styles.homeProcessRightCircle}></div>
                <div className={styles.homeProcessRightNumber}>01</div>
                <div className={styles.homeProcessRightText}>
                  Matching Process
                </div>
              </div>
              <div className={styles.homeProcessRightContent}>
                <div className={styles.homeProcessRightBlank}></div>
                <div className={styles.homeProcessRightCircle}></div>
                <div className={styles.homeProcessRightNumber}>02</div>
                <div className={styles.homeProcessRightText}>
                  Assess The Candidates
                </div>
              </div>
              <div className={styles.homeProcessRightContent}>
                <div className={styles.homeProcessRightBlank}></div>
                <div className={styles.homeProcessRightCircle}></div>
                <div className={styles.homeProcessRightNumber}>03</div>
                <div className={styles.homeProcessRightText}>
                  Suggest A Team Structure
                </div>
              </div>
              <div className={styles.homeProcessRightContent}>
                <div className={styles.homeProcessRightBlank}></div>
                <div className={styles.homeProcessRightCircle}></div>
                <div className={styles.homeProcessRightNumber}>04</div>
                <div className={styles.homeProcessRightText}>
                  Build Custom Pods
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.homeDiffContainer}>
          <div className={styles.homeDiff}>
            <h2 className={styles.homeDiffTitle}>THE OLD WAY</h2>
            <div className={styles.homeDiffImg}>
              <Image
                src="/images/betacrewWay.svg"
                alt="The Old Way"
                width={550}
                height={500}
              />
            </div>
            <ul className={styles.homeDiffContent}>
              <li className={styles.homeDiffPoint}>
                <div className={styles.homeDiffIcon}>
                  <Image src="/images/x.svg" alt="" width={50} height={50} />
                </div>
                <p className={styles.homeDiffText}>
                  The normal organization just provides a single team
                </p>
              </li>
              <li className={styles.homeDiffPoint}>
                <div className={styles.homeDiffIcon}>
                  <Image src="/images/x.svg" alt="" width={50} height={50} />
                </div>
                <p className={styles.homeDiffText}>
                  A fixed team members are there and cannot be interchanged
                </p>
              </li>
              <li className={styles.homeDiffPoint}>
                <div className={styles.homeDiffIcon}>
                  <Image src="/images/x.svg" alt="" width={50} height={50} />
                </div>
                <p className={styles.homeDiffText}>
                  Choosen from a pool of engineers
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.homeDiffLine}></div>

          <div className={styles.homeDiffVs}>Vs</div>

          <div className={styles.homeDiff}>
            <h2 className={styles.homeDiffTitle}>THE BETACREW WAY</h2>
            <div className={styles.homeDiffImg}>
              <Image
                src="/images/betacrewWay.svg"
                alt="The Betacrew Way"
                width={550}
                height={500}
              />
            </div>
            <ul className={styles.homeDiffContent}>
              <li className={styles.homeDiffPoint}>
                <div className={styles.homeDiffIcon}>
                  <Image
                    src="/images/check.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <p className={styles.homeDiffText}>
                  Engineers within the pod can take help of different pod
                </p>
              </li>
              <li className={styles.homeDiffPoint}>
                <div className={styles.homeDiffIcon}>
                  <Image
                    src="/images/check.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <p className={styles.homeDiffText}>
                  Organizations can Scale-Up and Scale-down teams as per your
                  needs
                </p>
              </li>
              <li className={styles.homeDiffPoint}>
                <div className={styles.homeDiffIcon}>
                  <Image
                    src="/images/check.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <p className={styles.homeDiffText}>
                  Chosen from experienced engineers with our aptitude tests
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.homeSlider}>
          <h2 className={styles.homeSliderTitle}>
            OUR CODING TOOLS <span>ARSENAL</span> .
          </h2>
        </div>
        <Slider />
        <div className={styles.homeCaseStudies}>
          <h2 className={styles.homeCaseStudiesTitle}>
            CASE STUDIES <span>.</span>
          </h2>
          <div className={styles.homeCaseStudiesCards}>
            <Link href="/our-work/case-study-1">
              <div className={styles.homeCaseStudiesCard}>
                <Image src="/images/bild.png" alt="" width={340} height={130} />
              </div>
            </Link>
            <Link href="/our-work/case-study-2">
              <div className={styles.homeCaseStudiesCard2}>
                <Image src="/images/bild.png" alt="" width={340} height={130} />
              </div>
            </Link>
          </div>
          <Link href="/our-work">
            <p className={styles.homeCaseStudiesMore}>VIEW MORE</p>
          </Link>
        </div>
        <div className={styles.homeCaseStudies}>
          <h2 className={styles.homeCaseStudiesTitle}>FEEDBACK</h2>
        </div>
        {homeFeedback?.map((val, index) => {
          return (
            <div className={styles.caseStudyPerson} key={index}>
              <div className={styles.caseStudyPersonImg}>
                <Image
                  src={val.feedbackImage}
                  alt={val.feedbackCompany}
                  width={160}
                  height={160}
                />
              </div>
              <div className={styles.caseStudyPersonThought}>
                <h2 className={styles.caseStudyPersonHeader}>
                  {val.feedbackCompany}
                </h2>
                <div className={styles.caseStudyPersonLine}></div>
                <p className={styles.caseStudyPersonWords}>
                  "{val.feedbackDescp}"
                </p>
              </div>
            </div>
          );
        })}
        <div className={styles.homeHire}>
          <div className={styles.hire}>
            <p className={styles.hireContent}>
              Hire The Best Developers And Designers Around!
            </p>
            <div className={styles.hireRight}>
              <div className={styles.hireLineWhite}>
                <div className={styles.hireUpperLine}></div>
                <div className={styles.hireUpperLine}></div>
                <div className={styles.hireUpperLine}></div>
              </div>
              <a className={styles.hireButton}>HIRE TOP DEVELOPERS</a>
              <div className={styles.hireLineWhite}>
                <div className={styles.hireBottomLine}></div>
                <div className={styles.hireBottomLine}></div>
                <div className={styles.hireBottomLine}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
