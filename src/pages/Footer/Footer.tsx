import styles from "./footer.module.scss";
import CE from "./../../assets/images/ChickenEgg.svg";
import EC from "./../../assets/images/EggnChicken.svg";
import ProgressBar from "../ProgressBar/progressBar";
import { MODAL_TYPES, useGlobalModalContext } from "../../helpers/GlobalModal";
import { store } from "../../store/store";

const Footer = () => {
  const { showModal } = useGlobalModalContext();
    const state = store.getState();
  const { votes } = state.auth;
  const openModal = (type: string, props: any = {}) => {
    showModal(type, props, () => {
      console.log(`${type} modal closed ✅`);
    });
  };



  return (
    <>
      <div className={styles.footerPage}>
        <div className={styles.footerSection}>
          <div className={styles.Voterimage}>
            <img
              src={CE}
              alt="Chicken Eggs"
              {...({
                fetchpriority: "high",
              } as React.ImgHTMLAttributes<HTMLImageElement>)}
              decoding="async"
            />
          </div>

          <div className={styles.progressWrapper}>
            <div className={styles.progressBar}>
              <ProgressBar percentage={votes?.chickenPercentage??0} />
            </div>
            <p className={styles.voteCount}>{votes?.chickenVotes??0} votes</p>
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.Voterimage}>
            <img
              src={EC}
              alt=" Eggs Chicken"
              {...({
                fetchpriority: "high",
              } as React.ImgHTMLAttributes<HTMLImageElement>)}
              decoding="async"
            />
          </div>
          <div className={styles.progressWrapper}>
            <div className={styles.progressBar}>
              <ProgressBar percentage={votes?.eggPercentage??0} />
            </div>
            <p className={styles.voteCount}>{votes?.eggVotes??0} votes</p>
          </div>
        </div>
        <div className={styles.footerMenu}>
          <div className={styles.term}>
            <span
              onClick={() => {
                openModal(MODAL_TYPES.TERMS_CONDITIONS);
              }}
            >
              Terms & Conditions
            </span>
          </div>
          <div className={styles.term}>
            <span
              onClick={() => {
                openModal(MODAL_TYPES.PRIVACY_POLICY);
              }}
            >
              privacy Policy
            </span>
          </div>
          <div className={styles.term}>
            <span>customer support</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
