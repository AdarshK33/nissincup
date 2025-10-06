import React, { useState, lazy } from "react";
// import { ChangeEvent } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./cashBack.scss";
const CommonBase = lazy(() => import("../../components/common/CommonBase"));
import { handleInputChange } from "../../lib/validationUtils";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../lib/consts";
import API from "../../api";
import { ERROR_IDS } from "../../api/utils";

const CashBack: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [active, setActive] = useState<"amazon" | "upi">("amazon");

  const UPIValidation = Yup.object().shape({
    upi: Yup.string()
      .required("Please enter UPI linked mobile number*")
      .required("*Please enter a 10-digit number")
      .matches(/^[6789][0-9]{9}$/, "*Please enter a valid number"),
  });

  function onSuccess() {
    // console.log("form upi success navigate to last page");

    navigate(ROUTES.ThankYouParticipation);
  }

  const handleSubmitAmazonClaim = (e: any) => {
    e.preventDefault();
    API.addAmazon()
      .then((response) => {
        if (response?.statusCode === 200) {
          navigate(ROUTES.ThankYouParticipation);
        }
      })
      .catch((err) => {
        console.log("error", err);
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
                <div className="buttonSection">
                  <button
                    className="vote-btn"
                    type="submit"
                    onClick={(e) => {
                      handleSubmitAmazonClaim(e);
                    }}
                  >
                    <span> claim ‘cashback’</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="content-upi">
                <Formik
                  key="register-form"
                  initialValues={{
                    upi: "",
                  }}
                  validationSchema={UPIValidation}
                  onSubmit={(values, { setErrors }) => {
                    // console.log(values);
                    API.addUpi(values)
                      .then(() => {
                        onSuccess();
                      })
                      .catch((err) => {
                        onSuccess();

                        const { messageId, message } = err;
                        const fieldMap: Record<string, keyof typeof values> = {
                          [ERROR_IDS.INVALID_UPI]: "upi",
                          [ERROR_IDS.DEFAULT_ERROR]: "upi",
                        };
                        const errorField = fieldMap[messageId] || "upiId";
                        setErrors({ [errorField]: message });
                      });
                  }}
                >
                  {({ values, handleChange, handleBlur, errors, touched }) => (
                    <Form className="upi-form">
                      <div className="inputGroup">
                        <input
                          autoComplete="off"
                          type="tel"
                          inputMode="numeric"
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                          ) => {
                            const sanitizedMobileValue = handleInputChange(
                              event,
                              "number",
                            );
                            handleChange({
                              target: {
                                name: "upi",
                                value: sanitizedMobileValue,
                              },
                            });
                          }}
                          value={values.upi}
                          name="upi"
                          maxLength={10}
                          onBlur={handleBlur}
                          placeholder="UPI LINKED MOBILE NUMBER"
                        />
                        {errors.upi && touched.upi && (
                          <p className="error">{t(errors.upi)}</p>
                        )}
                      </div>

                      <div className="buttonSection">
                        <button className="vote-btn" type="submit">
                          <span>claim ‘cashback’</span>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
                ;
              </div>
            </>
          )}
        </div>
      </CommonBase>
    </>
  );
};

export default CashBack;
