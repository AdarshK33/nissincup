import { useEffect, useState, useCallback, useMemo } from "react";

interface CounterProps {
  targetValue: number;
  duration?: number; // in ms
}

const Counter = ({ targetValue, duration = 1000 }: CounterProps) => {
  const [count, setCount] = useState(0);

  // Calculate increment only when targetValue/duration change
  const increment = useMemo(() => {
    return targetValue / (duration / 16); // ~60fps
  }, [targetValue, duration]);

  // Memoized animation function
  const animate = useCallback(() => {
    let start = 0;

    const step = () => {
      start += increment;
      const nextValue = start < targetValue ? Math.floor(start) : targetValue;

      // ✅ Update only if value actually changed (avoids wasted renders)
      setCount((prev) => (prev !== nextValue ? nextValue : prev));

      if (nextValue < targetValue) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [increment, targetValue]);

  // Run animation whenever targetValue changes
  useEffect(() => {
    animate();
  }, [animate]);

  // Format number with commas only when count changes
  const formattedCount = useMemo(() => count.toLocaleString(), [count]);

  return <>{formattedCount}</>;
};

export default Counter;
