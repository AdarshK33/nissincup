import React, { lazy } from "react";

import styles from "./header.module.scss";
import { IMAGES } from "../../lib/assets";

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
              src={IMAGES.NISSIN_LOGO}
              alt="option"
              loading="eager"
            // @ts-expect-error React types don’t yet include lowercase fetchpriority
  fetchpriority="high"
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
            src={IMAGES.CUP_NOODLES}
            alt="option"
           loading="eager"
            // @ts-expect-error React types don’t yet include lowercase fetchpriority
  fetchpriority="high"
  decoding="async"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
