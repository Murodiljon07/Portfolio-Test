import React from "react";
import { Link } from "react-router-dom";

/* assets && icons */
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex gap-4 flex-col justify-center md:flex-row md:justify-between w-full text-[14px]  items-center">
      <p>
        © 2026 Murodiljon Abdumutalov — Built with ❤️ using React & Tailwind.
      </p>

      <div className="flex gap-[24px] text-[19px] justify-center ">
        <a href="https://github.com/Murodiljon07" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/murodiljon-abdumutalov-43a26339b/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://t.me/Murodiljon2711" target="_blank">
          <FaTelegram />
        </a>
      </div>
    </div>
  );
}

export default Footer;
