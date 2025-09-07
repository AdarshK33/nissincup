import { useState } from "react";

import styles from "./registration.module.scss";
import { DISTRICT, STATES } from "../../lib/consts";
import down from "../../assets/images/select_down.svg";
import CommonBase from "../../components/common/CommonBase";

function Registration() {
  //   const navigate = useNavigate();
  //   const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<any>({
    phoneNumber: "",
    voucher: "",//UNIQUE CODE
    state: "",
    district: "",
  });

  const [errors, setErrors] = useState<any>({});

  const [currentStep, setCurrentStep] = useState<string | null>(null);

  const validators: Record<string, (val: any) => string | null> = {
    phoneNumber: (val) => {
      if (!val) return "**Mobile number is required";
      if (!/^[6-9]\d{9}$/.test(val))
        return "**Please enter a valid 10-digit mobile number";
      return null;
    },
    //UNIQUE CODE
    voucher: (val) => {
      if (!val) return "**Please enter a unique code";
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{12}$/.test(val))
        return "**Please enter a valid voucher code";
      return null;
    },
    state: (val) => (!val ? "**Please select a state" : null),
    district: (val) => (!val ? "**Please select a district" : null),
  };

  // Find first invalid field
  const findFirstError = (data: typeof formData) => {
    
    for (const key of Object.keys(validators)) {
        
      const error = validators[key](data[key as keyof typeof formData]);
      if (error) return { field: key, message: error };
    }
    return null;
  };

  const validateField = (name: string, val: any, updatedData: any) => {
    const error = validators[name](val);
    if (!error) {
      // ✅ clear this error
      setErrors((prev: any) => ({ ...prev, [name]: "" }));

      // ✅ move to next invalid field
      const nextError = findFirstError(updatedData);
      if (nextError) {
        setCurrentStep(nextError?.field);
        setErrors({ [nextError?.field]: nextError.message });
      } else {
        setCurrentStep(null);
        setErrors({});
      }
    } else {
      setErrors({ [name]: error });
      setCurrentStep(name);
    }
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e?.target;
    let val: any = type === "checkbox" ? checked : value;

    // phone only digits
    if (name === "phoneNumber") {
      val = val.replace(/\D/g, "").slice(0, 10);
    }
    // uppercase voucher
  if (name === "voucher") {
    val = val.toUpperCase().slice(0, 12);
  }
    let updatedData: any;
    setFormData((prev: any) => {
      if (name === "state") {
        updatedData = { ...prev, state: val, district: "" };
        return updatedData;
      }
      updatedData = { ...prev, [name]: val };
      return updatedData;
    });
    // Validate only current step field live
    if (currentStep === name) {
      validateField(name, val, updatedData);
    }
  };

  const handleKeyUp = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name } = e?.currentTarget;
    if (currentStep === name) {
      validateField(name, formData[name as keyof typeof formData], formData);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const firstError = findFirstError(formData);
    if (firstError) {
      setCurrentStep(firstError?.field);
      setErrors({ [firstError?.field]: firstError?.message });
      return;
    }

    // ✅ all valid → submit form
    console.log("Form submitted:", formData);

    // api calling.......

      // navigate("/verifyOtp");
  };


  
   

  return (
    <>
      <CommonBase>
        <div className={styles.formSection}>
          <form onSubmit={handleSubmit} className="form">
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="phoneNumber"
                inputMode="numeric"
                pattern="\d*"
                value={formData.phoneNumber}
                onChange={handleChange}
                onKeyDown={(e) => {
                  // block non-numeric keys (allow Backspace, Delete, Arrow keys, Tab)
                  if (
                    !/[0-9]/.test(e.key) &&
                    e.key !== "Backspace" &&
                    e.key !== "Delete" &&
                    e.key !== "ArrowLeft" &&
                    e.key !== "ArrowRight" &&
                    e.key !== "Tab"
                  ) {
                    e.preventDefault();
                  }
                }}
                onPaste={(e) => {
                  const paste = e.clipboardData.getData("text");
                  if (!/^\d+$/.test(paste)) {
                    e.preventDefault(); // block if pasted content is not digits
                  }
                }}
                maxLength={10}
                placeholder="MOBILE"
                autoComplete="off"
                onKeyUp={handleKeyUp}
              />
              {errors.phoneNumber && (
                <p className={styles.validation}>{errors.phoneNumber}</p>
              )}
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="voucher"
                  placeholder="UNIQUE CODE"
                value={formData.voucher}
                     onChange={handleChange}
                // onChange={(e) => {
                //   const upper = e.target.value.toUpperCase();
                //   setFormData({ ...formData, voucher: upper });
                // }}
                maxLength={12}
                onKeyUp={handleKeyUp}
                autoComplete="off"
              
              />
         

              {errors.voucher && (
                <p className={styles.validation}>{errors.voucher}</p>
              )}
            </div>

            <div className={`${styles.inputGroup}`}>
              <img
                src={down}
                alt={"select"}
                style={{
                  position: "absolute",
                  right: "2.5rem",
                  paddingTop: ".8rem",
                }}
              />
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                className={styles.customSelect}
              >
                <option value="" selected>
                  Select State
                </option>

                {(STATES ?? []).map((name, i) => {
                  return (
                    <option key={i} value={name}>
                      {name}
                    </option>
                  );
                })}
              </select>
              {errors.state && (
                <p className={styles.validation}>{errors.state}</p>
              )}
            </div>
            <div className={`${styles.inputGroup}`}>
              <img
                src={down}
                alt={"select"}
                 style={{
                  position: "absolute",
                  right: "2.5rem",
                  paddingTop: ".8rem",
                }}
              />
              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                id="SD"
                className={styles.customSelect}
                disabled={!formData.state}
              >
                <option value="" disabled selected hidden>
                  Select District
                </option>

                {(DISTRICT ?? []).map((name, i) => (
                  <option key={i} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              {errors.district && (
                <p className={styles.validation}>{errors.district}</p>
              )}
            </div>

           <div className={styles.buttonSection}>
          
            <button className="vote-btn">
              <span
              >SEND OTP</span>
            </button>
          </div>
              {/* <ButtonComponent 
          className={styles.button}
          type="button"
          ButtonName="SUBMIT YOUR VOTE"
          /> */}
        
          </form>
        </div>
        
      </CommonBase>
    </>
  );
}

export default Registration;
