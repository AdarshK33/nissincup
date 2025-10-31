import styles from "./progress.module.scss";

const ProgressBar = ({ percentage }: any) => {
  const totalBlocks = 10; // total number of blocks
  const filledBlocks = Math.floor((percentage / 100) * totalBlocks);

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

      {/* Percentage text */}
      <span className={styles.percentageText}>{percentage}%</span>
    </div>
  );
};

export default ProgressBar;