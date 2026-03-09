import React, { useState } from "react";

import { authPass } from "../../data/authPass";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handelSubmit = async (e: any) => {
    e.preventDefault();

    if (authPass.email && authPass.password) {
      console.log(authPass.email, authPass.password, email, password);

      return navigate("/admin/dashboard");
    }
  };

  return (
    <form className="flex flex-col gap-4">
      <label htmlFor="" className="flex gap-2 ">
        Enter Email:
        <Input
          className="bg-none border-none"
          value={email}
          type="email"
          placeholder="Enter Email"
          onChange={(e: any) => setEmail(e.target.value)}
        />
      </label>

      <label htmlFor="" className="flex gap-2 ">
        Enter Password:
        <Input
          className="bg-none border-none"
          value={password}
          type="password"
          placeholder="********"
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </label>
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
