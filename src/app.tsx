import { useState } from "react";

export default function App() {

  const [val,seteval] = useState(0);

  const update = (value: number): void => {
      seteval(value + val);
      console.log(val);
  }

  return (
    <>
      <div className="clipping-container">
        <h1>test</h1>
        <h2>{val}</h2>
      </div>
      <button onClick={() => update(1)}>+</button>
    </>
  );
}