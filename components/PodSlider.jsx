import { useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "../styles/PodSlider.module.css";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const PodSlider = () => {
  const [pod1, setPod1] = useState(true);
  const [pod2, setPod2] = useState(false);
  const [pod3, setPod3] = useState(false);
  const [pod4, setPod4] = useState(false);
  const podVector1 = useRef(null);
  const podVector2 = useRef(null);
  const podVector3 = useRef(null);
  const podVector4 = useRef(null);
  const pod = useRef();

  const Next = () => {
    if (pod1) {
      setPod1(false) || setPod2(true);
    } else if (pod2) {
      setPod2(false) || setPod3(true);
    } else if (pod3) {
      setPod3(false) || setPod4(true);
    } else if (pod4) {
      setPod4(false) || setPod1(true);
    }
  };

  const Prev = () => {
    if (pod1) {
      setPod1(false) || setPod4(true);
    } else if (pod4) {
      setPod4(false) || setPod3(true);
    } else if (pod3) {
      setPod3(false) || setPod2(true);
    } else if (pod2) {
      setPod2(false) || setPod1(true);
    }
  };

  return (
    <>
      <div className={styles.podSlider}>
      <Fade>
        <a className={styles.next} onClick={Prev}>
          {" "}
          <Image src="/images/prev.svg" alt="Betacrew" width={50} height={50} />
        </a>
        <a className={styles.prev} onClick={Next}>
          <Image src="/images/next.svg" alt="Betacrew" width={50} height={50} />
        </a>
        <div className={styles.fixed}>
          <Image
            src="/images/ourPod.svg"
            alt="Betacrew"
            width={300}
            height={150}
          />
        </div>
        </Fade>
        {pod1 && (
          <Fade>
          <div ref={pod} className={styles.podSlide}>
            <Player
              ref={podVector1}
              hover
              autoplay={true}
              loop={false}
              src="/illustration/pod1.json"
            />
          </div>
          </Fade>
        )}
        {pod2 && (
          <Fade>
          <div ref={pod} className={styles.podSlide}>
            <Player
              ref={podVector2}
              hover
              autoplay={true}
              loop={false}
              src="/illustration/pod2.json"
            />
          </div>
          </Fade>
        )}
        {pod3 && (
          <Fade>
          <div ref={pod} className={styles.podSlide}>
            <Player
              ref={podVector3}
              hover
              autoplay={true}
              loop={false}
              src="/illustration/pod3.json"
            />
          </div>
          </Fade>
        )}
        {pod4 && (
          <Fade>
          <div ref={pod} className={styles.podSlide}>
            <Player
              ref={podVector4}
              hover
              autoplay={true}
              loop={false}
              src="/illustration/pod4.json"
            />
          </div>
          </Fade>
        )}
      </div>
      {pod1 && (
        <Fade>
        <div className={styles.homeCL}>
          <h2 className={styles.homeCLTitle}>CREW LEVEL 1(CL1)</h2>
          {/* <p className={styles.homeCLDescp}>
            These are entry-level engineers expected to be able to write modules
            and fix bugs. We expect them to be keen learners and perform well
            under a more senior engineer.
          </p> */}
        </div>
        </Fade>
      )}
      {pod2 && (
        <Fade>
        <div className={styles.homeCL}>
          <h2 className={styles.homeCLTitle}>CREW LEVEL 2(CL2)</h2>
          {/* <p className={styles.homeCLDescp}>
            These are mid-level software engineers. They are expected to own
            features of a given product and are responsible to take these
            features from conception to production. They are expected to review
            peer code, churn out high quality code without supervision and
            communicate effectively.
          </p> */}
        </div>
        </Fade>
      )}
      {pod3 && (
        <Fade>
        <div className={styles.homeCL}>
          <h2 className={styles.homeCLTitle}>CREW LEVEL 3(CL3)</h2>
          {/* <p className={styles.homeCLDescp}>
            These are senior software engineers. They are expected to lead
            entire projects. While they are required to be good programmers,
            they also need to have people management skills. They are tasked
            with ensuring high quality deliverables and adherence to project
            timelines.
          </p> */}
        </div>
        </Fade>
      )}
      {pod4 && (
        <Fade>
        <div className={styles.homeCL}>
          <h2 className={styles.homeCLTitle}>CREW LEVEL 4(CL4)</h2>
          {/* <p className={styles.homeCLDescp}>
            These are experienced software developers with a history of
            excellence throughout their career. CL4 engineers are expected to
            have an impact on scale. They achieve this by working as solutions
            architects, supporting team members, constantly improving team
            processes, writing code/libraries that can be reused by team members
            and solving complex technical problems.
          </p> */}
        </div>
        </Fade>
      )}
    </>
  );
};

export default PodSlider;
