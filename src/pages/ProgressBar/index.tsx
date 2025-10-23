import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./progress.module.scss";

const ProgressBar = () => {
  const { votes } = useSelector((state: RootState) => state.auth);
  // console.log(votes, "votes");
  

    const leftVotes = votes?.chickenVotes??0;
    const rightVotes = votes?.eggVotes??0;
  const totalVotes = leftVotes + rightVotes;
  const { leftPercent, rightPercent } = useMemo(() => {
    if (totalVotes === 0) return { leftPercent: 50, rightPercent: 50 };
    return {
      leftPercent:  votes?.chickenPercentage,
      rightPercent:votes?.eggPercentage,
    };
  }, [leftVotes, rightVotes, totalVotes]);



  // Minimum gap width to prevent text overlap (in px)
  const gapWidth = Math.max(3, 0.03 * window.innerWidth); // min 5px or 2vw

  return (
    <div className={styles.progressContainer}>
      {/* LEFT BAR */}
      <div
        className={`${styles.progressSegment} ${styles.left}   ${leftPercent < 24 ? styles.rightCenter : ""}`}
        style={{ width: `calc(${leftPercent}% - ${gapWidth / 2}px)` }}
      >
        <span className={styles.leftText}>
          {leftVotes}
          {leftPercent > 24 && " VOTES"}
        </span>
      </div>

      {/* GAP */}
      <div
        className={styles.gap}
        style={{
          width: `${gapWidth}px`,
          minWidth: "3px",
        }}
      ></div>

      {/* RIGHT BAR */}

      <div
        className={`${styles.progressSegment} ${styles.right}  
        ${rightPercent < 24 ? styles.rightCenter : ""}`}
        style={{ width: `calc(${rightPercent}% - ${gapWidth / 2}px)` }}
      >
        <span className={styles.rightText}>
          {rightVotes}
          {rightPercent > 24 && " VOTES"}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
