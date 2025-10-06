
import React, { lazy, useMemo } from "react";
import styles from "./CommonBase.module.scss";

import { useLocation } from "react-router-dom";


const Header = lazy(() => import("../../pages/Header/header"));
const Footer = lazy(() => import("../../pages/Footer/Footer"));
import { ROUTES } from "../../lib/consts";
import { IMAGES } from "../../lib/assets";

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
            src={IMAGES.COMMON_WCF}
            alt="home"
           loading="eager"
            // @ts-expect-error React types don’t yet include lowercase fetchpriority
  fetchpriority="high"
  decoding="async"
          />
        );
      case ROUTES.CYC:
      case ROUTES.REGISTRATION:
      case ROUTES.VERIFYOTP:
      case ROUTES.CASHBACK:
        return (
          <img
            src={IMAGES.CYC}
            alt="cyc"
              loading="eager"
            // @ts-expect-error React types don’t yet include lowercase fetchpriority
  fetchpriority="high"
  decoding="async"
          />
        );
      case ROUTES.ThankYouParticipation:
        return (
          <img
            src={IMAGES.YOUR_CASHBACK_IS_ON_THE_WAY}
            alt="last-page-screen"
             loading="eager"
            // @ts-expect-error React types don’t yet include lowercase fetchpriority
  fetchpriority="high"
  decoding="async"
          />
        );
      default:
        return (
          <img
            src={IMAGES.COMMON_WCF}
            alt="default"
              loading="eager"
            // @ts-expect-error React types don’t yet include lowercase fetchpriority
  fetchpriority="high"
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
                src={IMAGES.ARROW_DOWN}
                alt="DownArrow"
                 loading="eager"
            // @ts-expect-error React types don’t yet include lowercase fetchpriority
  fetchpriority="high"
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
