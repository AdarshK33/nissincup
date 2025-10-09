import styles from "./registration.module.scss";

import CommonBase from "../../components/common/CommonBase";

import RegisterForm from "../Form/Registration";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../lib/consts";
import PowredByPineLab from "../../components/powredByPineLab";

function Registration() {
  const navigate = useNavigate();
  //   const dispatch = useAppDispatch();

  const handleSubmitForm = () => {
    navigate(ROUTES.VERIFYOTP);
  };

  return (
    <>
      <CommonBase>
        <div className={styles.formSection}>
          <RegisterForm onSuccess={() => handleSubmitForm()} />
        </div>
        
      </CommonBase>
    </>
  );
}

export default Registration;
