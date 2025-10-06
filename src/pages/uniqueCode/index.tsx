import React, { useState, useEffect } from "react";
import styles from "./uniquecode.module.scss";
import { IMAGES } from "../../lib/assets";
// import lidBg from "../../assets/images/lidCodebg.png";   
// import FindUniqueId from "../../assets/images//Findyouruniquecodeinsidethelid.png";    
// import down from "../../assets/images/ArrowDown.svg";
// import close from "../../assets/images/closeUniqueid.svg";

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

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <div className={styles.uniqueContainer}>
         <div className={styles.CloseButton} onClick={() => hideModal()}>
          <img src={IMAGES.CLOSE_MODAL_BUTTON} alt="CloseModal" />
      </div>
      <div className={styles.uniqueInfo}>
        <div className={styles.uniqueHeader}>
  <div className={styles.uniqueFindImg}>
                <img src={IMAGES.FIND_YOUR_UNIQUE_CODE} alt="FindUniqueId" />
        </div>
          <div className={styles.downArrow}>
                  <img src={IMAGES.ARROW_DOWN} alt="down" />
        </div>
          </div>

  

      
      


        <div className={styles.codeBox}>
          <img src={IMAGES.LID_CODE_BG} alt="Unique Code Example Image" />
          <div className={styles.codeWrapper}>
            <p className={styles.codeText}  onClick={handleCopy} >{uniqueCode} &nbsp;

               <span className={styles.copyIcon} onClick={handleCopy} title="Click to copy">
              {/* Simple copy SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M10 1H2a1 1 0 0 0-1 1v10h1V2h8V1z"/>
                <path d="M4 4h8v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
              </svg>
            </span>
            </p>
           
          </div>
        </div>
      </div>

      {showToast && <div className={styles.topToast}>Copied</div>}
    </div>
  );
};

export default UniqueCode;
