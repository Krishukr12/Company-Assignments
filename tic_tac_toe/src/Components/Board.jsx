import React, { useState } from "react";

// Css classes imports
import classes from "./Board.module.css";

// Component imports
import Square from "./Square";
import { WinnerCard } from "./WinnerCard";

const Board = () => {
  const initialState = Array(0).fill(null);

  const [state, setState] = useState(initialState);
  const [isXTurn, setIsXTurn] = useState(true);

  const handleChange = (index) => {
    if (!state[index]) {
      const copyState = [...state];
      copyState[index] = isXTurn ? "X" : "0";
      setState(copyState);
      setIsXTurn(!isXTurn);
    }
  };

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isWinner = () => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  };

  const handleReset = () => {
    setState(initialState);
  };

  const winner = isWinner();

  return (
    <div className={classes.board_container}>
      {winner ? (
        <WinnerCard handleReset={handleReset} winner={winner} />
      ) : (
        <>
          <div className={classes.board_row}>
            <Square onchangefun={() => handleChange(0)} value={state[0]} />
            <Square onchangefun={() => handleChange(1)} value={state[1]} />
            <Square onchangefun={() => handleChange(2)} value={state[2]} />
          </div>
          <div className={classes.board_row}>
            <Square onchangefun={() => handleChange(3)} value={state[3]} />
            <Square onchangefun={() => handleChange(4)} value={state[4]} />
            <Square onchangefun={() => handleChange(5)} value={state[5]} />
          </div>
          <div className={classes.board_row}>
            <Square onchangefun={() => handleChange(6)} value={state[6]} />
            <Square onchangefun={() => handleChange(7)} value={state[7]} />
            <Square onchangefun={() => handleChange(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
