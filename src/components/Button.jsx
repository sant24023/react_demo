import React from "react";

function ButtonComp({ onClickButton, label, styleName }) {
  return (
    <button
      className={styleName}
      onClick={onClickButton}
      
    >
      {label}
    </button>
  );
}

export default ButtonComp;
