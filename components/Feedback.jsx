import { homeFeedback } from "../data/homeData";
import styles from "../styles/Feedback.module.css";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Autoplay } from "swiper/core";

SwiperCore.use([Autoplay]);

const Feedback = () => {
  return (
    <>
    <div className={styles.desktop}>
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        autoplay={{delay:3000}}
        loop={true}
        className="mySwiper"
        style={{ marginBottom: "5%" }}
      >
        <SwiperSlide>
          <div className={styles.caseStudyPersonContainer}>
            {homeFeedback?.map((val) => {
              return (
                <div
                  className={styles.caseStudyPerson}
                  key={val.firstFeedbackCompany}
                >
                    <div className={styles.caseStudyPersonImg}>
                      <Image
                        src={val.firstFeedbackImage}
                        alt={val.firstFeedbackCompany}
                        width={160}
                        height={160}
                      />
                    </div>
                  <div className={styles.caseStudyPersonThought}>
                      <h2 className={styles.caseStudyPersonHeader}>
                        {val.firstFeedbackCompany}
                      </h2>
                      <div className={styles.caseStudyPersonLine}></div>
                      <p className={styles.caseStudyPersonWords}>
                        "{val.firstFeedbackDescp}"
                      </p>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.caseStudyPersonContainer}>
            {homeFeedback?.map((val) => {
              return (
                <div
                  className={styles.caseStudyPerson}
                  key={val.secondFeedbackCompany}
                >
                    <div className={styles.caseStudyPersonImg}>
                      <Image
                        src={val.secondFeedbackImage}
                        alt={val.secondFeedbackCompany}
                        width={160}
                        height={160}
                      />
                    </div>
                  <div className={styles.caseStudyPersonThought}>
                      <h2 className={styles.caseStudyPersonHeader}>
                        {val.secondFeedbackCompany}
                      </h2>
                      <div className={styles.caseStudyPersonLine}></div>
                      <p className={styles.caseStudyPersonWords}>
                        "{val.secondFeedbackDescp}"
                      </p>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className={styles.caseStudyPersonContainer}>
            {homeFeedback?.map((val) => {
              return (
                <div
                  className={styles.caseStudyPerson}
                  key={val.thirdFeedbackCompany}
                >
                    <div className={styles.caseStudyPersonImg}>
                      <Image
                        src={val.thirdFeedbackImage}
                        alt={val.thirdFeedbackCompany}
                        width={160}
                        height={160}
                      />
                    </div>
                  <div className={styles.caseStudyPersonThought}>
                      <h2 className={styles.caseStudyPersonHeader}>
                        {val.thirdFeedbackCompany}
                      </h2>
                      <div className={styles.caseStudyPersonLine}></div>
                      <p className={styles.caseStudyPersonWords}>
                        "{val.thirdFeedbackDescp}"
                      </p>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className={styles.caseStudyPersonContainer}>
            {homeFeedback?.map((val) => {
              return (
                <div
                  className={styles.caseStudyPerson}
                  key={val.fourthFeedbackCompany}
                >
                    <div className={styles.caseStudyPersonImg}>
                      <Image
                        src={val.fourthFeedbackImage}
                        alt={val.fourthFeedbackCompany}
                        width={160}
                        height={160}
                      />
                    </div>
                  <div className={styles.caseStudyPersonThought}>
                      <h2 className={styles.caseStudyPersonHeader}>
                        {val.fourthFeedbackCompany}
                      </h2>
                      <div className={styles.caseStudyPersonLine}></div>
                      <p className={styles.caseStudyPersonWords}>
                        "{val.fourthFeedbackDescp}"
                      </p>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    <div className={styles.mobile}>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{delay:3000}}
        loop={true}
        className="mySwiper"
        style={{ marginBottom: "5%" }}
      >
        <SwiperSlide>
          <div className={styles.caseStudyPersonContainer}>
            {homeFeedback?.map((val) => {
              return (
                <div
                  className={styles.caseStudyPerson}
                  key={val.firstFeedbackCompany}
                >
                    <div className={styles.caseStudyPersonImg}>
                      <Image
                        src={val.firstFeedbackImage}
                        alt={val.firstFeedbackCompany}
                        width={160}
                        height={160}
                      />
                    </div>
                  <div className={styles.caseStudyPersonThought}>
                      <h2 className={styles.caseStudyPersonHeader}>
                        {val.firstFeedbackCompany}
                      </h2>
                      <div className={styles.caseStudyPersonLine}></div>
                      <p className={styles.caseStudyPersonWords}>
                        "{val.firstFeedbackDescp}"
                      </p>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.caseStudyPersonContainer}>
            {homeFeedback?.map((val) => {
              return (
                <div
                  className={styles.caseStudyPerson}
                  key={val.secondFeedbackCompany}
                >
                    <div className={styles.caseStudyPersonImg}>
                      <Image
                        src={val.secondFeedbackImage}
                        alt={val.secondFeedbackCompany}
                        width={160}
                        height={160}
                      />
                    </div>
                  <div className={styles.caseStudyPersonThought}>
                      <h2 className={styles.caseStudyPersonHeader}>
                        {val.secondFeedbackCompany}
                      </h2>
                      <div className={styles.caseStudyPersonLine}></div>
                      <p className={styles.caseStudyPersonWords}>
                        "{val.secondFeedbackDescp}"
                      </p>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className={styles.caseStudyPersonContainer}>
            {homeFeedback?.map((val) => {
              return (
                <div
                  className={styles.caseStudyPerson}
                  key={val.thirdFeedbackCompany}
                >
                    <div className={styles.caseStudyPersonImg}>
                      <Image
                        src={val.thirdFeedbackImage}
                        alt={val.thirdFeedbackCompany}
                        width={160}
                        height={160}
                      />
                    </div>
                  <div className={styles.caseStudyPersonThought}>
                      <h2 className={styles.caseStudyPersonHeader}>
                        {val.thirdFeedbackCompany}
                      </h2>
                      <div className={styles.caseStudyPersonLine}></div>
                      <p className={styles.caseStudyPersonWords}>
                        "{val.thirdFeedbackDescp}"
                      </p>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className={styles.caseStudyPersonContainer}>
            {homeFeedback?.map((val) => {
              return (
                <div
                  className={styles.caseStudyPerson}
                  key={val.fourthFeedbackCompany}
                >
                    <div className={styles.caseStudyPersonImg}>
                      <Image
                        src={val.fourthFeedbackImage}
                        alt={val.fourthFeedbackCompany}
                        width={160}
                        height={160}
                      />
                    </div>
                  <div className={styles.caseStudyPersonThought}>
                      <h2 className={styles.caseStudyPersonHeader}>
                        {val.fourthFeedbackCompany}
                      </h2>
                      <div className={styles.caseStudyPersonLine}></div>
                      <p className={styles.caseStudyPersonWords}>
                        "{val.fourthFeedbackDescp}"
                      </p>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};

export default Feedback;
