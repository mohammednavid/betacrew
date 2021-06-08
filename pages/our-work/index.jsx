import { ourWorkData } from "../../data/ourWorkData.js";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/ourWork.module.css";
import Header from "../../components/Header";
import Hire from "../../components/Hire";
import Footer from "../../components/Footer";

const Work = () => {
  return (
    <>
      <Header />
      <div className={styles.work}>
        <h1 className={styles.workTitle}>
          Recent case studies on <br />
          <span>how we have helped companies</span>
        </h1>
        {ourWorkData?.map((val) => {
          return (
            <div className={styles.workContainer} id={val.id} key={val.id}>
              <div className={styles.workContent}>
                <div className={styles.workDescpContainer}>
                  <h2 className={styles.workName}>{val.firstName}</h2>
                  <p className={styles.workDescp}>{val.firstDescp}</p>
                  <Link href={"/our-work/case-study-1"}>
                    <p className={styles.workView}>VIEW CASE STUDY</p>
                  </Link>
                </div>
                <div className={styles.workDetails}>
                  <div className={styles.workImg}>
                    <Image
                      src={val.firstLogo}
                      alt={val.firstName}
                      width={270}
                      height={100}
                    />
                  </div>
                  <p className={styles.workComment}>"{val.firstComment}"</p>
                  <div className={styles.workDetailsBottom}>
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
              {/* second */}
              <div className={styles.workContent}>
                <div className={styles.workDetails2}>
                  <div className={styles.workImg}>
                    <Image
                      src={val.secondLogo}
                      alt={val.secondName}
                      width={270}
                      height={100}
                    />
                  </div>
                  <p className={styles.workComment}>"{val.secondComment}"</p>
                  <div className={styles.workDetailsBottom}>
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
                <div className={styles.workDescpContainer2}>
                  <h2 className={styles.workName}>{val.secondName}</h2>
                  <p className={styles.workDescp}>{val.secondDescp}</p>
                  <Link
                    href={"/our-work/case-study-2"}
                  >
                    <p className={styles.workView}>VIEW CASE STUDY</p>
                  </Link>
                </div>
              </div>
              {/* third */}
              <div className={styles.workContent}>
                <div className={styles.workDescpContainer}>
                  <h2 className={styles.workName}>{val.thirdName}</h2>
                  <p className={styles.workDescp}>{val.thirdDescp}</p>
                  <Link href={"/our-work/case-study-3"}>
                    <p className={styles.workView}>VIEW CASE STUDY</p>
                  </Link>
                </div>
                <div className={styles.workDetails3}>
                  <div className={styles.workImg}>
                    <Image
                      src={val.thirdLogo}
                      alt={val.thirdName}
                      width={270}
                      height={100}
                    />
                  </div>
                  <p className={styles.workComment}>"{val.thirdComment}"</p>
                  <div className={styles.workDetailsBottom}>
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
            </div>
          );
        })}
        <Hire />
      </div>
      <Footer />
    </>
  );
};

export default Work;
