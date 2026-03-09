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
    <nav className="flex items-center justify-between bg-[#0F0F1EF2] h-18.25 p-4 text-white">
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
        <div className="flex flex-col items-center p-8 gap-8 text-[#D1D5DC] hover:text-white absolute right-0 top-17.5 bg-[#0F0F1EF2]">
          {path.map((item) => (
            <Link to={item.path}>{item.element}</Link>
          ))}
        </div>
      )}

      {/* Desktop link */}
      <div className="hidden sm:flex gap-8 text-[#D1D5DC] hover:text-white">
        {path.map((item) => (
          <Link to={item.path}>{item.element}</Link>
        ))}
      </div>

      {/* admin hear */}
      <Btn
        childeren={"Hire Me"}
        className={"hidden lg:block "}
        onClick={() => navigate("/auth/login")}
      />
    </nav>
  );
}

export default NavBar;
