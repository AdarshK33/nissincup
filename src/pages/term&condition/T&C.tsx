import React from "react";
import styles from "../../styles/global.module.scss";  // use .module.scss for CSS Modules
// import { IMAGES } from "../../lib/assets";
// import CommonImage from "../../components/common/Image";

interface TermsConditionsProps {
  hideModal: () => void;
}

const TermsConditions: React.FC<TermsConditionsProps> = ({ hideModal }) => {
  return (
    <div className={styles.contactContainer}>
      {/* Back Arrow */}
      {/* <div className={styles.CloseButton}>
        <CommonImage
          src={IMAGES.CLOSE_MODAL_BUTTON}
          alt="CloseModal"
          onClick={() => hideModal()}
        />
      </div> */}
         <div className={styles.backArrow} onClick={() => hideModal()}>
        ←
      </div>

      {/* Title */}
      <h1 className={styles.title}>TERMS & CONDITIONS</h1>

      {/* Contact Info */}
      <div className={styles.contactInfo}>
        <ol>
          <li>
            <strong>Nissin Cup Noodle</strong>
            <ol className={styles.roman}>
              <li>COMING SOON...</li>
              <li>----------------------Thank you----------------------</li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TermsConditions;
