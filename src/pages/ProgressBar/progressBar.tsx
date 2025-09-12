import { useEffect, useState } from "react";

const ProgressBar = ({ percentage }: { percentage: number }) => {
  const totalBlocks = 10;
  const [animatedPercent, setAnimatedPercent] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = () => {
      start += 1;
      if (start <= percentage) {
        setAnimatedPercent(start);
        requestAnimationFrame(step); // smooth animation
      }
    };
    requestAnimationFrame(step);
  }, [percentage]);

  const filledBlocks = Math.round((animatedPercent / 100) * totalBlocks);

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
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Percentage text */}
      <span style={{ color: "#fff", fontWeight: "bold", fontSize: "1rem" }}>
        {animatedPercent}%
      </span>
    </div>
  );
};

export default ProgressBar;

