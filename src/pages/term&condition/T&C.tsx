import React from "react";
import "./T&C.scss";
// import { useNavigate } from "react-router-dom";

interface TermsConditionsPopupProps {
  hideModal: () => void;
}

const TermsConditionsPopup: React.FC<TermsConditionsPopupProps> = ({
  hideModal,
}) => {
  return (
    <div className="contact-container">
      {/* Back Arrow */}
      <div className="back-arrow" onClick={() => hideModal()}>
        ←
      </div>

      {/* Title */}

      <h1 className="title">TERMS & CONDITIONS</h1>

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

export default TermsConditionsPopup;
