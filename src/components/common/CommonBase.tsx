import styles from "./CommonBase.module.scss";
import DownArrow from "./../../assets/images/ArrowDown.svg";

import WCF from "./../../assets/images/WCf.png";
import React from "react";
import Header from "../../pages/Header/header";
import Footer from "../../pages/Footer/Footer";
type Props = {
  children: React.ReactNode;
};
const CommonBase = ({ children }: Props) => {

  return (
    <>
    <Header></Header>
    <div className={styles.menuSection}>
      <div className={styles.myMenu}>
        <div className={styles.menuHeader}>
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
            <img
              src={WCF}
              alt="option"
              {...({
                fetchpriority: "high",
              } as React.ImgHTMLAttributes<HTMLImageElement>)}
              decoding="async"
            />
          </div>
        </div>

      
      </div>
        <div className={styles.menuSubHeader}>
           {children}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CommonBase;
