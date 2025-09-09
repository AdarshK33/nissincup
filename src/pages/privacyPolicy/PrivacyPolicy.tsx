import React from "react";
import "./PrivacyPolicy.scss";

interface PrivacyPolicyProps {
  hideModal: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ hideModal }) => {
  return (
    <div className="contact-container">
      {/* Back Arrow */}
      <div className="back-arrow" onClick={() => hideModal()}>
        ←
      </div>

      {/* Title */}
      <h1 className="title">PRIVACY POLOCY</h1>

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
            <strong>Support Email:</strong>
          </p>
          <p className="highlight">xxxxxxxxxxxxxxxx@xxxx</p>
          <p>
            You’re eligible to claim cashback. Use your unique code to redeem
            now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
