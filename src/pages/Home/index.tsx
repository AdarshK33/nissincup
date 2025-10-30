import { useState } from "react";
import styles from "./home.module.scss";
import { IMAGES } from "../../lib/assets.ts";

import { ROUTES } from "../../lib/consts";
import { useNavigate } from "react-router-dom";
import API from "../../api/index.ts";

import CheckBox from "../../components/checkBox/CheckBox.tsx";
import {
  MODAL_TYPES,
  useGlobalModalContext,
} from "../../helpers/GlobalModal.tsx";
import { store } from "../../store/store.ts";
import { setVotes } from "../../store/slices/authSlice.ts";
import Image from "../../components/common/Image.tsx";
import { EVENTS, trackEvent } from "../../lib/analytics.ts";

function Home() {
  const { showModal } = useGlobalModalContext();

  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState("");

  const handleCheckboxChange = (e: any) => {
    // console.log("e", e);
    setIsChecked(e);
    setMessage("");
  };
  const handleHome = async (e: any) => {
    e.preventDefault();
    if (!isChecked) {
      setMessage("*PLEASE AGREE TO THE TERMS & CONDITIONS");
      return;
    }
    try {
       // 2 Cast vote  API
      const votedResponse = await API.castVote();
       // 3 Get vote  API
      const getVoteResponse = await API.getVote();
      store.dispatch(setVotes(getVoteResponse?.votes));
      if (votedResponse?.statusCode === 200) {
        trackEvent(EVENTS.HOME_CAST_YOUR_VOTE_CLICKED);
        navigate(ROUTES.VOTE);
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  const handleBlur = () => {
    // console.log("e", e);
  };

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.header}>
          <div className={styles.homeLogo}>
            <Image src={IMAGES.HOME_LOGO} alt="Logo" />
          </div>
        </div>
        <div className={styles.homeContent}>
          <div className={styles.whatComeFirst}>
            <Image src={IMAGES.HOME_WCF} alt="WCF" />
          </div>
          <div className={styles.egg_Chicken}>
            <Image src={IMAGES.EGG_Chicken} alt="EGG_Chicken" />
          </div>
            <div className={styles.twocup}>
            <Image src={IMAGES.TWO_CUP} alt="twocup" />
          </div>

          <div className={styles.homeText}>
            <h2>VOTE TO CHOOSE YOUR FLAVOUR</h2>
            <h4>AND BECOME ELIGIBLE FOR  <span className={styles.heighlight}>100%</span>  CASHBACK</h4>
          </div>
          <div className={styles.selectCheckbox}>
            {/* <input type="checkbox" id="voteCheck"   
              
               /> */}
            <CheckBox
              name="agree"
              id="agree"
              onBlur={() => handleBlur}
              className={styles.checkBoxHome}
              onChange={handleCheckboxChange}
            />

            <p>
              I agree to the{" "}
              <span
                onClick={() => {
            trackEvent(EVENTS.HOME_TERMS_AND_CONDITIONS_CLICKED);

                  showModal(MODAL_TYPES.TERMS_CONDITIONS);
                }}
                className={styles.underline}
              >
                Terms & Conditions
              </span>
            </p>

            {message && (
              <div className={styles.message}>{message || "\u00A0"}</div>
            )}
          </div>

          <div className={styles.buttonSection}>
            <button
              className={styles.homeButton}
              type="submit"
              onClick={(e) => handleHome(e)}
            >
              <span>CAST YOUR VOTE</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
