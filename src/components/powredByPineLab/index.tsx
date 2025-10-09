import styles from "./powerByPineLab.module.scss";

import { IMAGES } from "../../lib/assets";
import CommonImage from "../../components/common/Image";
function PowredByPineLab() {

 
  return <>
   <div className={styles.poweredBy}>
            <span>powered by </span>&nbsp;
            <CommonImage src={IMAGES.PINE_LAB} alt="PINE" />  
          </div>
  </>
}

export default PowredByPineLab
