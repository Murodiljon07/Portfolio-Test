const Btn_style = {
  main_btn:
    "bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-[14px] py-2 px-6 transition",

  second_btn:
    "border border-[#7C3AED] text-white hover:bg-white hover:text-[#7C3AED] rounded-[14px] py-2 px-6 transition",
};

function Btn({ children, className = "", onClick, btn_type = "main_btn" }) {
  return (
    <button
      className={`cursor-pointer ${Btn_style[btn_type]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Btn;
