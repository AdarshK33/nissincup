// import { lazy } from "react";
import API from "../../api";
import CommonBase from "../../components/common/CommonBase";
import Image from "../../components/common/Image";
import { EVENTS, trackEvent } from "../../lib/analytics";
import { IMAGES } from "../../lib/assets";

// const CommonBase = lazy(() => import("../../components/common/CommonBase"));

import { ROUTES } from "../../lib/consts";

import styles from "./cyc.module.scss";
import { useNavigate } from "react-router-dom";

const CYC = () => {
  const navigate = useNavigate();

  const handleSubmitClaim = (e: any) => {
    e.preventDefault(); // * Prevents default form behavior, calls the climeClick API,
    API.climeClick()
      .then((response) => {
        if (response?.statusCode === 200) {
             trackEvent(EVENTS.CLAIM_YOUR_CASHBACK);
          // navigate(ROUTES.THANK_YOU);
           navigate(ROUTES.REGISTRATION);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <>
      <CommonBase>
        <div className={styles.CycPage}>
          <p className={styles.claim_Cashback_text}>
            🎉THANK YOU FOR VOTING!<br />
            NOW YOU ARE ELIGIBLE TO CLAIM <br />
            100% CASHBACK <span className={styles.cashbackHighlight}>
              *{" "}
            </span>{" "}
            <br />
            <span className={styles.cashbackHighlight}>
              BUY A CUP NOW TO REDEEM
            </span>
          </p>
             <div className={styles.twocup}>
            <Image src={IMAGES.TWO_CUP} alt="twocup" />
          </div>
          <div className={styles.buttonSection}>
            <button
              className="vote-btn"
              type="submit"
              onClick={(e) => {
                handleSubmitClaim(e);
              }}
            >
              <span>CLAIM YOUR CASHBACK!</span>
            </button>
          </div>
        </div>
      </CommonBase>
    </>
  );
};

export default CYC;
