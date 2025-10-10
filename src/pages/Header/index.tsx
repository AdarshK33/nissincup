import React, { lazy } from "react";

import styles from "./header.module.scss";
import { IMAGES } from "../../lib/assets";
import Image from "../../components/common/Image";

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
            <Image src={IMAGES.NISSIN_LOGO} alt="LOGO" />
          </div>

          {/* Right Stripes */}
          <div className={styles.stripSection}>
            <Stripes rows={2} columns={12} stripeHeight={[2, 0.6]} />
          </div>
        </div>
        <div className={styles.cupNoodleIcon}>
          <Image src={IMAGES.CUP_NOODLES} alt="CN" />
        </div>
      </div>
    </>
  );
};

export default Header;
