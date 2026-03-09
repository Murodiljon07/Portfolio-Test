import { useState } from "react";

import { Link } from "react-router-dom";
import { path } from "../../data/pathData";

/* assets && icons */
import { FiMenu } from "react-icons/fi";
import Btn from "../ui/Btn";

function NavBar() {
  const [menu, setMenu] = useState(true);
  return (
    <nav className="flex items-center justify-between bg-[#0F0F1EF2] h-18.25 p-4 text-white">
      <Link to={"/"}>Murodiljon</Link>

      {menu ? (
        <Btn
          className={`sm:hidden sm:${setMenu(false)} cursor-pointer h-6`}
          childeren={<FiMenu />}
        />
      ) : (
        <div className="hidden sm:flex gap-8 text-[#D1D5DC] hover:text-white">
          {path.map((item) => (
            <Link to={item.path}>{item.element}</Link>
          ))}
        </div>
      )}

      <Btn childeren={"Hire Me"} className={"hidden lg:block "} />
    </nav>
  );
}

export default NavBar;
