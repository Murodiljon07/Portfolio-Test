import { useEffect, useState } from "react";
import { aboutReq } from "../../services/about.service";
import { toast } from "react-toastify";
import Btn from "../ui/Btn";

import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import Loader3D from "../ui/loader";

function HeroSection() {
  const [me, setMe] = useState(null);

  useEffect(() => {
    async function getAbout() {
      try {
        const res = await aboutReq.get();
        const findMe = res.data.find((item) => item.id === 13);
        setMe(findMe);
      } catch (err) {
        toast(err.message);
      }
    }

    getAbout();
  }, []);

  if (!me)
    return (
      <div>
        <Loader3D />
      </div>
    );

  console.log(me);

  return (
    <section className="bg-[#1A1A2E]">
      <div className="container flex flex-col lg:flex-row items-center justify-between min-h-[90vh] gap-10">
        <div className="order-2 lg:order-1 max-w-[550px] flex flex-col gap-[22px] text-center lg:text-left">
          <h1 className="text-[38px] lg:text-[46px] font-bold leading-[1.2]">
            {me.name}
          </h1>

          <h2 className="text-[20px] text-gray-400">{me.role}</h2>

          <p className="text-gray-400 leading-[1.7]">{me.bio}</p>

          <div className="flex gap-[16px] justify-center lg:justify-start">
            <Btn btn_type="main_btn">View My Work</Btn>
            <Btn btn_type="second_btn">Contact Me</Btn>
          </div>

          <div className="flex gap-[24px] text-[22px] justify-center lg:justify-start text-gray-300">
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

        <div className="order-1 lg:order-2">
          <div className="w-[260px] h-[260px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden border-[6px] border-[#7C3AED] shadow-lg">
            <img
              src={me.image}
              alt={me.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
