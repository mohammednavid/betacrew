import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../assets/styles/Carousal.css";
import SwiperCore, { Navigation,Autoplay } from "swiper/core";
import Image from 'next/image'

SwiperCore.use([Pagination, Navigation,Autoplay]);

const Carousal = () => {
    return (
        <div className={styles.carousal__container}>
      <Swiper
        navigation={true}
        loop={true}
      //   autoplay={{
      //     delay: 3000,
      //     disableOnInteraction: true
      // }}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <div className={styles.carousal__slide}>
            <Image src={slide} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <div className={styles.carousal__slide}>
            <Image src={slide} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carousal__slide}>
            <Image src={slide} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carousal__slide}>
            <Image src={slide} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    )
}

export default Carousal
