import React from "react";
import styles from "./uniquecode.module.scss";
import { IMAGES } from "../../lib/assets";
import Image from "../../components/common/Image";

interface UniqueCodeProps {
  hideModal: () => void;
}

const UniqueCode: React.FC<UniqueCodeProps> = ({ hideModal }) => {
  const uniqueCode = "AB1X245YXXXXXXXX";

  return (
    <div className={styles.uniqueContainer}>
      <div className={styles.CloseButton}>
        <Image
          src={IMAGES.CLOSE_MODAL_BUTTON}
          alt="CloseModal"
          onClick={() => hideModal()}
        />
      </div>
      <div className={styles.uniqueInfo}>
        <div className={styles.uniqueHeader}>
          <div className={styles.uniqueFindImg}>
            <Image src={IMAGES.FIND_YOUR_UNIQUE_CODE} alt="FindUniqueId" />
          </div>
          <div className={styles.downArrow}>
            <Image src={IMAGES.ARROW_DOWN} alt="down" />
          </div>
        </div>

        <div className={styles.codeBox}>
          <Image src={IMAGES.LID_CODE_BG} alt="Unique Code Example Image" />

          <div className={styles.codeWrapper}>
            <p className={styles.codeText}>{uniqueCode} &nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueCode;
