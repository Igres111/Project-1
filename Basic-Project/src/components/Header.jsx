import svgHeroesLeft from "../assets/illustration-hero-left.svg";
import svgHeroesRight from "../assets/illustration-hero-right.svg";
import svgScroll from "../assets/icon-scroll.svg";
import style from "./Header.module.css";
function Header() {
  return (
    <div className={style.box}>
      <img src={svgHeroesLeft} alt="Not found" />
      <div className={style.innerBox}>
        <h1 className={style.header}>
          {" "}
          Get paid for the work you <span className={style.span}>love</span> to
          do.
        </h1>
        <p className={style.text}>
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you’re looking to escape the rat race or set up a
          side hustle, we’ve got you covered.
        </p>
        <img className={style.scroll} src={svgScroll} alt="Not Found" />
      </div>
      <img src={svgHeroesRight} alt="Not Found" />
    </div>
  );
}

export default Header;
