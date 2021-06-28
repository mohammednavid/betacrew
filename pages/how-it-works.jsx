import styles from "../styles/howItWorks.module.css";
import howItWorksData, { whatYouGetData } from "../data/howItWorksData";
import { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Process from "../components/Process";
import Hire from "../components/Hire";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import Head from "next/head";
import Fade from "react-reveal/Fade";

const howItWorks = () => {
  const step1 = useRef(null);
  const step2 = useRef(null);
  const step3 = useRef(null);
  const step4 = useRef(null);
  return (
    <>
      <Head>
        <title>Betacrew - How Betacrew Works</title>
        <meta
          name="description"
          content="How Betacrew Works - How building development team works ."
        />
      </Head>
      <Header />
      <div className={styles.HIW}>
        <Fade delay={250}>
          <h1 className={styles.HIW_Title}>
            How building <span>development</span> team works.
          </h1>
        </Fade>
        <Fade delay={500}>
          <p className={styles.HIW_Descp}>
            Extend your tech team with top talent. We oversee the execution and
            management of your software projects with our proven processes and
            tech mentorship
          </p>
        </Fade>
        {howItWorksData?.map((item, index) => {
          return (
            <div className={styles.HIW_Container} key={index}>
              <div className={styles.HIW_Content}>
                <Fade delay={100}>
                  <div className={styles.HIW_ContentVector}>
                    <Player
                      ref={step1}
                      hover
                      autoplay={true}
                      loop={false}
                      src="/illustration/step1.json"
                    />
                  </div>
                </Fade>
                <div className={styles.HIW_ContentText}>
                  <Fade delay={200}>
                    <h5 className={styles.HIW_Step}>01</h5>
                  </Fade>
                  <Fade delay={400}>
                    <div className={styles.HIW_ContentTextContainer}>
                      <Fade delay={600}>
                        <h4 className={styles.HIW_ContentTitle}>
                          {item.firstStepTitle}
                        </h4>
                      </Fade>
                      <Fade delay={700}>
                        <p className={styles.HIW_ContentDescp}>
                          {item.firstStepDescp}
                        </p>
                      </Fade>
                    </div>
                  </Fade>
                </div>
              </div>

              <Fade>
                <div className={styles.HIW_Forward}>
                  <Image
                    src="/images/leftToRight.svg"
                    className={styles.HIW_ForwardImg}
                    width={940}
                    height={330}
                  />
                </div>
              </Fade>

              <div className={styles.HIW_Content2}>
                <div className={styles.HIW_ContentText}>
                  <Fade delay={200}>
                    <h5 className={styles.HIW_Step}>02</h5>
                  </Fade>
                  <Fade delay={400}>
                    <div className={styles.HIW_ContentTextContainer}>
                      <Fade delay={600}>
                        <h4 className={styles.HIW_ContentTitle}>
                          {item.secondStepTitle}
                        </h4>
                      </Fade>
                      <Fade delay={700}>
                        <p className={styles.HIW_ContentDescp}>
                          {item.secondStepDescp}
                        </p>
                      </Fade>
                    </div>
                  </Fade>
                </div>
                <Fade delay={100}>
                  <div className={styles.HIW_ContentVector}>
                    <Player
                      ref={step2}
                      hover
                      autoplay={true}
                      loop={false}
                      src="/illustration/step2.json"
                    />
                  </div>
                </Fade>
              </div>

              <Fade>
                <div className={styles.HIW_Forward}>
                  <Image
                    src="/images/rightToLeft.svg"
                    className={styles.HIW_ForwardImg}
                    width={940}
                    height={330}
                  />
                </div>
              </Fade>

              <div className={styles.HIW_Content}>
                <Fade delay={100}>
                  <div className={styles.HIW_ContentVector}>
                    <Player
                      ref={step3}
                      hover
                      autoplay={true}
                      loop={false}
                      src="/illustration/step3.json"
                    />
                  </div>
                </Fade>
                <div className={styles.HIW_ContentText}>
                  <Fade delay={200}>
                    <h5 className={styles.HIW_Step}>03</h5>
                  </Fade>
                  <Fade delay={400}>
                    <div className={styles.HIW_ContentTextContainer}>
                      <Fade delay={600}>
                        <h4 className={styles.HIW_ContentTitle}>
                          {item.thirdStepTitle}
                        </h4>
                      </Fade>
                      <Fade delay={700}>
                        <p className={styles.HIW_ContentDescp}>
                          {item.thirdStepDescp}
                        </p>
                      </Fade>
                    </div>
                  </Fade>
                </div>
              </div>

              <Fade>
                <div className={styles.HIW_Forward}>
                  <Image
                    src="/images/leftToRight.svg"
                    className={styles.HIW_ForwardImg}
                    width={940}
                    height={330}
                  />
                </div>
              </Fade>

              <div className={styles.HIW_Content2}>
                <div className={styles.HIW_ContentText}>
                  <Fade delay={200}>
                    <h5 className={styles.HIW_Step}>04</h5>
                  </Fade>
                  <Fade delay={400}>
                    <div className={styles.HIW_ContentTextContainer}>
                      <Fade delay={600}>
                        <h4 className={styles.HIW_ContentTitle}>
                          {item.fourthStepTitle}
                        </h4>
                      </Fade>
                      <Fade delay={700}>
                        <p className={styles.HIW_ContentDescp}>
                          {item.fourthStepDescp}
                        </p>
                      </Fade>
                    </div>
                  </Fade>
                </div>
                <Fade delay={100}>
                  <div className={styles.HIW_ContentVector}>
                    <Player
                      ref={step4}
                      hover
                      autoplay={true}
                      loop={false}
                      src="/illustration/step4.json"
                    />
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
        <Process />
        <div className={styles.HIW_Services}>
          <Fade delay={100}>
            <h2 className={styles.HIW_ServicesTitle}>
              WHAT YOU GET<span>.</span>
            </h2>
          </Fade>
          <Fade delay={200}>
            <div className={styles.HIW_ServicesContainer}>
              {whatYouGetData?.map((item) => {
                return (
                  <Fade delay={400}>
                    <div
                      className={styles.HIW_ServicesContent}
                      id={item.id}
                      key={item.id}
                    >
                      <div className={styles.HIW_ServicesImg}>
                        <Image
                          src={item.icon}
                          alt={`Betacrew - ${item.text}`}
                          width={140}
                          height={140}
                        />
                      </div>
                      <h5 className={styles.HIW_ServicesText}>{item.text}</h5>
                    </div>
                  </Fade>
                );
              })}
            </div>
          </Fade>
        </div>
        <div className={styles.HIW_Hire}>
          <Hire />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default howItWorks;
