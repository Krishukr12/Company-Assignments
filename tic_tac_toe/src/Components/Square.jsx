import React from "react";

const Square = ({ value, onchangefun }) => {
  return (
    <div
      onClick={onchangefun}
      style={{
        border: "1px solid",
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{value}</h1>
    </div>
  );
};

export default Square;
