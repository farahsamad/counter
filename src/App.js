import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div className="App-container">
        <h2>Counter: {counter}</h2>
        <div
          className="button"
          onClick={() => {
            setCounter((c) => c + 1);
          }}
        ></div>
        <h2
          className="reset"
          onClick={() => {
            setCounter(() => 0);
          }}
        >
          Reset
        </h2>
      </div>
    </div>
  );
}

export default App;
