// import { lazy, useEffect, useRef, useState } from "react";
import CommonBase from "../../components/common/CommonBase";
import styles from "./thank.module.scss";

// const ConfettiCanvas = lazy(() => import("../../helpers/ImageConfetti"));

const ThankYouParticipation = () => {
  // const [show, setShow] = useState(true);

  // const confettiRef = useRef<{ startConfetti: () => void }>(null);

  // useEffect(() => {
  //   // Start confetti when component mounts
  //   confettiRef.current?.startConfetti();
  //   console.log("hello");
  //   const timer = setTimeout(() => {
  //     setShow(false);
  //   }, 3000); // 2s animation + 1s fade

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <>
      {/* {show && <ConfettiCanvas ref={confettiRef} />} */}
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
