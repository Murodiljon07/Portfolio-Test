import React, { useState } from "react";

import { authPass } from "../../data/authPass";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import { toast } from "react-toastify";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = async (e: any) => {
    e.preventDefault();

    if (email === authPass.email && Number(password) === authPass.password) {
      console.log(authPass.email, authPass.email, password, password);

      localStorage.setItem("token", "login");

      return navigate("/admin/dashboard");
    } else {
      toast.warning("Ma'lumotlar mos kelmadi");
    }
  };

  return (
    <form className="flex flex-col gap-6">
      <div className="relative">
        <Input
          type="email"
          value={email}
          placeholder=" "
          className="peer w-full border rounded-md px-3 py-2 bg-transparent outline-none"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <label
          className="absolute left-3 -top-2.5 bg-[#0F0F1E] px-1 text-sm text-gray-400
 peer-focus:text-purple-500"
        >
          Enter Email
        </label>
      </div>

      <div className="relative">
        <Input
          type="password"
          value={password}
          placeholder=" "
          className="peer w-full border rounded-md px-3 py-2 bg-transparent outline-none"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <label
          className="absolute left-3 -top-2.5 bg-[#0F0F1E] px-1 text-sm text-gray-400
 peer-focus:text-purple-500"
        >
          Enter Password
        </label>
      </div>

      <button
        onClick={handelSubmit}
        className="bg-[#7C3AED] text-white rounded-[14px] py-2 px-6 cursor-pointer"
      >
        Enter
      </button>
    </form>
  );
}

export default LoginPage;
