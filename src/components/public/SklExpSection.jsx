import React, { useEffect } from "react";
import { contactReq } from "../../services/contact.service";

import { techPro } from "../../data/aboutMe";

function SklExpSection() {
  useEffect(() => {
    contactReq.get().then((res) => console.log(res.data));
  }, []);

  return (
    <section className="bg-(--color-nd-secondary) py-[76px]">
      <h3
        className="relative flex items-center justify-center text-[24px] md:text-[32px] my-[40px] md:my-[63px]
before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-4 before:w-[80px] before:h-[4px] before:bg-(--color-primary) before:rounded-2xl"
      >
        Skills & Expertise
      </h3>

      <div className="container">
        <div className="bg-(--color-secondary) p-12 rounded-2xl">
          <h2>Technical Proficiency</h2>
          <div className="grid grid-cols-2 gap-8 ">
            {techPro.map((item) => {
              let { index, title } = item;
              return (
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <p>{title}</p>
                    <p>{index}%</p>
                  </div>
                  <div className="h-3 bg-(--color-nd-secondary)  rounded-2xl overflow-hidden">
                    <div
                      className=" h-full bg-gradient-to-b from-[#7C3AED] to-[#00D8FF]"
                      style={{ width: `${index}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SklExpSection;
