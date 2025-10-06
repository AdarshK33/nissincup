
import React from "react";
import styles from "./privacyPolicy.module.scss"; // use .module.scss for CSS Modules
import { IMAGES } from "../../lib/assets";

interface PrivacyPolicyProps {
  hideModal: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({
  hideModal,
}) => {
  return (
    <div className={styles.contactContainer}>
      {/* Back Arrow */}
        <div className={styles.CloseButton} onClick={() => hideModal()}>
          <img src={IMAGES.CLOSE_MODAL_BUTTON} alt="CloseModal"   loading="eager"
            // @ts-expect-error React types don’t yet include lowercase fetchpriority
  fetchpriority="high"
  decoding="async"/>
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
