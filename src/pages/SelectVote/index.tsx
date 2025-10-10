import styles from "./selectVote.module.scss";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import CommonBase from "../../components/common/CommonBase";
import { ROUTES } from "../../lib/consts";
import API from "../../api";

import { IMAGES } from "../../lib/assets";
import Image from "../../components/common/Image";

const MyVote = () => {
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitVote = (e: any) => {
    e.preventDefault();
    if (!activeTab) {
      setMessage("*Please give your vote first!");
      return;
    }

    const voteValue: any =
      activeTab === "CHICKEN" ? "2" : activeTab === "EGG" ? "1" : null;

    API.addVote(voteValue)
      .then(() => {
        // console.log("votevlaue", response);
        navigate(ROUTES.CYC);
      })
      .catch((err) => {
        // navigate(ROUTES.CYC);
        console.log("error", err);
      });
  };

  return (
    <>
      <CommonBase>
        <div className={styles.menuSelectionPage}>
          <div className={styles.tabHeader}>
            <p
              className={`${styles.option} ${
                activeTab === "CHICKEN" ? styles.activeText : ""
              }`}
            >
              CHICKEN
            </p>
            <p
              className={`${styles.option} ${
                activeTab === "EGG" ? styles.activeText : ""
              }`}
            >
              EGG
            </p>
          </div>
          <div className={styles.tabContainer}>
            {/* CHICK’N  Card */}
            <div
              className={`${styles.card} ${
                activeTab === "CHICKEN" ? styles.activeCard : ""
              }`}
              onClick={() => {
                setActiveTab("CHICKEN");
                setMessage("");
              }}
            >
              <div className={styles.EC_CE_icon}>
                <Image
                  src={IMAGES.SELECT_CHICKEN} // CE active, EC inactive
                  alt="Chick’n Egg"
                />
              </div>
            </div>

            {/* EGG’N Card */}
            <div
              className={`${styles.card} ${
                activeTab === "EGG" ? styles.activeCard : ""
              }`}
              onClick={() => {
                setActiveTab("EGG");
                setMessage("");
              }}
            >
              <div className={styles.EC_CE_icon}>
                <Image
                  src={IMAGES.SELECT_EGG} // EC active, CE inactive
                  alt="Egg’n Chicken"
                />
              </div>
            </div>
          </div>

          {/* <div className={styles.selectedTab}>
            <h5>You voted for {activeTab}!</h5>
          </div> */}

          <div className={styles.selectedTab}>
            {activeTab && (
              <>
                <input type="checkbox" id="voteCheck" checked readOnly />
                <label htmlFor="voteCheck" className={styles.customCheckbox}>
                  <svg viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                  </svg>
                </label>

                <h5>You voted for {activeTab}</h5>
              </>
            )}
          </div>

          <div className={styles.messageSection}>
            {message && (
              <div className={styles.message}>{message || "\u00A0"}</div>
            )}
          </div>

          <div className={styles.buttonSection}>
            <button className="vote-btn" onClick={(e) => handleSubmitVote(e)}>
              <span>CAST YOU VOTE</span>
            </button>
          </div>
          {/* <ButtonComponent 
          className={styles.button}
          type="button"
            onMouseEnter={() => {import("../Cyc/CYC")}}
          ButtonName="SUBMIT YOUR VOTE"
          /> */}
        </div>
      </CommonBase>
    </>
  );
};

export default MyVote;
