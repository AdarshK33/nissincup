import React from "react";
import styles from "./strip.module.scss";

interface StripesProps {
  rows?: number;
  columns?: number;
  color?: string;
  stripeWidth?: number; // in rem
  stripeHeight?: number | number[]; // in rem (single or array for per-row heights)
  gap?: number; // in rem
}

const Stripes: React.FC<StripesProps> = ({
  rows = 2,
  columns = 12,
  color = "#BDA632",
  stripeWidth = 0.3,
  stripeHeight = [2, 0.5],
  gap = 0.4,
}) => {
  return (
    <div className={styles.stripesContainer}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className={styles.stripeRow}
          style={{ gap: `${gap}rem` }}
        >
          {Array.from({ length: columns }).map((_, colIndex) => {
            const height = Array.isArray(stripeHeight)
              ? (stripeHeight[rowIndex] ?? stripeHeight[rowIndex])
              : stripeHeight;

            return (
              <span
                key={colIndex}
                className={styles.stripe}
                style={{
                  backgroundColor: color,
                  width: `${stripeWidth}rem`,
                  height: `${height}rem`,
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Stripes;
