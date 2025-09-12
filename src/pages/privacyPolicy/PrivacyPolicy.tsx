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

      <h1 className="title">PRIVACY POLICY</h1>

      {/* Contact Info */}
      <div className="contact-info">
        <ol>
          <li>
            <strong>Nissin Cup Noodle</strong>
            <ol className="roman">
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
