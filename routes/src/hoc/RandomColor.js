import React from "react";
const RandomColor = WrapperdComponent => {
  const colors = ["red", "pink", "orange", "blue", "green", "yellow"];
  const randoC = colors[Math.floor(Math.random() * 5)];
  const className = randoC + " -test";
  return props => {
    return (
      <div className={className}>
        <WrapperdComponent {...props} />
      </div>
    );
  };
};
export default RandomColor;
