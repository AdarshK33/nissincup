

import styles from "./registration.module.scss";

 import CommonBase from "../../components/common/CommonBase";

import RegisterForm from "../Form/Registration";
import { useNavigate } from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
  //   const dispatch = useAppDispatch();



    
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
