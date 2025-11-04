
import { useTranslation } from "react-i18next";
import "../CashBackMethod/cashBack.scss";

import API from "../../api/index.ts";
import { ERROR_IDS } from "../../api/utils.ts";

import { Formik, Form, Field } from "formik";

import { UPIValidation } from "../../schema/validationSchema.ts";
type UpiFormProps = {
  onSuccess: () => void;
};

const UpiForm = ({ onSuccess }: UpiFormProps) => {
  const { t } = useTranslation();

  return (
    <Formik
      key="upi-form"
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
            const { messageId, message } = err;
            const fieldMap: Record<string, keyof typeof values> = {
              [ERROR_IDS.INVALID_UPI]: "upi",
              [ERROR_IDS.DEFAULT_ERROR]: "upi",
            };
            const errorField = fieldMap[messageId] || "upi";
            setErrors({ [errorField]: message });
          });
      }}
    >
    {({ errors, touched }) => (
        <Form className="upi-form">
          <div className="inputGroup">
             <Field
                  name="upi"
                  placeholder="Enter UPI ID"
                  autoComplete="off"
                />


               <p className="messageSection">
            {errors.upi && touched.upi && (
              <span className="message">{t(errors.upi)}</span>
            )}
          </p>

          </div>

          <div className="buttonSection">
            <button className="vote-btn" type="submit">
              <span>CLAIM ‘CASHBACK’</span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpiForm;
