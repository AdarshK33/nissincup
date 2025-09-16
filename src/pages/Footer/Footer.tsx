import styles from "./footer.module.scss";
import CE from "./../../assets/images/ChickenEgg.svg";
import EC from "./../../assets/images/EggnChicken.svg";
import ProgressBar from "../ProgressBar/progressBar";
import { MODAL_TYPES, useGlobalModalContext } from "../../helpers/GlobalModal";
import { RootState } from "../../store/store";
// import Counter from "../Counter";
import { useSelector } from "react-redux";

const Footer = () => {
  const { showModal } = useGlobalModalContext();

  const { votes } = useSelector((state: RootState) => state.auth);

  const openModal = (type: string, props: any = {}) => {
    showModal(type, props, () => {
      // console.log(`${type} modal closed ✅`);
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
              <ProgressBar percentage={votes?.chickenPercentage ?? 0} />
            </div>
            <p className={styles.voteCount}>
              {/* <Counter targetValue={votes?.chickenVotes ?? 0} /> */}
              {votes?.chickenVotes ?? 0} 
              &nbsp; votes
            </p>
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
              <ProgressBar percentage={votes?.eggPercentage ?? 0} />
            </div>
            <p className={styles.voteCount}>
              {/* <Counter targetValue={votes?.eggVotes ?? 0} /> */}
          {votes?.eggVotes ?? 0}    &nbsp; votes
            </p>
          </div>
        </div>
        <div className={styles.footerMenu}>
          <div
            className={styles.term}
            onClick={() => {
              openModal(MODAL_TYPES.TERMS_CONDITIONS);
            }}
          >
            <span>Terms & Conditions</span>
          </div>
          <div
            className={styles.term}
            onClick={() => {
              openModal(MODAL_TYPES.PRIVACY_POLICY);
            }}
          >
            <span>privacy Policy</span>
          </div>
          <div
            className={styles.term}
            onClick={() => {
              openModal(MODAL_TYPES.CUSTOMER_SUPPORT);
            }}
          >
            <span>customer support</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
