import React, { useMemo } from "react";
import styles from "./CommonBase.module.scss";

import { useLocation } from "react-router-dom";

// const Header = lazy(() => import("../../pages/Header/header"));
// const Footer = lazy(() => import("../../pages/Footer/Footer"));
import { ROUTES } from "../../lib/consts";
import { IMAGES } from "../../lib/assets";

import Header from "../../pages/Header";
import Footer from "../../pages/Footer";
import Image from "./Image";

type Props = {
  children: React.ReactNode;
};
const CommonBase = ({ children }: Props) => {
  const location = useLocation();

  const renderImage = useMemo(() => {
    switch (location.pathname) {
      case ROUTES.VOTE:
        return <Image src={IMAGES.COMMON_WCF} alt="WCF" />;

      case ROUTES.CYC:
        return <Image src={IMAGES.COMMON_WCF} alt="WCF" />;

      default:
        return <Image src={IMAGES.CYC} alt="CYC" />;
    }
  }, [location.pathname]);

  return (
    <>
      <div className={styles.commonSection}>
        <Header></Header>

        <div className={styles.myCommon}>
          <div
            className={`${location.pathname == ROUTES.CYC || location.pathname == ROUTES.VOTE ? styles.commonCYCHeader : styles.commonHeader}`}
          >
            <div
              className={`${location.pathname == ROUTES.CYC || location.pathname == ROUTES.VOTE ? styles.arrowDown : styles.commonArrowDown}`}
            >
              <Image src={IMAGES.ARROW_DOWN} alt="DownArrow" />
            </div>
            <div className={styles.headerImage}>{renderImage}</div>
          </div>
        </div>
        <div className={styles.commonSubHeader}>{children}</div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default CommonBase;
