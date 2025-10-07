import React, { useState, useEffect } from "react";
import styles from "./uniquecode.module.scss";
import { IMAGES } from "../../lib/assets";
import CommonImage from "../../components/common/Image";

interface UniqueCodeProps {
  hideModal: () => void;
}

const UniqueCode: React.FC<UniqueCodeProps> = ({ hideModal }) => {
  const uniqueCode = "ADSAFSFFGBV2R3243E$";


  return (
    <div className={styles.uniqueContainer}>
      <div className={styles.CloseButton}>
        <CommonImage
          src={IMAGES.CLOSE_MODAL_BUTTON}
          alt="CloseModal"
          onClick={() => hideModal()}
        />
      </div>
      <div className={styles.uniqueInfo}>
        <div className={styles.uniqueHeader}>
          <div className={styles.uniqueFindImg}>
            <CommonImage
              src={IMAGES.FIND_YOUR_UNIQUE_CODE}
              alt="FindUniqueId"
            />
          </div>
          <div className={styles.downArrow}>
            <CommonImage src={IMAGES.ARROW_DOWN} alt="down" />
          </div>
        </div>

        <div className={styles.codeBox}>
          <CommonImage
            src={IMAGES.LID_CODE_BG}
            alt="Unique Code Example Image"
          />

          <div className={styles.codeWrapper}>
            <p className={styles.codeText}>
              {uniqueCode} &nbsp;
             
            </p>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default UniqueCode;
