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
      <h1 className="title"> CUSTOMER SUPPORT</h1>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="phone">
          <p>
            <strong>Phone:</strong>{" "}
            <span className="highlight">080-*******477</span>
          </p>
        </div>

        <div className="email">
          <p>
            <strong>Coming Soon:</strong>
          </p>
          <p className="highlight"> ----------------------Thank you-----------------------</p>
          
        </div>
      </div>
    </div>
  );
};

export default  CustomerSupport;
