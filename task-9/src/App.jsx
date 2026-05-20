import React, { useReducer } from "react";
import "./App.css";

// Initial State
const initialState = {
  currentLight: "red",
};

// Reducer Function
const trafficReducer = (state, action) => {
  switch (action.type) {
    case "NEXT":
      if (state.currentLight === "red") {
        return { currentLight: "yellow" };
      } else if (state.currentLight === "yellow") {
        return { currentLight: "green" };
      } else {
        return { currentLight: "red" };
      }

    case "RESET":
      return { currentLight: "red" };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(
    trafficReducer,
    initialState
  );

  return (
    <div className="container">
      <h1>Traffic Light Controller</h1>

      {/* Traffic Light Box */}
      <div className="traffic-light">
        <div
          className={`light red ${
            state.currentLight === "red" ? "active" : ""
          }`}
        ></div>

        <div
          className={`light yellow ${
            state.currentLight === "yellow" ? "active" : ""
          }`}
        ></div>

        <div
          className={`light green ${
            state.currentLight === "green" ? "active" : ""
          }`}
        ></div>
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button onClick={() => dispatch({ type: "NEXT" })}>
          Next
        </button>

        <button onClick={() => dispatch({ type: "RESET" })}>
          Reset
        </button>
      </div>

      {/* Current Status */}
      <h2>Current Light: {state.currentLight.toUpperCase()}</h2>
    </div>
  );
};

export default App;