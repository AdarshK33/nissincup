import CommonBase from "../../components/common/CommonBase";

import styles from "./cyc.module.scss";
import { useNavigate } from "react-router-dom";

const CYC = () => {
  const navigate = useNavigate();

  const handleSubmitClaim = () => {
    navigate("/thankyou");
  };
  return (
    <>
      <CommonBase>
        <div className={styles.CycPage}>
          <div className={styles.heading}>
            <h4> 🎉 Your vote has been recorded!</h4>
          </div>
          <p className={styles.claimCashback}>
            You’re eligible to claim cashback.
            <br />
            Use your unique code
            <br />
            to redeem now!
          </p>
          <div className={styles.buttonSection}>
            <button className="vote-btn">
              <span onClick={handleSubmitClaim}>claim your cashback!</span>
            </button>
          </div>
        </div>
      </CommonBase>
    </>
  );
};

export default CYC;
