import logoSvg from "../assets/logo.svg";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <div className={styles.main}>
      <img src={logoSvg} alt="Error" />
    </div>
  );
}

export default Logo;
