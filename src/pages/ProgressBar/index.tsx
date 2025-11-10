import { useEffect, useState } from "react";
import styles from "./progress.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
interface ProgressBarProps {
  percentage: number;
  id: "CHICKEN" | "EGG"; // identify which one this is
}
const ProgressBar = ({ percentage, id }: ProgressBarProps) => {
  const totalBlocks = 10;
  const filledBlocks = Math.floor((percentage / 100) * totalBlocks);
  const { footerAnimation } = useSelector((state: RootState) => state.auth);


  const [animate, setAnimate] = useState(false);

    useEffect(() => {
    if (footerAnimation === id) {
      // Trigger only for the matching ID
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 900);
      return () => clearTimeout(timer);
    }
  }, [footerAnimation, id]);

  return (
    <div className={styles.progressContainer}>
      {/* Progress blocks */}
      <div className={styles.blocksWrapper}>
        {[...Array(totalBlocks)].map((_, index) => (
          <div
            key={index}
            style={{
              width: ".8rem",
              height: "2.4rem",
              backgroundColor: index < filledBlocks ? "#fff" : "transparent",
              border: "0.1rem solid #fff",
              visibility: index < filledBlocks ? "visible" : "hidden",
            }}
          />
        ))}
      </div>

      {/* Percentage text with animation */}
   <span
        className={`${styles.percentageText} ${
          animate
            ? id === "CHICKEN"
              ? styles.animateChicken
              : styles.animateEgg
            : ""
        }`}
      >
        {percentage}%
      </span>
    </div>
  );
};

export default ProgressBar;
