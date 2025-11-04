import { lazy, useEffect, useState } from "react";
import styles from "./footer.module.scss";

import { MODAL_TYPES, useGlobalModalContext } from "../../helpers/GlobalModal";

import { IMAGES } from "../../lib/assets";

import PowredByPineLab from "../../components/powredByPineLab";
import Image from "../../components/common/Image";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useAppDispatch } from "../../store/hooks";
import { clearHighlightTab } from "../../store/slices/authSlice";

const ProgressBar = lazy(() => import("../ProgressBar"));

const Footer = () => {
    // const navigate = useNavigate();
   const dispatch = useAppDispatch();
  const { showModal } = useGlobalModalContext();

  const { votes,highlightTab } = useSelector((state: RootState) => state.auth);
    const [animateSection, setAnimateSection] = useState("");

  useEffect(() => {
    if (highlightTab) {
      setAnimateSection(highlightTab);
      const timer = setTimeout(() => {
        setAnimateSection("");
        dispatch(clearHighlightTab());
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [highlightTab, dispatch]);

  return (
    <>
      <div className={styles.footerSectionMain}>
        <PowredByPineLab /> 
        {/* // Powered by Pine Labs */}
        <div className={styles.footerBg}>
          <div className={`${styles.footerSection} ${
            animateSection === "CHICKEN" ? styles.highlight : ""
          }`}>
          <div className={styles.Voterimage}>
            <Image src={IMAGES.FOOTER_CHICKEN} alt="Chicken Eggs" />
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
         <div    className={`${styles.footerSection} ${
            animateSection === "EGG" ? styles.highlight : ""
          }`}
         >
          <div className={styles.Voterimage}>
            <Image src={IMAGES.FOOTER_EGGS} alt="Footer Eggs" />
          </div>

          <div className={styles.progressWrapper}>
            <div className={styles.progressBar}>
              <ProgressBar percentage={votes?.eggPercentage ?? 0} />
            </div>
            <p className={styles.voteCount}>
              {/* <Counter targetValue={votes?.chickenVotes ?? 0} /> */}
              {votes?.eggVotes ?? 0}
              &nbsp; VOTES
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
      </div>
    </>
  );
};

export default Footer;
