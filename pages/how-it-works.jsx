import styles from "../styles/howItWorks.module.css";
import howItWorksData,{whatYouGetData} from "../data/howItWorksData";
import { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Process from "../components/Process";
import Hire from "../components/Hire";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from 'next/image'
import Head from 'next/head'

const howItWorks = () => {
  const step1 = useRef(null);
  const step2 = useRef(null);
  const step3 = useRef(null);
  const step4 = useRef(null);
  return (
    <>
    <Head>
        <title>Betacrew - How Betacrew Works</title>
        <meta name="description" content="How Betacrew Works - How building development team works ." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#24509b" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <div className={styles.HIW}>
        <h1 className={styles.HIW_Title}>
          How building <span>development</span> team works .
        </h1>
        <p className={styles.HIW_Descp}>
          Extend your tech team with top talent. We oversee the execution and
          management of your software projects with our proven processes and
          tech mentorship
        </p>
        {howItWorksData?.map((item, index) => {
          return (
            <div className={styles.HIW_Container} key={index}>
              <div className={styles.HIW_Content}>
                <div className={styles.HIW_ContentVector}>
                  <Player
                    ref={step1}
                    hover
                    autoplay={true}
                    loop={false}
                    src="/illustration/step1.json"
                  ></Player>
                </div>
                <div className={styles.HIW_ContentText}>
                  <h5 className={styles.HIW_Step}>01</h5>
                  <div className={styles.HIW_ContentTextContainer}>
                    <h4 className={styles.HIW_ContentTitle}>
                      {item.firstStepTitle}
                    </h4>
                    <p className={styles.HIW_ContentDescp}>
                      {item.firstStepDescp}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.HIW_Forward}>
                  <Image
                    src="/images/leftToRight.svg"
                    className={styles.HIW_ForwardImg}
                    width={940}
                    height={330}
                  />
                </div>

              <div className={styles.HIW_Content2}>
                <div className={styles.HIW_ContentText}>
                  <h5 className={styles.HIW_Step}>02</h5>
                  <div className={styles.HIW_ContentTextContainer}>
                    <h4 className={styles.HIW_ContentTitle}>
                      {item.secondStepTitle}
                    </h4>
                    <p className={styles.HIW_ContentDescp}>
                      {item.secondStepDescp}
                    </p>
                  </div>
                </div>
                <div className={styles.HIW_ContentVector}>
                  <Player
                    ref={step2}
                    hover
                    autoplay={true}
                    loop={false}
                    src="/illustration/step2.json"
                  ></Player>
                </div>
              </div>
             
              <div className={styles.HIW_Forward}>
                <Image
                  src="/images/rightToLeft.svg"
                  className={styles.HIW_ForwardImg}
                  width={940}
                  height={330}
                />
              </div>

                <div className={styles.HIW_Content}>
                <div className={styles.HIW_ContentVector}>
                  <Player
                    ref={step3}
                    hover
                    autoplay={true}
                    loop={false}
                    src="/illustration/step3.json"
                  ></Player>
                </div>
                <div className={styles.HIW_ContentText}>
                  <h5 className={styles.HIW_Step}>03</h5>
                  <div className={styles.HIW_ContentTextContainer}>
                    <h4 className={styles.HIW_ContentTitle}>
                      {item.thirdStepTitle}
                    </h4>
                    <p className={styles.HIW_ContentDescp}>
                      {item.thirdStepDescp}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.HIW_Forward}>
                  <Image
                    src="/images/leftToRight.svg"
                    className={styles.HIW_ForwardImg}
                    width={940}
                    height={330}
                  />
                </div>

              <div className={styles.HIW_Content2}>
                <div className={styles.HIW_ContentText}>
                  <h5 className={styles.HIW_Step}>04</h5>
                  <div className={styles.HIW_ContentTextContainer}>
                    <h4 className={styles.HIW_ContentTitle}>
                      {item.fourthStepTitle}
                    </h4>
                    <p className={styles.HIW_ContentDescp}>
                      {item.fourthStepDescp}
                    </p>
                  </div>
                </div>
                <div className={styles.HIW_ContentVector}>
                  <Player
                    ref={step4}
                    hover
                    autoplay={true}
                    loop={false}
                    src="/illustration/step4.json"
                  ></Player>
                </div>
              </div>
            </div>
          );
        })}
        <Process/>
        <div className={styles.HIW_Services}>
        <h2 className={styles.HIW_ServicesTitle}>WHAT YOU GET <span>.</span></h2>
        <div className={styles.HIW_ServicesContainer}>
          {whatYouGetData?.map((item)=>{return(
        <div className={styles.HIW_ServicesContent} id={item.id} key={item.id}>
          <div className={styles.HIW_ServicesImg}>
          <Image src={item.icon} alt={`Betacrew - ${item.text}`} width={140} height={140}/>
          </div>
            <h5 className={styles.HIW_ServicesText}>{item.text}</h5>
        </div>
          )})}
        </div>
        </div>
        <div className={styles.HIW_Hire}>
          <Hire/>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default howItWorks;
