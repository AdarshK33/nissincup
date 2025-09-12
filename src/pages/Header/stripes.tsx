import React, { useMemo } from "react";
import styles from "./strip.module.scss";

interface StripesProps {
  rows?: number;
  columns?: number;
  color?: string;
  stripeWidth?: number; // in rem
  stripeHeight?: number | number[]; // in rem (single or array for per-row heights)
  gap?: number; // in rem
}

const Stripes: React.FC<StripesProps> = React.memo(
  ({
    rows = 2,
    columns = 12,
    color = "#BDA632",
    stripeWidth = 0.3,
    stripeHeight = [2, 0.5],
    gap = 0.4,
  }) => {
    // Precompute row data so we don’t rebuild arrays on each render
    const rowData = useMemo(
      () =>
        Array.from({ length: rows }).map((_, rowIndex) => {
          const height = Array.isArray(stripeHeight)
            ? stripeHeight[rowIndex] ?? stripeHeight[0]
            : stripeHeight;

          const columnsArr = Array.from({ length: columns }).map((_, colIndex) => ({
            key: colIndex,
            height,
          }));

          return { key: rowIndex, columnsArr };
        }),
      [rows, columns, stripeHeight]
    );

    return (
      <div className={styles.stripesContainer}>
        {rowData.map((row) => (
          <div
            key={row.key}
            className={styles.stripeRow}
            style={{ gap: `${gap}rem` }}
          >
            {row.columnsArr.map((col) => (
              <span
                key={col.key}
                className={styles.stripe}
                style={{
                  backgroundColor: color,
                  width: `${stripeWidth}rem`,
                  height: `${col.height}rem`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
);

export default Stripes;
