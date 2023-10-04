import style from "./Block.module.css";

function Block({ header, text, img }) {
  return (
    <div className={style.container}>
      <div className={style.small}>
        <img src={img} alt="Not Found" />
        <h1>{header}</h1>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
}

export default Block;
