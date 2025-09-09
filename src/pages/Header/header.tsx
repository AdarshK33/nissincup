import React from "react";

import nissin from "./../../assets/images/Nissin Logo 1.svg";
import noodles from "./../../assets/images/Cup Noodles 1.svg";

import styles from "./header.module.scss";
import Stripes from "./stripes";

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
              {...({
                fetchpriority: "high",
              } as React.ImgHTMLAttributes<HTMLImageElement>)}
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
            {...({
              fetchpriority: "high",
            } as React.ImgHTMLAttributes<HTMLImageElement>)}
            decoding="async"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
