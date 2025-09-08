import CommonBase from "../../components/common/CommonBase";

import styles from "./thank.module.scss";
const ThankYouParticipation = () => {
  return (
    <>
      <CommonBase>
        <div className={styles.ThankYouParticipation}>
          <div className={styles.header}>
            <h3>Thank you for your participation</h3>
          </div>
          <p>
            Your cashback will be credited to your account within 24–48 business
            hours.
          </p>
        </div>
      </CommonBase>
    </>
  );
};

export default ThankYouParticipation;
