import React from "react";
import { aboutMe, skills, techStack } from "../../data/aboutMe";

function AboutMeSection() {
  return (
    <section className="my-[76px]">
      <div className="container">
        <h3 className="flex items-center justify-center text-[24px] md:text-[32px] my-[63px] ">
          About Me
        </h3>
        <div className="flex gap-12">
          <div className="max-w-[616px]">
            <div className=" p-8 flex flex-col gap-[24px] rounded-[16px] bg-(--color-nd-secondary) ">
              {aboutMe.map((item) => (
                <p className="max-w-[552px]">{item.value}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-[24px]">
              {skills.map((item) => {
                let { icon, text, title } = item;
                return (
                  <div className="rounded-[16px] bg-(--color-nd-secondary) p-[24px] ">
                    <img src={icon} alt={icon} />
                    <h4 className="mt-3 mb-2">{title}</h4>
                    <p>{text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="max-w-[616px]">
            <div className="mb-6">
              <div className=" p-8 flex flex-col gap-[24px] rounded-[16px] bg-(--color-nd-secondary)">
                <h2>Tech Stack</h2>

                <div className="grid grid-cols-3 gap-4">
                  {techStack.map((item) => (
                    <div className="bg-(--color-secondary) py-4 rounded-2xl flex flex-col justify-center items-center w-[173px] h-[90px]">
                      <img src={item.icon} alt="" />
                      <h3>{item.title}</h3>
                    </div>
                  ))}
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
