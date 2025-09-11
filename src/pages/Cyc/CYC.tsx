import CommonBase from "../../components/common/CommonBase";
import { ROUTES } from "../../lib/consts";

import styles from "./cyc.module.scss";
import { useNavigate } from "react-router-dom";

const CYC = () => {
  const navigate = useNavigate();

  const handleSubmitClaim = () => {
     navigate(ROUTES.ThankYou);
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
            <button className="vote-btn" onClick={handleSubmitClaim}>
              <span>CLAIM YOUR CASHBACK !</span>
            </button>
          </div>
        </div>
      </CommonBase>
    </>
  );
};

export default CYC;
