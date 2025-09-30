import API from "../../api";
import CommonBase from "../../components/common/CommonBase";
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
            <h4> 🎉 YOUR VOTE HAS BEEN RECORDED!</h4>
          </div>
          <p className={styles.claimCashback}>
            YOU’RE ELIGIBLE TO CLAIM CASHBACK.
            <br />
            USE YOUR UNIQUE CODE
            <br />
            TO REDEEM NOW!
          </p>
          <div className={styles.buttonSection}>
            <button
              className="vote-btn"
              type="submit"
              onClick={(e) => {
                handleSubmitClaim(e);
              }}
            >
              <span>CLAIM YOUR CASHBACK !</span>
            </button>
          </div>
        </div>
      </CommonBase>
    </>
  );
};

export default CYC;
