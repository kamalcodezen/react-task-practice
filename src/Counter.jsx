import { useState } from "react";

export default function Counter() {
  const [decrement, setDecrement] = useState(0);
  const [increment, setIncrement] = useState(0);

  const decrementHandle = () => {
    const decrementUpdate = decrement + 1;
    setDecrement(decrementUpdate);
  };
  const incrementHandle = () => {
    const incrementUpdate = increment - 1;
    setDecrement(incrementUpdate);
  };

  return (
    <div>
      <h1>Counter </h1>

      <h2 style={{ fontSize: "40px" }} className="allUse">
        Count : {decrement}
      </h2>

      <button onClick={decrementHandle} className="allUse">
        Decrement
      </button>
      
      
      <button onClick={incrementHandle} className="allUse">Increment</button>
      <button className="allUse">Reset</button>
    </div>
  );
}
