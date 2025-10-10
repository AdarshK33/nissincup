import React from "react";
import styles from "../../styles/local.module.scss"; // use module for scoped styles
// import { IMAGES } from "../../lib/assets";

interface CustomerSupportProps {
  hideModal: () => void;
}

const CustomerSupport: React.FC<CustomerSupportProps> = ({ hideModal }) => {
  return (
    <div className={styles.contactContainer}>
      {/* Back Arrow */}

      <div className={styles.backArrow} onClick={() => hideModal()}>
        ←
      </div>

      {/* Title */}
      <h1 className={styles.title}>CUSTOMER SUPPORT</h1>

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

export default CustomerSupport;
