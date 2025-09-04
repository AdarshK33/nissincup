import { useState } from "react";
import { useAppSelector } from "../store/hooks";
import { getUserDetails } from "../store/slices/userSlice";

const Counter = () => {
  const { name } = useAppSelector(getUserDetails);
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <p>name is - {name}</p>
        <br />
        <br />
        <br />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};

export default Counter;
