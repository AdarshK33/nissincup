
import styles from "./menu.module.scss";
import DownArrow from "./../../assets/images/ArrowDown.svg"; 
import cupActive from "./../../assets/images/cupActive.png"; 
import cupInActive from "./../../assets/images/cupNonActive.png"; 

import WCF from "./../../assets/images/WCf.png"; 
import React, { useState } from "react";

const MyMenu = () => {


      const [activeTab, setActiveTab] = useState("CHICK’N EGG");
    return (
        <>
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


<div className={styles.menuSubHeader}>
 <div className={styles.tabHeader}>
    <p className={styles.right}>
     CHICK’N EGG
    </p>
    <p className={styles.left}>
     EGG’N CHICKEN
    </p>
 </div>
    <div className={styles.tabContainer}>
     
      <div
        className={` ${styles.card}  ${activeTab === "CHICK’N EGG" ? styles.activeCard : ""}`}
        onClick={() => setActiveTab("CHICK’N EGG")}
      >
        <img
          src={activeTab === "egg" ? cupActive : cupInActive}
          alt="Egg’n Chicken"
        />
      </div>

      <div
        className={` ${styles.card} ${activeTab === "EGG’N CHICKEN" ? styles.activeCard : ""}`}
        onClick={() => setActiveTab("EGG’N CHICKEN")}
      >
        <img
          src={activeTab === "chick" ? cupActive :cupInActive }
          alt="Chick’n Egg"
        />
      </div>
    </div>
    <div className={styles.selectedTab}>
        <h5>
         You voted for {activeTab}!
        </h5>
    </div>

 <div className={styles.buttonSection}>

    
            <button className="vote-btn" >
                
               <span>SUBMIT YOUR VOTE</span>
                
                 </button>
          </div>
</div>


        </div>
        
        </>
    );
};

export default MyMenu;