import * as Yup from "yup";
const RegisterValidation = Yup.object().shape({

  code: Yup.string()
    .required("*Please enter unique code")
    .matches(/^[a-zA-Z0-9_-]{6,12}$/, "*Please enter valid unique code"),
  mobile: Yup.string()
    .required("*Please enter a 10-digit number")
    .matches(/^[6789][0-9]{9}$/, "*Please enter a valid number"),
  state: Yup.string().required("*Please enter your state"),
  district: Yup.string().required("*Please enter your district"),

});



const OtpValidation = Yup.object().shape({
  otp: Yup.string()
    .required("verifyOtpPage.errors.otp")
    .matches(/^[0-9]{6}$/, "verifyOtpPage.errors.otp"),
});

const UniqueCodeValidation = Yup.object().shape({
  uniqueCode: Yup.string()
    .required("Please enter a valid Unique Code")
    .length(10, "Please enter a valid Unique Code"),
});


export {
  RegisterValidation,
  OtpValidation,

  UniqueCodeValidation,

};
