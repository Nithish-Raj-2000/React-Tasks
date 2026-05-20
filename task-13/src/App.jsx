import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (board[index] !== "") return;

    const newBoard = [...board];

    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);

    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
  };

  return (
    <div className="game-container">
      <h1>XO Game</h1>

      <h2>
        Current Player: {isXTurn ? "X" : "O"}
      </h2>

      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>

      <button onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}

export default App;