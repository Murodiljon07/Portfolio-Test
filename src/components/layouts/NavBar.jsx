import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { path } from "../../data/pathData";

/* assets && icons */
import { RiCloseLargeFill, RiMenuFold4Line } from "react-icons/ri";

/* components */
import Btn from "../ui/Btn";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between bg-[#0F0F1EF2] h-18.25 p-4 text-white">
      <Link to={"/"} className="text-[20px]">
        Murodiljon
      </Link>

      {/* menu mobile */}
      <Btn
        className={`sm:hidden  cursor-pointer text-[22px]`}
        childeren={menu ? <RiCloseLargeFill /> : <RiMenuFold4Line />}
        onClick={() => setMenu(!menu)}
      />

      {/* mobile liks */}
      {menu && (
        <div className=" flex flex-col items-center p-8 gap-8 text-[#D1D5DC] absolute right-0 top-17.5 bg-[#0F0F1EF2]">
          {path.map((item) => (
            <Link to={item.path} className="hover:text-white ">
              {item.element}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop link */}
      <div className="hidden sm:flex gap-8 text-[#D1D5DC] ">
        {path.map((item) => (
          <Link to={item.path} className="hover:text-white ">
            {item.element}
          </Link>
        ))}
      </div>

      {/* admin hear */}
      <Btn
        children={"Hire Me"}
        className={"hidden lg:block "}
        btn_type={"main_btn"}
        onClick={() => navigate("/auth/login")}
      />
    </nav>
  );
}

export default NavBar;
