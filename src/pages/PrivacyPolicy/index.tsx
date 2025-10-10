import React from "react";
import styles from "../../styles/local.module.scss"; // use .module.scss for CSS Modules
// import { IMAGES } from "../../lib/assets";

interface PrivacyPolicyProps {
  hideModal: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ hideModal }) => {
  return (
    <div className={styles.contactContainer}>
      {/* Back Arrow */}
   
         <div className={styles.backArrow} onClick={() => hideModal()}>
        ←
      </div>

      {/* Title */}
      <h1 className={styles.title}>PRIVACY POLICY</h1>

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

export default PrivacyPolicy;
