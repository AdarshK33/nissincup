import React, { useEffect, useRef, useState } from "react";
import styles from "./verificationOtp.module.scss"; // optional styling

// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import close from "../../assets/images/close.svg";

// import claro from "../../assets/images/Claro 3 JAR 1.png";
// import v1 from "../../assets/images/Voucher 1.png";
// import envp from "../../assets/images/envelop.png";
// import animation from "../../assets/animation/Cashback_and_Reward_Bundle.json";

// import { useAppDispatch } from "../../store/hooks";
// import EnvelopeAnimation from "../EnvelopeAnimation/EnvelopeAnimation";
import ResendOtp from "./reSend";
import CommonBase from "../../components/common/CommonBase";


function OtpVerification() {
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const [error, setError] = useState("");
  const [showTerms, setShowTerms] = useState(false);

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
      navigate("/");

          // setOtp([]);
      
      
    } else {

      setError("Please enter all 6 digits");
    }
  };

  return (
    <>
     
      <CommonBase>
        <form onSubmit={handleSubmit} className={styles.otpForm}>
          <h2 className={styles.verificationHeadline}>We’ve sent a 6-digit OTP to +91 XXXXXXXXxx</h2>
          <div className={styles.otpInputs}>
            {(otp ?? []).map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputsRef.current[index] = el!)}
                className={styles.otpInput}
              />
            ))}
          </div>
          {/* Error Message */}
          {error && (
            <span
              className={styles.validation}
              style={{
                color: "#ea0c0cff",
                fontSize: "12px",
                fontWeight: 200,
              }}
            >
              {error}
            </span>
          )}

          {!showTerms ? (
            <>
              <div className={styles.resendOtp}>
             
                <ResendOtp />
              </div>

                <div className={styles.buttonSection}>
          
            <button className="vote-btn">
              <span
              >VERIFY OTP</span>
            </button>
          </div>
            </>
          ) : (
            <></>
          )}
        </form>
      </CommonBase>
    </>
  );
}



export default OtpVerification;
