import { Form, Formik } from "formik";
import { ChangeEvent } from "react";
import { RegisterValidation } from "../../schema/validationSchema.ts";

import { handleInputChange } from "../../lib/validationUtils.ts";

import { useTranslation } from "react-i18next";

import { STATE, DISTRICTS } from "../../lib/consts.ts";
// import { IMAGES } from "../../lib/assets.ts";
import down from "../../assets/images/select_down.svg";
import styles from "../regis/registration.module.scss";

type RegisterFormProps = {
  onSuccess: () => void;
};

const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const { t } = useTranslation();

  return (
    <Formik
      key="register-form"
      initialValues={{
        mobile: "",
        code: "",
        state: "",
        district: "",
        agree: false,
      }}
      validationSchema={RegisterValidation}
      onSubmit={(values, { setErrors }) => {
       onSuccess();
       console.log(values,"submit")
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched,
      }) => {
        return (
          <Form onSubmit={handleSubmit} className="register-form">
         
          
          <div className={styles.inputGroup}>
              <input
                autoComplete="off"
                type="tel"
                inputMode="numeric"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  const sanitizedMobileValue = handleInputChange(
                    event,
                    "number"
                  );
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
                placeholder="MOBILE"
              />
              {  errors.mobile && touched.mobile && (
                <p className="error">{t(errors.mobile)}</p>
              )}
            </div>
             <div className={styles.inputGroup}>
              <input
                autoComplete="off"
                type="text"
                maxLength={12}
                name="code"
                onChange={handleChange}
                value={values?.code?.toUpperCase()}
                onBlur={handleBlur}
                placeholder="UNIQUE CODE"
              />
              {
                !errors.mobile &&
                errors.code &&
                touched.code && <p className="error">{t(errors.code)}</p>}
            </div>
           <div className={styles.inputGroup}>
             
                <img
                  src={down}
                  alt=""
                  className="arrow-img"
                    style={{
                  position: "absolute",
                  right: "2.5rem",
                  paddingTop: ".8rem",
                }}
                />
                <select
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" disabled>
                    STATE
                  </option>
                  {STATE.map((state) => (
                    <option key={state.value} value={state.value}>
                      {state.label}
                    </option>
                  ))}
                </select>
             
              {
                !errors.mobile &&
                !errors.code &&
                errors.state &&
                touched.state && <p className="error">{t(errors.state)}</p>}
            </div>
            <div className={styles.inputGroup}>
                <img
                  src={down}
                  alt=""
                  className="arrow-img"
                    style={{
                  position: "absolute",
                  right: "2.5rem",
                  paddingTop: ".8rem",
                }}
                />
                <select
                  name="district"
                  value={values.district}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={!values.state}
                >
                  <option value="" disabled>
                   DISTRICT 
                  </option>
                  {values.state &&
                    DISTRICTS[values.state]?.map((district) => (
                      <option key={district.value} value={district.value}>
                        {district.label}
                      </option>
                    ))}
                </select>
             
              {
                !errors.mobile &&
                !errors.code &&
                !errors.state &&
                errors.district &&
                touched.district && (
                  <p className="error">{t(errors.district)}</p>
                )}
            </div>
           
          

             <div className={styles.buttonSection}>
          
            <button className="vote-btn" type="submit">
              <span
             
              >  SEND OTP</span>
            </button>
          </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
