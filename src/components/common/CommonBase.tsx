
import React, { lazy, useMemo } from "react";
import styles from "./CommonBase.module.scss";
import DownArrow from "./../../assets/images/ArrowDown.svg";

// import WCF from "./../../assets/images/webP/WCf.webp";
// import cyc from "./../../assets/images/webP/Claim your Cashback 1.webp";
// import last from "./../../assets/images/webP/Your Cashback is on the way! 1.webp";


import { useLocation } from "react-router-dom";
import cyc from "./../../assets/images/ClaimyourCashback.png";
import WCF from "./../../assets/images/WCf.png";
import last from "./../../assets/images/YourCashbackisontheway!.png";

const Header = lazy(() => import("../../pages/Header/header"));
const Footer = lazy(() => import("../../pages/Footer/Footer"));
import { ROUTES } from "../../lib/consts";

type Props = {
  children: React.ReactNode;
};
const CommonBase = ({ children }: Props) => {
  const location = useLocation();

  const renderImage = useMemo(() => {
    switch (location.pathname) {
      case ROUTES.HOME:
        return (
          <img
            src={WCF}
            alt="home"
            loading="eager"
              fetchPriority="high" 
                decoding="async"
          />
        );
      case ROUTES.CYC:
      case ROUTES.REGISTRATION:
      case ROUTES.VERIFYOTP:
      case ROUTES.CASHBACK:
        return (
          <img
            src={cyc}
            alt="cyc"
            loading="eager"
              fetchPriority="high" 
                decoding="async"
          />
        );
      case ROUTES.ThankYouParticipation:
        return (
          <img
            src={last}
            alt="last"
            loading="eager"
            fetchPriority="high" 
                decoding="async"
          />
        );
      default:
        return (
          <img
            src={WCF}
            alt="default"
            loading="eager"
              fetchPriority="high" 
                decoding="async"
          />
        );
    }
  }, [location.pathname]);

  return (
    <>
    <div className={styles.commonSection}>
      <Header></Header>
      
        <div className={styles.myCommon}>
          <div
            className={`${location.pathname == "/cyc" ? styles.commonCycHeader : styles.commonHeader}`}
          >
            <div className={styles.arrowDown}>
              <img
                src={DownArrow}
                alt="option"
                fetchPriority="high" 
                decoding="async"
              />
            </div>
            <div className={styles.headerImage}>
              {/* <img
              src={WCF}
              alt="option"
              {...({
                fetchpriority: "high",
              } as React.ImgHTMLAttributes<HTMLImageElement>)}
              decoding="async"
            /> */}
              {renderImage}
            </div>
          </div>
        </div>
        <div className={styles.commonSubHeader}>{children}</div>
     
      <Footer></Footer>
       </div>
    </>
  );
};

export default CommonBase;
