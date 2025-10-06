import React from "react";
import styles from "./customer.module.scss"; // use module for scoped styles
import { IMAGES } from "../../lib/assets";

interface CustomerSupportProps {
  hideModal: () => void;
}

const CustomerSupport: React.FC<CustomerSupportProps> = ({ hideModal }) => {
  return (
    <div className={styles.contactContainer}>
      {/* Back Arrow */}
       <div className={styles.CloseButton} onClick={() => hideModal()}>
          <img src={IMAGES.CLOSE_MODAL_BUTTON} alt="CloseModal"
            loading="eager"
            // @ts-expect-error React types don’t yet include lowercase fetchpriority
  fetchpriority="high"
  decoding="async"
          />
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
