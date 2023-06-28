import React from "react";

import classes from "./WinnerCard.module.css";

export const WinnerCard = ({ winner, handleReset }) => {
  return (
    <div className={classes.Winner_Card}>
      <h3>{winner}'s Won the game</h3>
      <button onClick={handleReset}>Play Again</button>
    </div>
  );
};
