
import styles from "./question.module.scss";



const QuestionCircle = () => {
  // const circleStyle: React.CSSProperties = {
  //   ["--circle-size" as any]: `${size}rem`,
  //   ["--circle-border" as any]: color,
  // };

  return (
    <div
      className={styles.qCircle}
      // style={circleStyle}
      aria-label="question icon"
    >
      <span className={styles.mark}>?</span>
    </div>
  );
};

export default QuestionCircle;
