import * as Yup from "yup";

const RegisterValidation = Yup.object().shape({
  uniqueCode: Yup.string()
    .required("*PLEASE ENTER A UNIQUE CODE")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{14}$/,
      "*PLEASE ENTER A VALID UNIQUE CODE",
    ),
  mobile: Yup.string()
    .required("*PLEASE ENTER A 10-DIGIT NUMBER")
    .matches(/^[6789][0-9]{9}$/, "*PLEASE ENTER A VALID NUMBER"),
  state: Yup.string().required("*PLEASE ENTER YOUR STATE"),
  city: Yup.string().required("*PLEASE ENTER YOUR CITY"),
});

const UPIValidation = Yup.object().shape({
  upi: Yup.string()
    .required("*PLEASE ENTER UPI LINKED MOBILE NUMBER")
    .matches(
      /^[6789][0-9]{9}$/,
      "*PLEASE ENTER A VALID UPI LINKED MOBILE NUMBER",
    ),
});
export { RegisterValidation, UPIValidation };
