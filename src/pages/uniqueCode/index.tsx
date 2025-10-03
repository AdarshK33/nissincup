import React from "react";
import styles from "./uniquecode.module.scss";
import lidBg from "../../assets/images/lidCodebg.png";    

interface UniqueCodeProps {
  hideModal: () => void;
}

const UniqueCode: React.FC<UniqueCodeProps> = ({ hideModal }) => {
  const uniqueCode = "ADSAFSFFGBV2R3243E$";

  const handleCopy = () => {
    navigator.clipboard.writeText(uniqueCode).then(() => {
    hideModal()
    }).catch((err) => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <div className={styles.contactContainer}>
      {/* Back Arrow */}
      {/* <div className={styles.backArrow} onClick={() => hideModal()}>
        ←
      </div> */}

      {/* Title */}
      {/* <h1 className={styles.title}></h1> */}

      {/* Contact Info */}
      <div className={styles.contactInfo}>
        <h2>
          FIND YOUR UNIQUE CODE <br /> INSIDE THE LID
        </h2>
        <div className={styles.codeBox}>
          <img src={lidBg} alt="Unique Code Example Image" />
          
          {/* Make text copyable */}
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
    </div>
  );
};

export default UniqueCode;
