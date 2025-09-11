import styles from "./CommonBase.module.scss";
import DownArrow from "./../../assets/images/ArrowDown.svg";

import WCF from "./../../assets/images/webP/WCf.webp";
import React, { lazy } from "react";

import { useLocation } from "react-router-dom";
import cyc from "./../../assets/images/Claim your Cashback 1.svg";
import last from "./../../assets/images/Your Cashback is on the way! 1.svg";

const Header = lazy(() => import("../../pages/Header/header"));
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
            loading="eager"
            {...({
              fetchpriority: "high",
            } as React.ImgHTMLAttributes<HTMLImageElement>)}
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
            {...({
              fetchpriority: "high",
            } as React.ImgHTMLAttributes<HTMLImageElement>)}
            decoding="async"
          />
        );
      case ROUTES.ThankYouParticipation:
        return (
          <img
            src={last}
            alt="last"
            loading="eager"
            {...({
              fetchpriority: "high",
            } as React.ImgHTMLAttributes<HTMLImageElement>)}
            decoding="async"
          />
        );
      default:
        return (
          <img
            src={WCF}
            alt="default"
            loading="eager"
            {...({
              fetchpriority: "high",
            } as React.ImgHTMLAttributes<HTMLImageElement>)}
            decoding="async"
          />
        );
    }
  };

  return (
    <>
      <Header></Header>
      <div className={styles.commonSection}>
        <div className={styles.myCommon}>
          <div
            className={`${location.pathname == "/cyc" ? styles.commonCycHeader : styles.commonHeader}`}
          >
            <div>
              <img
                src={DownArrow}
                alt="option"
                {...({
                  fetchpriority: "high",
                } as React.ImgHTMLAttributes<HTMLImageElement>)}
                decoding="async"
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
        <div className={styles.commonSubHeader}>{children}</div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CommonBase;
