import React, { useState } from "react";
import "./App.css";

function App() {
  // Counter State
  const [count, setCount] = useState(0);

  // Login State
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // Handlers
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);
  const toggleLogin = () => setIsUserLoggedIn(!isUserLoggedIn);

  return (
    <div className="container">
      <h1>Counter App</h1>

      {/* Counter UI */}
      <div className="counter-box">
        <h2>{count}</h2>

        <div className="buttons">
          <button onClick={handleIncrement} className="btn green">
            Increment
          </button>
          <button onClick={handleDecrement} className="btn red">
            Decrement
          </button>
          <button onClick={handleReset} className="btn gray">
            Reset
          </button>
        </div>
      </div>

      {/* Conditional Rendering */}
      <div className="login-box">
        <button onClick={toggleLogin} className="btn blue">
          {isUserLoggedIn ? "Logout" : "Login"}
        </button>

        {isUserLoggedIn ? (
          <div className="welcome">Welcome Back </div>
        ) : (
          <div className="login">Please Login </div>
        )}
      </div>
    </div>
  );
}

export default App;