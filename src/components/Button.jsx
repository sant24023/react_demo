import React from "react";

function Button({ onClickButton, label }) {
  return <button onClick={onClickButton}>{label}</button>;
}

export default Button;
