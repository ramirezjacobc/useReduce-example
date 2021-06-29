import "./styles.css";
import Counter from "./Counter";
import Checkbox from "./Checkbox";

export default function App() {
  return (
    <div className="App">
      <div>
        <h3>Counter</h3>
        <Counter />
      </div>
      <div>
        <h3>Toggle checkbox</h3>
        <Checkbox />
      </div>
    </div>
  );
}
