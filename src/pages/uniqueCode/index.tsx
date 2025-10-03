import React, { useState, useEffect } from "react";
import styles from "./uniquecode.module.scss";
import lidBg from "../../assets/images/lidCodebg.png";    

interface UniqueCodeProps {
  hideModal: () => void;
}

const UniqueCode: React.FC<UniqueCodeProps> = ({ hideModal }) => {
  const uniqueCode = "ADSAFSFFGBV2R3243E$";
  const [showToast, setShowToast] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(uniqueCode).then(() => {
      setShowToast(true);

      const id = setTimeout(() => {
        setShowToast(false);
        hideModal();
      }, 1200);

      setTimeoutId(id);
    });
  };

  // Clear timeout if component unmounts before toast disappears
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <h2>
          FIND YOUR UNIQUE CODE <br /> INSIDE THE LID
        </h2>
        <div className={styles.codeBox}>
          <img src={lidBg} alt="Unique Code Example Image" />
          <p 
            className={styles.codeText} 
            onClick={handleCopy} 
            style={{ cursor: "pointer" }}
            title="Click to copy"
          >
            {uniqueCode}
          </p>
        </div>
      </div>

      {/* iOS-style top toast */}
      {showToast && (
        <div className={styles.topToast}>Copied</div>
      )}
    </div>
  );
};

export default UniqueCode;
