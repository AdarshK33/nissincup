import { lazy, useEffect, useState } from "react";
import styles from "./footer.module.scss";

import { MODAL_TYPES, useGlobalModalContext } from "../../helpers/GlobalModal";
import { IMAGES } from "../../lib/assets";
import PowredByPineLab from "../../components/powredByPineLab";
import Image from "../../components/common/Image";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ProgressBar = lazy(() => import("../ProgressBar"));

const Footer = () => {
  const { showModal } = useGlobalModalContext();
  const { votes, footerAnimation } = useSelector((state: RootState) => state.auth);

  const [animate, setAnimate] = useState(""); // should be string, not boolean

  useEffect(() => {
    if (footerAnimation) {
      // Trigger animation when Redux value changes
      setAnimate(footerAnimation);

      // Remove animation after it finishes (so it can replay next time)
      const timer = setTimeout(() => {
        setAnimate("");
      }, 900); // same duration as CSS animation

      return () => clearTimeout(timer);
    }
  }, [footerAnimation]);

  return (
    <div className={styles.footerSectionMain}>
      <PowredByPineLab />

      <div className={styles.footerBg}>
        {/* CHICKEN SECTION */}
        <div
          className={`${styles.footerSection} ${
            animate === "CHICKEN" ? styles.animate : ""
          }`}
        >
          <div className={styles.Voterimage}>
            <Image src={IMAGES.FOOTER_CHICKEN} alt="Footer Chicken" />
          </div>

          <div className={styles.progressWrapper}>
            <div className={styles.progressBar}>
              <ProgressBar id="CHICKEN"  percentage={votes?.chickenPercentage ?? 0} />
            </div>
            <p className={styles.voteCount}>
              {votes?.chickenVotes ?? 0} &nbsp; VOTES
            </p>
          </div>
        </div>

        {/* EGG SECTION */}
        <div
          className={`${styles.footerSection} ${
            animate === "EGG" ? styles.animate : ""
          }`}
        >
          <div className={styles.Voterimage}>
            <Image src={IMAGES.FOOTER_EGGS} alt="Footer Eggs" />
          </div>

          <div className={styles.progressWrapper}>
            <div className={styles.progressBar}>
              <ProgressBar id="EGG"  percentage={votes?.eggPercentage ?? 0} />
            </div>
            <p className={styles.voteCount}>
              {votes?.eggVotes ?? 0} &nbsp; VOTES
            </p>
          </div>
        </div>

        {/* FOOTER MENU */}
        <div className={styles.footerMenu}>
          <div
            className={styles.term}
            onClick={() => showModal(MODAL_TYPES.TERMS_CONDITIONS)}
          >
            <span>TERMS & CONDITIONS</span>
          </div>
          <div
            className={styles.term}
            onClick={() => showModal(MODAL_TYPES.PRIVACY_POLICY)}
          >
            <span>PRIVACY POLICY</span>
          </div>
          <div
            className={styles.term}
            onClick={() => showModal(MODAL_TYPES.CUSTOMER_SUPPORT)}
          >
            <span>CUSTOMER SUPPORT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
