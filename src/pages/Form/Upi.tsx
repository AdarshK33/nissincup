import { handleInputChange } from "../../lib/validationUtils.ts";

import { useTranslation } from "react-i18next";
import "../CashBackMethod/cashBack.scss";

import API from "../../api/index.ts";
import { ERROR_IDS } from "../../api/utils.ts";

import { Formik, Form } from "formik";

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
      {({ values, handleChange, handleBlur, errors, touched }) => (
        <Form className="upi-form">
          <div className="inputGroup">
            <input
              autoComplete="off"
              type="tel"
              inputMode="numeric"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const sanitizedMobileValue = handleInputChange(event, "number");
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
              <span>CLAIM ‘CASHBACK’</span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpiForm;
