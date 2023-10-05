import style from "./Text.module.css";

function Text() {
  return (
    <div className={style.box}>
      <h1 className={style.head}>Our pricing plans</h1>
      <p className={style.par}>
        We only make money when our creators make money. <br />
        Our plans are always affordable, and it’s completely free to get
        started.
      </p>
    </div>
  );
}

export default Text;
