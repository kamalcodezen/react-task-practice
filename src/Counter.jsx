import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementHandle = () => {
    const updateCount = count + 1;
    setCount(updateCount);
  };

  const decrementHandle = () => {
    const updateCount = count - 1;
    setCount(updateCount);
  };

  const resetHandle = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter </h1>

      <h2 style={{ fontSize: "40px" }} className="allUse">
        Count : {count < 0 ? "Wrong Number" : count}
      </h2>

      <button onClick={incrementHandle} className="allUse">
        Increment
      </button>

      <button onClick={decrementHandle} className="allUse">
        Decrement
      </button>

      <button onClick={resetHandle} className="allUse">
        Reset
      </button>
    </div>
  );
}
