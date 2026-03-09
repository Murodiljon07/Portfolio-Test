import React from "react";

function Btn({ childeren, className, onClick }) {
  return (
    <button className={`cursor-pointer ${className}`} onClick={onClick}>
      {childeren}
    </button>
  );
}

export default Btn;
