import { useEffect } from "react";
import CommonBase from "../../components/common/CommonBase";
import { logoutUser } from "../../lib/utils";

import styles from "./thank.module.scss";
const ThankYouParticipation = () => {

    useEffect(() => {
   logoutUser();
  }, []);

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
