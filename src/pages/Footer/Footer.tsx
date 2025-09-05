import styles from "./footer.module.scss"
import CE from "./../../assets/images/ChickenEgg.svg";
import EC from "./../../assets/images/EggnChicken.svg";
import ProgressBar from "../ProgressBar/progressBar";
import { MODAL_TYPES, useGlobalModalContext } from "../../helpers/GlobalModal";

const Footer = () => {

  // const { showModal } = useGlobalModalContext();
  //   const openModal = (type: string, props: any = {}) => {
  //   showModal(type, props, () => {
  //     console.log(`${type} modal closed ✅`);
  //   });
  // };

  return (
    <>
     <div className={styles.footerPage}>
      <div className={styles.footerSection}>
        <div className={styles.CEimage}>
            <img
                src={ CE } 
                alt="Chicken Eggs"
            />
        </div>
       {/* <div className={styles.progressBar}>
        <ProgressBar  percentage={67}/>
        </div> */}
          <div className={styles.progressWrapper}>
      <div className={styles.progressBar}>
        <ProgressBar  percentage={80}/>
      </div>
      <p className={styles.voteCount}>2022 votes</p>
    </div>
      </div>
        <div className={styles.footerSection}>
        <div className={styles.CEimage}>
            <img
                src={ EC } 
                alt=" Eggs Chicken"
            />
        </div>
         <div className={styles.progressWrapper}>
      <div className={styles.progressBar}>
        <ProgressBar  percentage={99}/>
      </div>
      <p className={styles.voteCount}>1100 votes</p>
    </div>
      </div>
      <div className={styles.footerMenu}>
<div className={styles.term}>
<span  >
    Terms & Conditions
</span>
</div>
<div className={styles.term}>
    <span>
        privacy Policy
    </span>
</div>
<div className={styles.term}>
      <span>
     customer support
    </span>
</div>

      </div>
     </div>
    </>
  );
};

export default Footer;
