import styles from "./CommonBase.module.scss";
import DownArrow from "./../../assets/images/ArrowDown.svg";

import WCF from "./../../assets/images/WCf.png";
import React from "react";

import { useLocation } from "react-router-dom";
import cyc from "./../../assets/images/Claim your Cashback 1.svg";
import last from "./../../assets/images/Your Cashback is on the way! 1.svg";
import Header from "../../pages/Header/header";
import Footer from "../../pages/Footer/Footer";

type Props = {
  children: React.ReactNode;
};
const CommonBase = ({ children }: Props) => {
  const location = useLocation();
  //     HOME: "/",
  // CYC: "/cyc",
  // ThankYou:"/thankYou"

  const renderImage = () => {
    switch (location.pathname) {
      case "/":
      case "/home":
        return (
          <img
            src={WCF}
            alt="home"
            {...({
              fetchpriority: "high",
            } as React.ImgHTMLAttributes<HTMLImageElement>)}
            decoding="async"
          />
        );
      case "/cyc":
      case "/registration":
      case "/verifyOtp":
      case "/cashBack":
        return (
          <img
            src={cyc}
            alt="about"
            {...({
              fetchpriority: "high",
            } as React.ImgHTMLAttributes<HTMLImageElement>)}
            decoding="async"
          />
        );
      case "/thankYouParticipation":
        return (
          <img
            src={last}
            alt="home"
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
