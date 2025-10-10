import { lazy } from "react";
import styles from "./footer.module.scss";

import { MODAL_TYPES, useGlobalModalContext } from "../../helpers/GlobalModal";

import { IMAGES } from "../../lib/assets";

import PowredByPineLab from "../../components/powredByPineLab";
import Image from "../../components/common/Image";

// const Counter= lazy(() => import("../Counter"));
const ProgressBar = lazy(() => import("../ProgressBar"));

const Footer = () => {
  const { showModal } = useGlobalModalContext();

  return (
    <>
      <div className={styles.footerSectionMain}>
        <PowredByPineLab />
        <div className={styles.footerBg}>
          <div className={styles.footerSection}>
            <div className={styles.Voterimage}>
              <Image src={IMAGES.FOOTER_CHICKEN} alt="Chicken Eggs" />
            </div>
            <div className={styles.Voterimage}>
              <Image src={IMAGES.FOOTER_EGGS} alt=" Eggs Chicken" />
            </div>
          </div>
          <div className={styles.progressBarSection}>
            <ProgressBar />
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
      </div>
    </>
  );
};

export default Footer;
