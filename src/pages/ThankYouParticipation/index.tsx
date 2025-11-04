// import { lazy, useEffect, useRef, useState } from "react";
import CommonBase from "../../components/common/CommonBase";
import styles from "./thank.module.scss";

const ThankYouParticipation = () => {
  return (
    <>
      {/* {show && <ConfettiCanvas ref={confettiRef} />} */}
      <CommonBase>
        <div className={styles.wrapper}>
      {/* Animated Background Elements */}
      <div className={`${styles.bg} ${styles.bg1}`}></div>
      <div className={`${styles.bg} ${styles.bg2}`}></div>
      <div className={`${styles.bg} ${styles.bg3}`}></div>
      <div className={`${styles.bg} ${styles.bg4}`}></div>
      <div className={`${styles.bg} ${styles.bg5}`}></div>
      <div className={`${styles.bg} ${styles.bg6}`}></div>

      {/* Actual Content */}
      <div className={styles.header}>
       <h3>THANK YOU FOR YOUR PARTICIPATION</h3>
</div>
<p>YOUR CASHBACK WILL BE CREDITED TO<br/> YOUR ACCOUNT WITHIN 24–48 BUSINESS<br/> HOURS.</p>
    </div>
      </CommonBase>
    </>
  );
};

export default ThankYouParticipation;
