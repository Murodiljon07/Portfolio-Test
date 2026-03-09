import React from "react";

function Input({ type, placeholder, value, className, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${className} rounded-[12px] px-4 py-2 bg-[#0F0F1E] text-white border border-gray-50 overflow-x-auto outline-none`}
    />
  );
}

export default Input;
