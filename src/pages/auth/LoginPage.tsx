import React, { useState } from "react";

import { authPass } from "../../data/authPass";
import { useNavigate } from "react-router-dom";

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
      <label htmlFor="" className="flex gap-2">
        Enter Email:
        <input
          value={email}
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label htmlFor="" className="flex gap-2">
        Enter Password:
        <input
          value={password}
          type="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={handelSubmit}>Enter</button>
    </form>
  );
}

export default LoginPage;
