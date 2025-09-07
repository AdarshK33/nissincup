import CommonBase from "../../components/common/CommonBase";
import styles from "./thankyou.module.scss";
const ThankYou = () => {

  return (
    <>
      <CommonBase>
        <div className={styles.ThankyouPage}>
            <div className={styles.heading}>
                <h4> ✅ Thank you for voting!</h4>
             
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
