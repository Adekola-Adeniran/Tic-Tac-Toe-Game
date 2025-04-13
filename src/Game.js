import React from "react";
import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [xIsNext, setXisNext] = useState(true);
  const [history, setHistory] = useState(Array(9).fill(null));
  const currentSquare = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    setHistory([...history, nextSquares]);
    setXisNext(!xIsNext);
  };

  const jumpTo = () => {
    // todo
  };
  const moves = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} square={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="game">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
