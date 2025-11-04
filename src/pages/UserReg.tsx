import { useState } from "react";
import RegisterForm from "./Form/Registration";
import OtpVerification from "./VerificationOtp";
import CommonBase from "../components/common/CommonBase";

function UserRegister() {
  const [step, setStep] = useState<"register" | "otp">("register");

  return (
    <>
      <CommonBase>
        {step === "otp" ? (
          <OtpVerification />
        ) : (
          <RegisterForm onSuccess={() => setStep("otp")} />
        )}
      </CommonBase>
    </>
  );
}

export default UserRegister;
