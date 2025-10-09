import React, {  useMemo } from "react";
import styles from "./CommonBase.module.scss";

import { useLocation } from "react-router-dom";

// const Header = lazy(() => import("../../pages/Header/header"));
// const Footer = lazy(() => import("../../pages/Footer/Footer"));
import { ROUTES } from "../../lib/consts";
import { IMAGES } from "../../lib/assets";
import CommonImage from "./Image";
import Header from "../../pages/Header/header";
import Footer from "../../pages/Footer/Footer";

type Props = {
  children: React.ReactNode;
};
const CommonBase = ({ children }: Props) => {
  const location = useLocation();

  const renderImage = useMemo(() => {
    switch (location.pathname) {
      case ROUTES.HOME:
          case  ROUTES.CYC:
  case ROUTES.ThankYou:
        return <CommonImage src={IMAGES.COMMON_WCF} alt="WCF" />;

      case ROUTES.REGISTRATION:
      case ROUTES.VERIFYOTP:
      case ROUTES.CASHBACK:
        return <CommonImage src={IMAGES.CYC} alt="cyc" />;
      case ROUTES.ThankYouParticipation:
        return (
          <CommonImage
            src={IMAGES.YOUR_CASHBACK_IS_ON_THE_WAY}
            alt="ThankYouParticipation"
          />
        );
      default:
        return <CommonImage src={IMAGES.COMMON_WCF} alt="WCF" />;
    }
  }, [location.pathname]);

  return (
    <>
      <div className={styles.commonSection}>
        <Header></Header>

        <div className={styles.myCommon}>
          <div
            className={`${location.pathname == ROUTES.CYC||location.pathname === ROUTES.HOME||location.pathname == ROUTES.ThankYou? styles.commonCycHeader : styles.commonHeader}`}
          >
            <div className={styles.arrowDown}>
              <CommonImage src={IMAGES.ARROW_DOWN} alt="DownArrow" />
            </div>
            <div className={styles.headerImage}>{renderImage}</div>
          </div>
        </div>
        <div className={styles.commonSubHeader}>{children}

        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default CommonBase;
