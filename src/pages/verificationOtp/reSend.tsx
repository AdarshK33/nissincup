import React, { useEffect, useState } from "react";
import styles from "./reSend.module.scss";
import API from "../../api";
interface ResendOtpProps {
  emptyField: (value: string) => void;
}
const ResendOtp: React.FC<ResendOtpProps> = ({ emptyField }) => {
  const DURATION = 30; // countdown in seconds

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
     emptyField("");
    // console.log("Resending OTP...");

    // Perform verification
    API.resendOTP()
      .then((response) => {
      
        if (response) {
          setCanResend(false);
          setCounter(DURATION);
        
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formatTime = (time: number) => {
    return `00:${time.toString().padStart(2, "0")}`;
  };


  console.log(canResend,"canResend");
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
