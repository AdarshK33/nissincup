const ProgressBar = ({ percentage }: any) => {
  const totalBlocks = 10; // total number of blocks
  const filledBlocks = Math.round((percentage / 100) * totalBlocks);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      {/* Progress blocks */}
      <div style={{ display: "flex", gap: "0.25rem" }}>
        {[...Array(totalBlocks)].map((_, index) => (
          <div
            key={index}
            style={{
              width: "1rem",
              height: "1.5rem",
              backgroundColor: index < filledBlocks ? "#fff" : "transparent",
              border: "0.1rem solid #fff",
              visibility: index < filledBlocks ? "visible" : "hidden",
            }}
          />
        ))}
      </div>

      {/* Percentage text */}
      <span style={{ color: "#fff", fontWeight: "bold", fontSize: "1rem" }}>
        {percentage}%
      </span>
    </div>
  );
};

export default ProgressBar;