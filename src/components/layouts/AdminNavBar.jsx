import { useState } from "react";

import { aboutReq } from "../../services/about.service";
import Input from "../ui/Input";
import Btn from "../ui/Btn";

function AdminNavBar() {
  /* forma */
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [tgLink, setTgLink] = useState("");
  const [github, setGithub] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [role, setRole] = useState("");

  const hamdlesubmit = (e) => {
    e.preventDefault();

    async function postMe() {
      try {
        const res = aboutReq.post({
          name,
          bio,
          tgLink,
          github,
          linkedIn,
          role,
        });

        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }

    postMe();
  };

  return (
    <nav className="py-8 px-20">
      <img
        src=""
        alt=""
        className="h-[250px] w-[250px] rounded-[50%] bg-black"
      />

      <div className="mt-[50px] flex flex-col gap-1 items-start">
        <label htmlFor="" className="flex flex-col text-white font-bold">
          Name
          <Input type={"text"} onChange={(e) => setName(e.target.value)} />
        </label>
        <label htmlFor="" className="flex flex-col text-white font-bold">
          Bio
          <textarea
            name="bio"
            id="bio"
            onChange={(e) => setBio(e.target.value)}
            className="rounded-[12px] px-4 py-2 bg-[#0F0F1E] text-white overflow-y-auto border border-gray-50 outline-none"
          ></textarea>
        </label>
        <label htmlFor="" className="flex flex-col text-white font-bold">
          t.me
          <Input
            type={"text"}
            placeholder={"t.me//"}
            onChange={(e) => setTgLink(e.target.value)}
          />
        </label>
        <label htmlFor="" className="flex flex-col text-white font-bold">
          Github
          <Input
            type={"text"}
            placeholder={"https://github.com/"}
            onChange={(e) => setGithub(e.target.value)}
          />
        </label>
        <label htmlFor="" className="flex flex-col text-white font-bold">
          LinkedIn
          <Input
            type={"text"}
            placeholder={"https://www.linkedin.com/in"}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
        </label>

        <label htmlFor="" className="flex flex-col text-white font-bold">
          Role
          <Input
            type={"text"}
            placeholder={"Web Developer"}
            onChange={(e) => setRole(e.target.value)}
          />
        </label>

        <Btn
          btn_type={"main_btn"}
          childeren={"change"}
          onClick={hamdlesubmit}
        />
      </div>
    </nav>
  );
}

export default AdminNavBar;
