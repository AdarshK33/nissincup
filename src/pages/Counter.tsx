import { useEffect, useState } from "react";

const Counter = ({ targetValue, duration = 1000 }: { targetValue: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetValue / (duration / 16); // ~60fps
    const step = () => {
      start += increment;
      if (start < targetValue) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(targetValue); // final number
      }
    };
    requestAnimationFrame(step);
  }, [targetValue, duration]);

  return <>{count.toLocaleString()}</>; // format with commas if big
};

export default Counter;
