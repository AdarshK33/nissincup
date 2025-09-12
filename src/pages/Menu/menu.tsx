import styles from "./menu.module.scss";

import cupActive from "./../../assets/images/webP/cupActive.webp";
import cupInActive from "./../../assets/images/webP/cupNonActive.webp";
import CE from "./../../assets/images/ChickenEgg.svg";
import EC from "./../../assets/images/EggnChicken.svg";

import { useEffect, useState } from "react";
// import CommonBase from "../../components/common/CommonBase";

// import ButtonComponent from "../../components/common/button";
import { useNavigate } from "react-router-dom";
import CommonBase from "../../components/common/CommonBase";
import { ROUTES } from "../../lib/consts";
import API from "../../api";
import { setUserKey } from "../../store/slices/authSlice";
import { logoutUser } from "../../lib/utils";
import { store } from "../../store/store";

const MyMenu = () => {
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.createUser()
      .then((response) => {
        store.dispatch(setUserKey(response));
        logoutUser();
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const handleSubmitVote = (e: any) => {
    e.preventDefault();
    if (!activeTab) {
      setMessage("Please give your vote first!");
      return;
    }

    const voteValue: any =
      activeTab === "CHICK’N EGG"
        ? "2"
        : activeTab === "EGG’N CHICKEN"
          ? "1"
          : null;

    API.addVote(voteValue)
      .then(() => {
        // console.log("votevlaue", response);
        navigate(ROUTES.CYC);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <>
      <CommonBase>
        <div className={styles.menuSelectionPage}>
          <div className={styles.tabHeader}>
            <p className={styles.left}>CHICK’N EGG</p>
            <p className={styles.right}>EGG’N CHICKEN</p>
          </div>
          <div className={styles.tabContainer}>
            {/* CHICK’N EGG Card */}
            <div
              className={`${styles.card} ${
                activeTab === "CHICK’N EGG" ? styles.activeCard : ""
              }`}
              onClick={() => {
                setActiveTab("CHICK’N EGG");
                setMessage("");
              }}
            >
              <div className={styles.EC_CE_icon}>
                <img
                  src={CE} // CE active, EC inactive
                  alt="Chick’n Egg"
                  {...({
                    fetchpriority: "high",
                  } as React.ImgHTMLAttributes<HTMLImageElement>)}
                  decoding="async"
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
                  {...({
                    fetchpriority: "high",
                  } as React.ImgHTMLAttributes<HTMLImageElement>)}
                  decoding="async"
                />
              </div>
            </div>

            {/* EGG’N CHICKEN Card */}
            <div
              className={`${styles.card} ${
                activeTab === "EGG’N CHICKEN" ? styles.activeCard : ""
              }`}
              onClick={() => {
                setActiveTab("EGG’N CHICKEN");
                setMessage("");
              }}
            >
              <div className={styles.EC_CE_icon}>
                <img
                  src={EC} // EC active, CE inactive
                  alt="Egg’n Chicken"
                  {...({
                    fetchpriority: "high",
                  } as React.ImgHTMLAttributes<HTMLImageElement>)}
                  decoding="async"
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
                  {...({
                    fetchpriority: "high",
                  } as React.ImgHTMLAttributes<HTMLImageElement>)}
                  decoding="async"
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
                <input
                  type="checkbox"
                  id="voteCheck"
                  checked
                  readOnly
                  // checked={isChecked}
                  // onChange={handleCheckboxChange}
                />
                <label htmlFor="voteCheck" className={styles.customCheckbox}>
                  <svg viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                  </svg>
                </label>
                <h5>You voted for {activeTab}!</h5>
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
              <span>SUBMIT YOUR VOTE</span>
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

export default MyMenu;
