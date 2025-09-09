import styles from "./CommonBase.module.scss";
import DownArrow from "./../../assets/images/ArrowDown.svg";

import WCF from "./../../assets/images/webP/WCf.webp";
import React, { lazy } from "react";

import { useLocation } from "react-router-dom";
import cyc from "./../../assets/images/Claim your Cashback 1.svg";
import last from "./../../assets/images/Your Cashback is on the way! 1.svg";


const  Header  = lazy(() => import("../../pages/Header/header"));
const Footer = lazy(() => import("../../pages/Footer/Footer"));
import { ROUTES } from "../../lib/consts";

type Props = {
  children: React.ReactNode;
};
const CommonBase = ({ children }: Props) => {
  const location = useLocation();

  const renderImage = () => {
    switch (location.pathname) {
      case ROUTES.HOME:
        return (
          <img
            src={WCF}
            alt="home"
            {...({
              fetchpriority: "high",
            } as React.ImgHTMLAttributes<HTMLImageElement>)}
            decoding="async"
            loading="lazy"
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
            {...({
              fetchpriority: "high",
            } as React.ImgHTMLAttributes<HTMLImageElement>)}
            decoding="async"
            loading="lazy"
          />
        );
      case ROUTES.ThankYouParticipation:
        return (
          <img
            src={last}
            alt="last"
            {...({
              fetchpriority: "high",
            } as React.ImgHTMLAttributes<HTMLImageElement>)}
            decoding="async"
            loading="lazy"
          />
        );
      default:
        return (
          <img
            src={WCF}
            alt="default"
            {...({
              fetchpriority: "high",
            } as React.ImgHTMLAttributes<HTMLImageElement>)}
            decoding="async"
            loading="lazy"
          />
        );
    }
  };

  return (
    <>
      <Header></Header>
      <div className={styles.menuSection}>
        <div className={styles.myMenu}>
          <div
            className={`${location.pathname == "/cyc" ? styles.menuCycHeader : styles.menuHeader}`}
          >
            <div>
              <img
                src={DownArrow}
                alt="option"
                {...({
                  fetchpriority: "high",
                } as React.ImgHTMLAttributes<HTMLImageElement>)}
                decoding="async"
                loading="lazy"
              />
            </div>
            <div>
              {/* <img
              src={WCF}
              alt="option"
              {...({
                fetchpriority: "high",
              } as React.ImgHTMLAttributes<HTMLImageElement>)}
              decoding="async"
            /> */}
              {renderImage()}
            </div>
          </div>
        </div>
        <div className={styles.menuSubHeader}>{children}</div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CommonBase;
