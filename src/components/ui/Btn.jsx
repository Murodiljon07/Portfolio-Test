import React from "react";

const Btn_style = {
  main_btn: "bg-[#7C3AED] text-white rounded-[14px] py-2 px-6",
};

function Btn({ childeren, className, onClick, btn_type }) {
  return (
    <button
      className={`cursor-pointer ${className} ${Btn_style[btn_type]}`}
      onClick={onClick}
    >
      {childeren}
    </button>
  );
}

export default Btn;
