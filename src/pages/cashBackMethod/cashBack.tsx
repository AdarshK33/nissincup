import React, { useState } from "react";
import "./cashBack.scss"; 
import CommonBase from "../../components/common/CommonBase";

const CashBack: React.FC = () => {
  const [active, setActive] = useState<"amazon" | "upi">("amazon");

  return (
    <>
    <CommonBase>
<div className="cashBackPage">


    <div className="toggle-container">
      <div
        className={`toggle-option ${active === "amazon" ? "active" : ""}`}
        onClick={() => setActive("amazon")}
      >
        AMAZON PAY
      </div>
      <div
        className={`toggle-option ${active === "upi" ? "active" : ""}`}
        onClick={() => setActive("upi")}
      >
        UPI
      </div>
    </div>
    </div>
    </CommonBase>
    </>
  );
};

export default CashBack;
