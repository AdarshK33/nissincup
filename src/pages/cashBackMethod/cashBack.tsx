import React, { useState } from "react";
import { ChangeEvent } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./cashBack.scss"; 
import CommonBase from "../../components/common/CommonBase";
import { handleInputChange } from "../../lib/validationUtils";
import { useTranslation } from "react-i18next";

const CashBack: React.FC = () => {
    const { t } = useTranslation();
  
  const [active, setActive] = useState<"amazon" | "upi">("amazon");

  const UPIValidation = Yup.object().shape({
  mobile: Yup.string()
    .required("Please enter UPI linked mobile number*")
   .required("*Please enter a 10-digit number")
    .matches(/^[6789][0-9]{9}$/, "*Please enter a valid number"),
});

  function onSuccess() {
    console.log("form upi success navigate to last page")
  }

  return (
    <>
    <CommonBase>
<div className="cashBackPage">

   <div className="header">
    <h3>Choose your cashback method</h3>

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

    
   {active=="amazon"?(<>
   <div className="content-amazon">
   <p>
    Your <span>Amazon Pay voucher code</span> will be sent to your registered mobile number via SMS within 24 hours.
   </p>
     <div className="buttonSection">
          
            <button className="vote-btn" type="submit">
              <span
             
              > claim ‘cashback’</span>
            </button>
          </div>
          </div>
   </>):(<>
 <div className="content-upi">
  

<Formik
  key="register-form"
  initialValues={{
    mobile: "",
  }}
  validationSchema={UPIValidation}
  onSubmit={(values, { setSubmitting }) => {
    console.log(values, "submit");
    onSuccess(); // ✅ call only after successful validation + submit
    setSubmitting(false);
  }}
>
  {({ values, handleChange, handleBlur, errors, touched, isSubmitting }) => (
    <Form className="register-form">
      <div className="inputGroup">
        <input
          autoComplete="off"
          type="tel"
          inputMode="numeric"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const sanitizedMobileValue = handleInputChange(event, "number");
            handleChange({
              target: {
                name: "mobile",
                value: sanitizedMobileValue,
              },
            });
          }}
          value={values.mobile}
          name="mobile"
          maxLength={10}
          onBlur={handleBlur}
          placeholder="UPI LINKED MOBILE NUMBER"
        />
        {errors.mobile && touched.mobile && (
          <p className="error">{t(errors.mobile)}</p>
        )}
      </div>

      <div className="buttonSection">
        <button
          className="vote-btn"
          type="submit"
          disabled={isSubmitting} // ✅ prevent double submit
        >
          <span>claim ‘cashback’</span>
        </button>
      </div>
    </Form>
  )}
</Formik>;

        </div>
   </>)}
    </div>
   
    </CommonBase>
    </>
  );
};

export default CashBack;
