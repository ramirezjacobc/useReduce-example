import { useReducer } from "react";

function Checkbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
    </>
  );
}

export default Checkbox;
