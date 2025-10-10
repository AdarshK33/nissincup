import React, { useState,  } from "react";

import "./cashBack.scss";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../lib/consts";
import API from "../../api";

import CommonBase from "../../components/common/CommonBase";
import UpiForm from "../Form/Upi";

const CashBack: React.FC = () => {

  const navigate = useNavigate();

  const [active, setActive] = useState<"amazon" | "upi">("amazon");
  const [cashbackError, setCashbackError] = useState("");


  function handleUpiForm() {
    // console.log("form upi success navigate to last page");

    navigate(ROUTES.THANK_YOU_PARTICIPATION);
  }

  const handleSubmitAmazonClaim = (e: any) => {
    e.preventDefault();
    API.addAmazon()
      .then((response) => {
        if (response?.statusCode === 200) {
          navigate(ROUTES.THANK_YOU_PARTICIPATION);
        }
      })
      .catch((err) => {
        console.log("error", err);
         const { message } = err;
        setCashbackError(message || `Error in claiming cashback`);
      });
  };

  return (
    <>
      <CommonBase>
        <div className="cashBackPage">
          <div className="header">
            <h3>CHOOSE YOUR CASHBACK METHOD</h3>
          </div>
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

          {active == "amazon" ? (
            <>
              <div className="content-amazon">
                <p>
                  Your <span>Amazon Pay voucher code</span> will be sent to your
                  registered mobile number via SMS within 24 hours.
                </p>
                  <div className="messageSection">
            {cashbackError && (
              <div className="message">{cashbackError}</div>
            )}
          </div>
                <div className="buttonSection">
                  <button
                    className="vote-btn"
                    type="submit"
                    onClick={(e) => {
                      handleSubmitAmazonClaim(e);
                    }}
                  >
                    <span> CLAIM</span>
                  </button>
                </div>
               
              </div>
            </>
          ) : (
            <>
              <div className="content-upi">
                <UpiForm onSuccess={() => handleUpiForm()}      ></UpiForm>
              </div>
            </>
          )}
        </div>
       
      </CommonBase>
    </>
  );
};

export default CashBack;
