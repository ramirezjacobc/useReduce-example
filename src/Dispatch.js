import { useReducer } from "react";

const initialState = {
  message: "Hi"
};

function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return {
        message: `Hey! I just said ${state.message}`
      };
    case "wishper":
      return {
        message: `excuse me! I just said ${state.message}`
      };
  }
}

function Dispatch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
      <button onClick={() => dispatch({ type: "wishper" })}>WISHPER</button>
    </>
  );
}

export default Dispatch;
