import React, { lazy } from "react";

import nissin from "./../../assets/images/NissinLogo.svg";
import noodles from "./../../assets/images/CupNoddlesImg.png";

import styles from "./header.module.scss";

const Stripes = lazy(() => import("./stripes"));


const Header: React.FC = () => {
  return (
    <>
      <div className={styles.headerPage}>
        <div className={styles.nissinIcons}>
          {/* Left Stripes */}
          <div className={styles.stripSection}>
            <Stripes rows={2} columns={12} stripeHeight={[2, 0.6]} />
          </div>

          {/* Center Icon */}
          <div className={styles.iconSection}>
            <img
              src={nissin}
              alt="option"
             loading="eager"
              fetchPriority="high" 
                decoding="async"
            />
          </div>

          {/* Right Stripes */}
          <div className={styles.stripSection}>
            <Stripes rows={2} columns={12} stripeHeight={[2, 0.6]} />
          </div>
        </div>
        <div className={styles.cupNoodleIcon}>
          <img
            src={noodles}
            alt="option"
           loading="eager"
              fetchPriority="high" 
                decoding="async"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
