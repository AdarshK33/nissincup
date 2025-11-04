import { Form, Formik } from "formik";
import { ChangeEvent, useEffect, useState } from "react";
import { RegisterValidation } from "../../schema/validationSchema.ts";

import { handleInputChange } from "../../lib/validationUtils.ts";

import { useTranslation } from "react-i18next";

import styles from "./registration.module.scss";
import API from "../../api/index.ts";
import { ERROR_IDS } from "../../api/utils.ts";
import {
  MODAL_TYPES,
  useGlobalModalContext,
} from "../../helpers/GlobalModal.tsx";
import { IMAGES } from "../../lib/assets.ts";
import Image from "../../components/common/Image.tsx";
import { EVENTS, trackEvent } from "../../lib/analytics.ts";
import QuestionCircle from "../../components/questionMark/index.tsx";

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
// declare const turnstile: any;

const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const { t } = useTranslation();
  const { showModal } = useGlobalModalContext();
  const [apiState, setApiState] = useState<State[]>([]);
  const [apiCity, setApiCity] = useState<City[]>([]);
  const uniqueCode = "AB1X245YXXXXXXXX";

  // const [cloudFlareToken, setCloudFareToken] = useState("");

  // const [reset, setReset] = useState(false);

  // const widgetId = useRef<string | null>(null);
  // const timerRef = useRef<NodeJS.Timeout | null>(null);

  // const initializeTurnstileWidget = () => {
  //   const siteKey = import.meta.env.VITE_API_CLOUDFARE_SITE_KEY;

  //   if (!siteKey) {
  //     console.error(
  //       "Cloudflare Turnstile site key is not configured. Please set VITE_API_CLOUDFARE_SITE_KEY in your environment file."
  //     );
  //     return;
  //   }

  //   if (typeof turnstile !== "undefined") {
  //     turnstile.ready(() => {
  //       if (!widgetId.current) {
  //         widgetId.current = turnstile.render("#cf-turnstile-otp", {
  //           sitekey: siteKey,
  //           theme: "light",
  //           callback: (token: string) => {
  //             // alert("token" + token);
  //             setCloudFareToken(token);
  //           },
  //         });
  //       }
  //     });
  //   } else {
  //     console.error("Turnstile script not loaded. Retrying...");
  //     if (timerRef.current) {
  //       clearTimeout(timerRef.current);
  //     }
  //     timerRef.current = setTimeout(() => {
  //       initializeTurnstileWidget();
  //     }, 1000);
  //   }
  // };

  // useEffect(() => {
  //   initializeTurnstileWidget();
  // }, [reset]);

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
        limit: "",
      }}
      validationSchema={RegisterValidation}
      onSubmit={(values, errors) => {
        //   if (!cloudFlareToken) {
        //   errors.setErrors({
        //     limit: "Please complete the captcha verification",
        //   });
        //   setReset((prev) => !prev);
        // }
        // console.log(values, "submit");

        API.register(values)
          .then(() => {
            trackEvent(EVENTS.SEND_OTP_CLICKED);
            onSuccess();
          })
          .catch((err) => {
            // console.log("error", err);

            //  setCloudFareToken("");
            // if (widgetId.current) {
            //   turnstile.reset(widgetId.current);
            // }
            // setReset((prev) => !prev);
            const { messageId, message } = err;
            switch (messageId) {
              case ERROR_IDS.INVALID_MOBILE:
                errors.setErrors({
                  mobile: "Invalid mobile number",
                });
                break;
              case ERROR_IDS.INVALID_CODE:
                errors.setErrors({
                  uniqueCode: "Invalid unique code",
                });
                break;

              case ERROR_IDS.INVALID_STATE:
                errors.setErrors({
                  state: "Invalid state",
                });
                break;
              case ERROR_IDS.INVALID_CITY:
                errors.setErrors({
                  state: "Invalid city",
                });
                break;

              default:
                errors.setErrors({ limit: message });
                break;
            }
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
          <Form onSubmit={handleSubmit} className={styles.registerform}>
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
                <p className={styles.error}>{t(errors.mobile)}</p>
              )}
            </div>
            <div className={styles.inputGroup}>
              <div
                className={styles.questionImg}
                onClick={() => {
                  // console.log("click");
                  trackEvent(EVENTS.FIND_UNIQUE_CODE_CLICKED);
                  showModal(MODAL_TYPES.UNIQUE_CODE);
                }}
              >
                <QuestionCircle />
              </div>

              {/* <Image
                src={IMAGES.UNIQUE_QUESTION_IMG}
                alt="UNIQUE_CODE_IMG"
                className={styles.questionImg}
                onClick={() => {
                  // console.log("click");
                     trackEvent(EVENTS.FIND_UNIQUE_CODE_CLICKED);
                  showModal(MODAL_TYPES.UNIQUE_CODE);
                }}
              /> */}

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
                <p className={styles.error}>{t(errors.uniqueCode)}</p>
              )}
            </div>
            <div className={styles.inputGroup}>
              <Image
                src={IMAGES.SELECT_DOWN}
                alt="down"
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
                  <option key={state.id} value={state?.state}>
                    {state?.state}
                  </option>
                ))}
              </select>

              {!errors.mobile &&
                !errors.uniqueCode &&
                errors.state &&
                touched.state && (
                  <p className={styles.error}>{t(errors.state)}</p>
                )}
            </div>
            <div className={styles.inputGroup}>
              <Image
                src={IMAGES.SELECT_DOWN}
                alt="down"
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

              <p className={styles.messageSection}>
                {!errors.mobile &&
                  !errors.uniqueCode &&
                  !errors.state &&
                  errors.city &&
                  touched.city && (
                    <span className={styles.message}>{t(errors.city)}</span>
                  )}
              </p>
              <p className={styles.messageSection}>
                {errors.limit && (
                  <span className={styles.message}>*{errors.limit}</span>
                )}
              </p>
            </div>

            <div id="cf-turnstile-otp"></div>

            <div className={styles.buttonSection}>
              <button className="vote-btn w-60" type="submit">
                <span> SEND OTP</span>
              </button>
            </div>
            <div className={styles.uniqueInfo}>
              <div className={styles.codeBox}>
                <Image
                  src={IMAGES.LID_CODE_BG}
                  alt="Unique Code Example Image"
                />
                <p className={styles.codeText}>{uniqueCode} &nbsp;</p>
              </div>
              <div className={styles.uniqueFindImg}>
                <Image src={IMAGES.FIND_YOUR_UNIQUE_CODE} alt="FindUniqueId" />
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
