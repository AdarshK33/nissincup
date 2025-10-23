import React, { useRef, useState } from "react";
import styles from "./verificationOtp.module.scss";

import { useNavigate } from "react-router-dom";

import ResendOtp from "./reSend";
// import CommonBase from "../../components/common/CommonBase";
import { ROUTES } from "../../lib/consts";
import { store } from "../../store/store";
import { setAccessToken } from "../../store/slices/authSlice";
import API from "../../api";
import { ERROR_IDS } from "../../api/utils";
import { EVENTS, trackEvent } from "../../lib/analytics";

function OtpVerification() {
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const [error, setError] = useState("");

  // const [showTerms, setShowTerms] = useState(false);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");
    // Move to next input if current has a value
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
        setError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalOtp = otp.join("");
    // console.log("OTP entered:", finalOtp);

    if (finalOtp.length === 6) {
      setError("");

      // Perform verification
      API.verifyOTP(finalOtp)
        .then((response) => {
             trackEvent(EVENTS.VERIFY_OTP);
          store.dispatch(setAccessToken(response?.accessToken));
          navigate(ROUTES.CASHBACK);
        })
        .catch((err) => {
          const { messageId, message } = err;
          if (
            messageId === ERROR_IDS.INVALID_OTP ||
            messageId === ERROR_IDS.DEFAULT_ERROR
          ) {
            setError(message);
          }
        });

      //  setOtp([]);
    } else {
      setError("PLEASE ENTER ALL 6 DIGITS");
    }
  };
  const handleSetOtp = (_value: string) => {
    setOtp(Array(6).fill(""));
    setError("");
  };

//   const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
//   e.preventDefault();
//   const pasteData = e.clipboardData.getData("Text").trim();
//   if (!/^\d+$/.test(pasteData)) return; // Only digits allowed

//   const digits = pasteData.split("").slice(0, 6); // Take only first 6 digits
//   const newOtp = [...otp];

//   digits.forEach((digit, i) => {
//     newOtp[i] = digit;
//   });

//   setOtp(newOtp);

//   // Focus the last filled input
//   const nextIndex = digits.length - 1;
//   if (nextIndex < 6) {
//     inputsRef.current[nextIndex]?.focus();
//   }
// };


  return (
    <>
      {/* <CommonBase> */}
        <form onSubmit={handleSubmit} className={styles.otpForm}>
          <h2 className={styles.verificationHeadline}>
            WE’VE SENT A 6-DIGIT OTP TO{" "}
            <span className={styles.verificationHeadlinePhone}>
              +91 XXXXXXXXXX
            </span>
          </h2>
          <div className={styles.otpInputs}>
            {(otp ?? []).map((digit, index) => (
              <input
                key={index}
                type="text"
                // type="password"
                inputMode="numeric"
                maxLength={1}
                placeholder={digit ? "" : "*"}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                  // onPaste={handlePaste} // 👈 Add this line
                ref={(el) => (inputsRef.current[index] = el!)}
                className={`${styles.otpInput} ${
                  error && !digit ? styles.errorBorder : ""
                }`}
              />
            ))}
          </div>
          {/* Error Message */}

          <div className={styles.resendSection}>
            <ResendOtp emptyField={handleSetOtp} />
          </div>

          <div className={styles.errorSection}>
            {error && (
              <p     >
                {error}
              </p>
            )}
          </div>
          <div className={styles.buttonSection}>
            <button className="vote-btn w-60">
              <span>VERIFY OTP</span>
            </button>
          </div>
        </form>
      {/* </CommonBase> */}
    </>
  );
}

export default OtpVerification;
