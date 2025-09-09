import * as Yup from "yup";

const RegisterValidation = Yup.object().shape({
  code: Yup.string()
    .required("*PLEASE ENTER A UNIQUE CODE")
    .matches(/^[a-zA-Z0-9_-]{6,12}$/, "*PLEASE ENTER A VALID UNIQUE CODE"),
  mobile: Yup.string()
    .required("*PLEASE ENTER A 10-DIGIT NUMBER")
    .matches(/^[6789][0-9]{9}$/, "*PLEASE ENTER A VALID NUMBER"),
  state: Yup.string().required("*PLEASE ENTER YOUR STATE"),
  district: Yup.string().required("*PLEASE ENTER YOUR DISTRICT"),
});



export { RegisterValidation };
