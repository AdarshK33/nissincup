import { useSelector } from "react-redux";
import { lazy } from "react";
import styles from "./footer.module.scss";

import { MODAL_TYPES, useGlobalModalContext } from "../../helpers/GlobalModal";
import { RootState } from "../../store/store";
import { IMAGES } from "../../lib/assets";
import CommonImage from "../../components/common/Image";

// const Counter= lazy(() => import("../Counter"));
const ProgressBar = lazy(() => import("../ProgressBar/progressBar"));

const Footer = () => {
  const { showModal } = useGlobalModalContext();

  const { votes } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <div className={styles.footerPage}>
        <div className={styles.footerSection}>
          <div className={styles.Voterimage}>
            <CommonImage src={IMAGES.FOOTER_CHICKEN} alt="Chicken Eggs" />
          </div>

          <div className={styles.progressWrapper}>
            <div className={styles.progressBar}>
              <ProgressBar percentage={votes?.chickenPercentage ?? 0} />
            </div>
            <p className={styles.voteCount}>
              {/* <Counter targetValue={votes?.chickenVotes ?? 0} /> */}
              {votes?.chickenVotes ?? 0}
              &nbsp; VOTES
            </p>
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.Voterimage}>
            <CommonImage src={IMAGES.FOOTER_EGGS} alt=" Eggs Chicken" />
          </div>
          <div className={styles.progressWrapper}>
            <div className={styles.progressBar}>
              <ProgressBar percentage={votes?.eggPercentage ?? 0} />
            </div>
            <p className={styles.voteCount}>
              {/* <Counter targetValue={votes?.eggVotes ?? 0} /> */}
              {votes?.eggVotes ?? 0} &nbsp; VOTES
            </p>
          </div>
        </div>
        <div className={styles.footerMenu}>
          <div
            className={styles.term}
            onClick={() => {
              showModal(MODAL_TYPES.TERMS_CONDITIONS);
            }}
          >
            <span>TERMS & CONDITIONS</span>
          </div>
          <div
            className={styles.term}
            onClick={() => {
              showModal(MODAL_TYPES.PRIVACY_POLICY);
            }}
          >
            <span>PRIVACY POLICY</span>
          </div>
          <div
            className={styles.term}
            onClick={() => {
              showModal(MODAL_TYPES.CUSTOMER_SUPPORT);
            }}
          >
            <span>CUSTOMER SUPPORT</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
