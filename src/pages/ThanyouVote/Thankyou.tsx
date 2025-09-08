import { useEffect } from "react";
import CommonBase from "../../components/common/CommonBase";
import styles from "./thankyou.module.scss";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
useEffect(() => {
  
  const timer = setTimeout(() => {
   
    navigate("/registration");


  }, 2000); // runs after 2s

  return () => {
    clearTimeout(timer);
  
  };
}, []);
  return (
    <>
      <CommonBase>
        <div className={styles.ThankyouPage}>
          <div className={styles.heading}>
            <div className={styles.thankYouMessage}>
              <input
                type="checkbox"
                className={styles.thankYouCheckbox}
                checked
                readOnly
              />
              <span>Thank you for voting!</span>
            </div>
          </div>
          <p className={styles.claimCashback}>
            We’ve registered your vote for
            <br /> this campaign.!
          </p>
        </div>
      </CommonBase>
    </>
  );
};

export default ThankYou;
