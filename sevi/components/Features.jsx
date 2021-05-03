import Image from "next/image";
import style from "../styles/Features.module.css";

const Features = () => {
  return (
    <div className={style.features}>
      <section className={style.shapeContainer}>
  <div className={style.wave}></div>
</section>
      <h1 className={style.featuresTitle}>The Sevi App
      <br/>
      <span className={style.featuresDesp}>
        While you are doing your business like no-one else can. We allow you to
        sell your products on credit without the hassle or risk.{" "}
      </span>
      </h1>
      <div className={style.featuresContainer}>
        <div className={style.featuresLeft}>
          <div className={style.featuresLeftContent}>
            <p className={style.contentTitle}>
              Pay in Instalments
              <br />
              <span className={style.contentDesp}>
                Offer your products on credit, without the hassle or risk. We
                send reminders and follow-up on repayments.
              </span>
            </p>
            <Image className={style.contentImg} src="/images/card.svg" alt="" width={118} height={118} />
          </div>
          <div className={style.featuresLeftContent}>
            <p className={style.contentTitle}>
              Get Paid
              <br />
              <span className={style.contentDesp}>
                You get instantly paid part of the sales price right on
                delivery. Final payment on full repayment of instalments.
              </span>
            </p>
            <Image className={style.contentImg} src="/images/usdCard.svg" alt="" width={118} height={118} />
          </div>
        </div>
        <div className={style.featuresCenter}>
          <Image src="/images/mobile2.svg" alt="" width={585} height={700} />
        </div>
        <div className={style.featuresRight}>
          <div className={style.featuresRightContent}>
            <Image className={style.contentImg} src="/images/plugin.svg" alt="" width={118} height={118} />
            <p className={style.contentTitle}>
              WooCommerce plugin
              <br />
              <span className={style.contentDesp}>
                Integrate our plugin in your web shop as payment option for your
                customers at check-out.
              </span>
            </p>
          </div>
          <div className={style.featuresRightContent}>
            <Image src="/images/cart.svg" alt="" width={118} height={118} />
            <p className={style.contentTitle}>
              Webshop template
              <br />
              <span className={style.contentDesp}>
                Don't have a web shop yet? No worries, we provide you with a
                webshop, only load your products and your are good to go.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
