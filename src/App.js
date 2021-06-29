import "./styles.css";
import Counter from "./Counter";
import Checkbox from "./Checkbox";
import Dispatch from "./Dispatch";

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
      <div>
        <h3>Dispatching actions</h3>
        <Dispatch />
      </div>
    </div>
  );
}
