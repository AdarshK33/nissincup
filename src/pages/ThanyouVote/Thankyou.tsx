import CommonBase from "../../components/common/CommonBase";
import styles from "./thankyou.module.scss";
const ThankYou = () => {

  return (
    <>
      <CommonBase>
        <div className={styles.ThankyouPage}>
            <div className={styles.heading}>
        
  <input type="checkbox" className={styles.thankYouCheckbox} checked readOnly />
  <span>Thank you for voting!</span>

             
            </div>
         <p className={styles.claimCashback}>
We’ve registered your vote for<br /> this campaign.!
</p>
 
             </div>
     </CommonBase>
    </>
  );
};

export default ThankYou;
