import svgFree from "../assets/icon-free.svg";
import PricingRight from "./PricingRight";
import style from "./Pricing.module.css";

function Pricing() {
  return (
    <div className={style.parent}>
      <img src={svgFree} alt="" />
      <div className={style.box}>
        <h2 className={style.main}>Dip your toe</h2>
        <p className={style.para}>
          {" "}
          Just getting started? No problem at all! Our free plan <br />
          will take you a long way.
        </p>
        <h1 className={style.header}> Free</h1>
        <h4 className={style.text}> Unlimited products</h4>
        <h4 className={style.text}>Basic analytics</h4>
        <h4 className={style.text}> Limited marketplace exposure</h4>
        <h4 className={style.text}> 10% fee per transaction</h4>
      </div>
      <PricingRight />
    </div>
  );
}

export default Pricing;
