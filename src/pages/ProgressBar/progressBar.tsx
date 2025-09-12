import { useEffect, useState, useMemo, useCallback } from "react";

const ProgressBar = ({ percentage }: { percentage: number }) => {
  const totalBlocks = 10;
  const [animatedPercent, setAnimatedPercent] = useState(0);

  // Animate smoothly towards the target percentage
  useEffect(() => {
    let start = 0;
    const step = () => {
      start += 1;
      if (start <= percentage) {
        setAnimatedPercent(start);
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [percentage]);

  // Memoize calculation of filled blocks
  const filledBlocks = useMemo(
    () => Math.round((animatedPercent / 100) * totalBlocks),
    [animatedPercent, totalBlocks],
  );

  // Memoize block rendering function
  const renderBlock = useCallback(
    (index: number) => {
      const isFilled = index < filledBlocks;
      return (
        <div
          key={index}
          style={{
            width: "1rem",
            height: "1.5rem",
            backgroundColor: isFilled ? "#fff" : "transparent",
            border: "0.1rem solid #fff",
            visibility: isFilled ? "visible" : "hidden",
            transition: "background-color .5s ease",
          }}
        />
      );
    },
    [filledBlocks],
  );

  // Memoize blocks array so it doesn’t re-map every render
  const blocks = useMemo(
    () => Array.from({ length: totalBlocks }, (_, i) => renderBlock(i)),
    [totalBlocks, renderBlock],
  );

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      {/* Progress blocks */}
      <div style={{ display: "flex", gap: "0.25rem" }}>{blocks}</div>

      {/* Percentage text */}
      <span style={{ color: "#fff", fontWeight: "bold", fontSize: "1rem" }}>
        {animatedPercent}%
      </span>
    </div>
  );
};

export default ProgressBar;
