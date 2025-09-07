import styles from "./menu.module.scss";

import cupActive from "./../../assets/images/cupActive.png";
import cupInActive from "./../../assets/images/cupNonActive.png";
import CE from "./../../assets/images/ChickenEgg.svg";
import EC from "./../../assets/images/EggnChicken.svg";

import { useEffect, useState } from "react";
import CommonBase from "../../components/common/CommonBase";
import ButtonComponent from "../../components/common/button";

const MyMenu = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: any) => {
    if (activeTab) {
      setIsChecked(e.target.checked);
    }
    console.log("Checked:", e.target.checked);
  };
  useEffect(() => {
    setIsChecked(false);
  }, [activeTab]);

  return (
    <>
      <CommonBase>
        <div className={styles.menuSelection}>
          <div className={styles.tabHeader}>
            <p className={styles.right}>CHICK’N EGG</p>
            <p className={styles.left}>EGG’N CHICKEN</p>
          </div>
          <div className={styles.tabContainer}>
            {/* CHICK’N EGG Card */}
            <div
              className={`${styles.card} ${
                activeTab === "CHICK’N EGG" ? styles.activeCard : ""
              }`}
              onClick={() => setActiveTab("CHICK’N EGG")}
            >
              <div className={styles.EC_CE_icon}>
                <img
                  src={CE} // CE active, EC inactive
                  alt="Chick’n Egg"
                />
              </div>
              <div
                className={`${styles.chickenEgg}
              ${
                activeTab === "CHICK’N EGG"
                  ? styles.activeCupWithNoodle
                  : styles.inActiveCupWithNoodle
              }`}
              >
                <img
                  src={activeTab === "CHICK’N EGG" ? cupActive : cupInActive}
                  alt="Chick’n Egg Cup"
                />
              </div>
            </div>

            {/* EGG’N CHICKEN Card */}
            <div
              className={`${styles.card} ${
                activeTab === "EGG’N CHICKEN" ? styles.activeCard : ""
              }`}
              onClick={() => setActiveTab("EGG’N CHICKEN")}
            >
              <div className={styles.EC_CE_icon}>
                <img
                  src={EC} // EC active, CE inactive
                  alt="Egg’n Chicken"
                />
              </div>
              <div
                className={`${styles.eggnChicken}
              ${
                activeTab === "EGG’N CHICKEN"
                  ? styles.activeCupWithNoodle
                  : styles.inActiveCupWithNoodle
              }`}
              >
                <img
                  src={activeTab === "EGG’N CHICKEN" ? cupActive : cupInActive}
                  alt="Egg’n Chicken Cup"
                />
              </div>
            </div>
          </div>

          {/* <div className={styles.selectedTab}>
            <h5>You voted for {activeTab}!</h5>
          </div> */}

          <div className={styles.selectedTab}>
            <input
              type="checkbox"
              id="voteCheck"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="voteCheck" className={styles.customCheckbox}>
              <svg viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
              {/* <svg viewBox="0 0 14 11" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 6 L5 9 L12 2"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> */}
            </label>
            <h5>You voted for {activeTab}!</h5>
          </div>
          

          <div className={styles.buttonSection}>
          
            <button className="vote-btn">
              <span>SUBMIT YOUR VOTE</span>
            </button>
          </div>
              {/* <ButtonComponent 
          className={styles.button}
          type="button"
          ButtonName="SUBMIT YOUR VOTE"
        

          /> */}
       
        
        </div>
      </CommonBase>
    </>
  );
};

export default MyMenu;
