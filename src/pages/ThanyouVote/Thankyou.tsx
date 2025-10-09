import { useEffect } from "react";
import CommonBase from "../../components/common/CommonBase";
import styles from "./thankyou.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../lib/consts";

const ThankYou = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(ROUTES.REGISTRATION);
    }, 10000); // runs after 2s

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <CommonBase>
        <div className={styles.ThankyouPage}>
          <div className={styles.thankYouMessage}>
            <input
              type="checkbox"
              className={styles.thankYouCheckbox}
              checked
              readOnly
            />

            <span>THANK YOU FOR VOTING!</span>
          </div>
          <div className={styles.yourVote}>
            <p className={styles.claimCashback}>
              WE’VE REGISTERED YOUR VOTE FOR THIS CAMPAIGN.!
            </p>
          </div>
        </div>
      
      </CommonBase>
    </>
  );
};

export default ThankYou;
