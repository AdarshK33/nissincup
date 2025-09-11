import React, { useEffect, useState } from "react";
import styles from "./reSend.module.scss";
import API from "../../api";

const ResendOtp: React.FC = () => {
  const DURATION = 12; // countdown in seconds

  const [counter, setCounter] = useState(DURATION);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (counter > 0) {
      timer = setTimeout(() => setCounter((prev) => prev - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [counter]);

  const handleResend = () => {
    if (!canResend) return;
    console.log("Resending OTP...");

     // Perform verification
       API.resendOTP()
      .then((response) => {
        if(!response){
      setCounter(DURATION);
      setCanResend(false);
        }
       
      })
      .catch((err) => {
      console.log(err)
       
      });
  
  };

  const formatTime = (time: number) => {
    return `00:${time.toString().padStart(2, "0")}`;
  };

  return (
    <div className={styles.resendOtp}>
      {!canResend ? (
        <p className={styles.timerText}>
          RESEND IN <span>{formatTime(counter)}</span>
        </p>
      ) : (
        <p
          className={styles.resendText}
          onClick={handleResend}
          style={{
            cursor: "pointer",
          }}
        >
          RESEND OTP
        </p>
      )}
    </div>
  );
};

export default ResendOtp;
