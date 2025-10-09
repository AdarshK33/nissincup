// import { lazy } from "react";
import API from "../../api";
import CommonBase from "../../components/common/CommonBase";
import PowredByPineLab from "../../components/powredByPineLab";
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
          navigate(ROUTES.ThankYou);
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
          <div className={styles.heading}>
            <h4> 🎉THANK YOU FOR VOTING!</h4>
          </div>
          <p className={styles.claim_Cashback_text}>
            NOW YOU ARE ELIGIBLE TO CLAIM <br />
            100% CASHBACK <br />
            <span className={styles.cashbackHighlight}>
              BUY A CUP NOW TO REDEEM
            </span>
          </p>
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
