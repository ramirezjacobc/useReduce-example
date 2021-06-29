import { useReducer } from "react";

function Counter() {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => setNumber(1)}>+1</button>
    </>
  );
}

export default Counter;
