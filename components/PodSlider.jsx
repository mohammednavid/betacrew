import { useEffect, useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "../styles/PodSlider.module.css";
import Image from "next/image";

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
    }else if (pod2) {
      setPod2(false) || setPod3(true);
    }else if (pod3) {
      setPod3(false) || setPod4(true);
    }else if (pod4) {
      setPod4(false) || setPod1(true);
    }
  };

  const Prev = () => {
    if (pod1) {
      setPod1(false) || setPod4(true);
    }else if (pod4) {
      setPod4(false) || setPod3(true);
    }else if (pod3) {
      setPod3(false) || setPod2(true);
    }else if (pod2) {
      setPod2(false) || setPod1(true);
    }
  };

  return (
    <div className={styles.podSlider}>
      {/* <div className={styles.podSliderContainer}> */}
      {/* <Slider {...settings}> */}
      <a className={styles.next} onClick={Prev}>
        {" "}
        <Image src="/images/prev.svg" width={50} height={50} />
      </a>
      <a className={styles.prev} onClick={Next}>
        <Image src="/images/next.svg" width={50} height={50} />
      </a>
      <div className={styles.fixed}>
        <Image src="/images/ourPod.svg" width={300} height={150} />
        </div>
      {pod1 && (
        <div ref={pod} className={styles.podSlide}>
          <Player
            ref={podVector1}
            hover
            autoplay={true}
            loop={false}
            src="/illustration/pod1.json"
          ></Player>
        </div>
      )}
      {pod2 && (
        <div ref={pod} className={styles.podSlide}>
          <Player
            ref={podVector2}
            hover
            autoplay={true}
            loop={false}
            src="/illustration/pod2.json"
          ></Player>
        </div>
      )}
      {pod3 && (
        <div ref={pod} className={styles.podSlide}>
          <Player
            ref={podVector3}
            hover
            autoplay={true}
            loop={false}
            src="/illustration/pod3.json"
          ></Player>
        </div>
      )}
      {pod4 && (
        <div ref={pod} className={styles.podSlide}>
          <Player
            ref={podVector4}
            hover
            autoplay={true}
            loop={false}
            src="/illustration/pod4.json"
          ></Player>
        </div>
      )}
      {/* </Slider> */}
      {/* </div> */}
    </div>
  );
};

export default PodSlider;
