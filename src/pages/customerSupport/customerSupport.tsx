import React from "react";
import "./customer.scss";

interface PrivacyPolicyProps {
  hideModal: () => void;
}

const CustomerSupport: React.FC<PrivacyPolicyProps> = ({ hideModal }) => {
  return (
      <div className="contact-container">
      {/* Back Arrow */}
      <div className="back-arrow" onClick={() => hideModal()}>
        ←
      </div>

      {/* Title */}

      <h1 className="title">CUSTOMER SUPPORT</h1>

      {/* Contact Info */}
      <div className="contact-info">
        <ol>
          <li>
            <strong>Nissin Cup Noodle</strong>
            <ol className="roman">
              <li>COMING SOON...</li>
              <li>
                 ----------------------Thank you----------------------
          
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default  CustomerSupport;
