import { Form, Formik } from "formik";
import { ChangeEvent, useEffect, useState } from "react";
import { RegisterValidation } from "../../schema/validationSchema.ts";

import { handleInputChange } from "../../lib/validationUtils.ts";

import { useTranslation } from "react-i18next";

import down from "../../assets/images/select_down.svg";
import question from "../../assets/images/QuestionUniqueCode.png";

import styles from "../Registration/registration.module.scss";
import API from "../../api/index.ts";
import { ERROR_IDS } from "../../api/utils.ts";
import { MODAL_TYPES, useGlobalModalContext } from "../../helpers/GlobalModal.tsx";

type RegisterFormProps = {
  onSuccess: () => void;
};
type City = {
  id: number;
  city: string;
};

type State = {
  id: number;
  state: string;
};

const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const { t } = useTranslation();
const { showModal } = useGlobalModalContext();
  const [apiState, setApiState] = useState<State[]>([]);
  const [apiCity, setApiCity] = useState<City[]>([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const resGetState: any = await API.getState();
        if (resGetState) {
          // handle response
          setApiState(resGetState?.data);
        }
      } catch (err) {
        console.error("Error fetching states:", err);
      }
    };

    fetchStates();
  }, []);

  return (
    <Formik
      key="register-form"
      initialValues={{
        mobile: "",
        uniqueCode: "",
        state: "",
        city: "",
      }}
      validationSchema={RegisterValidation}
      onSubmit={(values, { setErrors }) => {
        // console.log(values, "submit");

        API.register({ ...values, uniqueCode: values.uniqueCode.trim() })
          .then(() => {
            onSuccess();
          })
          .catch((err) => {
            const { messageId, message } = err;
            const fieldMap: Record<string, keyof typeof values> = {
              [ERROR_IDS.INVALID_CODE]: "uniqueCode",
              [ERROR_IDS.INVALID_MOBILE]: "mobile",
              [ERROR_IDS.INVALID_STATE]: "state",
              [ERROR_IDS.INVALID_CITY]: "city",
              [ERROR_IDS.DEFAULT_ERROR]: "city",
            };
            const errorField = fieldMap[messageId] || "city";
            setErrors({ [errorField]: message });
          });
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
                    "number",
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
              {errors.mobile && touched.mobile && (
                <p className="error">{t(errors.mobile)}</p>
              )}
            </div>
            <div className={styles.inputGroup}>
               <img
                src={question}
                alt="question"
                 loading="eager"
              fetchPriority="high" 
                decoding="async"
                className={styles.questionImg}
                 onClick={() => {
                  console.log("click");
                             showModal(MODAL_TYPES.UNIQUE_CODE);
                            }}
              />
              <input
                autoComplete="off"
                type="text"
                maxLength={14}
                name="uniqueCode"
                onChange={handleChange}
                value={values?.uniqueCode?.toUpperCase()}
                onBlur={handleBlur}
                placeholder="UNIQUE CODE"
              />
              {!errors.mobile && errors.uniqueCode && touched.uniqueCode && (
                <p className="error">{t(errors.uniqueCode)}</p>
              )}
            </div>
            <div className={styles.inputGroup}>
              <img
                src={down}
                alt="down"
                 loading="eager"
              fetchPriority="high" 
                decoding="async"
                className={styles.arrowImg}
              />
              <select
                name="state"
                value={values.state}
                // onChange={handleChange}
                onChange={async (event) => {
                  const newState = event.target.value;

                  // Reset city when state changes
                  handleChange(event);
                  // Reset city field in formik
                  handleChange({
                    target: {
                      name: "city",
                      value: "",
                    },
                  });
                  // Optional: clear city list and disable until API fetch
                  // setApiCitY();

                  try {
                    const resGetCity: any = await API.fetchCity(newState);

                    if (resGetCity) {
                      // console.log(resGetCity?.data,"ccccccccccc")
                      setApiCity(resGetCity?.data);
                    }
                  } catch (err) {
                    console.error("Error fetching cities:", err);
                  }
                }}
                onBlur={handleBlur}
              >
                <option value="" disabled>
                  STATE
                </option>
                {(apiState ?? []).map((state) => (
                  <option key={state.id} value={state.state}>
                    {state.state}
                  </option>
                ))}
              </select>

              {!errors.mobile &&
                !errors.uniqueCode &&
                errors.state &&
                touched.state && <p className="error">{t(errors.state)}</p>}
            </div>
            <div className={styles.inputGroup}>
              <img
                src={down}
                alt="down"
                loading="eager"
              fetchPriority="high" 
                decoding="async"
                className={styles.arrowImg}
               
              />
              <select
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={!values.state}
              >
                <option value="" disabled>
                  CITY
                </option>
                {values.state &&
                  (apiCity ?? [])?.map((city) => (
                    <option key={city.id} value={city.city}>
                      {city.city}
                    </option>
                  ))}
              </select>

              {!errors.mobile &&
                !errors.uniqueCode &&
                !errors.state &&
                errors.city &&
                touched.city && <p className="error">{t(errors.city)}</p>}
            </div>

            <div className={styles.buttonSection}>
              <button className="vote-btn w-60" type="submit">
                <span> SEND OTP</span>
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
