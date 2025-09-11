import React, { useRef, useState } from "react";
import styles from "./verificationOtp.module.scss";

import { useNavigate } from "react-router-dom";

import ResendOtp from "./reSend";
import CommonBase from "../../components/common/CommonBase";

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
    console.log("OTP entered:", finalOtp);

    if (finalOtp.length === 6) {
      setError("");

      // Perform verification
      navigate("/cashBack");

      //  setOtp([]);
    } else {
      setError("PLEASE ENTER ALL 6 DIGITS");
    }
  };

  return (
    <>
      <CommonBase>
        <form onSubmit={handleSubmit} className={styles.otpForm}>
          <h2 className={styles.verificationHeadline}>
            WE’VE SENT A 6-DIGIT OTP TO +91 XXXXXXXXXXXX
          </h2>
          <div className={styles.otpInputs}>
            {(otp ?? []).map((digit, index) => (
              <input
                key={index}
                type="text"
                // type="password"
                inputMode="numeric"
                maxLength={1}
                // value={digit}
                value={digit ? "*" : ""}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputsRef.current[index] = el!)}
                // className={styles.otpInput}
                className={`${styles.otpInput} ${
                  error && !digit ? styles.errorBorder : ""
                }`}
              />
            ))}
          </div>
          {/* Error Message */}

          <div className={styles.resendSection}>
            <ResendOtp />
          </div>

          <div className={styles.errorSection}>
            {error && (
              <p
                className={styles.validation}
                style={{
                  color: "#ea0c0cff",
                  fontSize: "12px",
                  fontWeight: 200,
                }}
              >
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
      </CommonBase>
    </>
  );
}

export default OtpVerification;
