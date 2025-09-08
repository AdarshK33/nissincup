import { useState } from "react";

import styles from "./registration.module.scss";
// import { DISTRICT, STATES } from "../../lib/consts";
// import down from "../../assets/images/select_down.svg";
// // import CommonBase from "../../components/common/CommonBase";
import { lazy } from "react";

const  CommonBase  = lazy(() => import("../../components/common/CommonBase"));
import RegisterForm from "../Form/Registration";
import { useNavigate } from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
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


    
  const handleSubmitForm = () => {
  
navigate("/verifyOtp");
    
  }
   

  return (
    <>
      <CommonBase>
        <div className={styles.formSection}>
          <RegisterForm onSuccess={() =>  handleSubmitForm()} />
        </div>
        
      </CommonBase>
    </>
  );
}

export default Registration;
