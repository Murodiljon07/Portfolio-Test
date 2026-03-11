import { aboutMe, skills, techStack, experians } from "../../data/aboutMe";

function AboutMeSection() {
  return (
    <section className="my-[50px] md:my-[76px]">
      <div className="container">
        <h3
          className="relative flex items-center justify-center text-[24px] md:text-[32px] my-[40px] md:my-[63px]
before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-3 before:w-[80px] before:h-[4px] before:bg-(--color-primary) rounded-2xl"
        >
          About Me
        </h3>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:max-w-[616px]">
            <div className="p-6 md:p-8 flex flex-col gap-[24px] rounded-[16px] bg-(--color-nd-secondary)">
              {aboutMe.map((item) => (
                <p className="max-w-[552px]">{item.value}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[24px]">
              {skills.map((item) => {
                let { icon, text, title } = item;
                return (
                  <div className="rounded-[16px] bg-(--color-nd-secondary) p-[20px] md:p-[24px]">
                    <img src={icon} alt={icon} />
                    <h4 className="mt-3 mb-2">{title}</h4>
                    <p>{text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:max-w-[616px]">
            <div className="mb-6">
              <div className="p-6 md:p-8 flex flex-col gap-[24px] rounded-[16px] bg-(--color-nd-secondary)">
                <h2>Tech Stack</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {techStack.map((item) => (
                    <div className="bg-(--color-secondary) py-4 rounded-2xl flex flex-col justify-center items-center w-full sm:w-[173px] h-[90px]">
                      <img src={item.icon} alt="" />
                      <h3>{item.title}</h3>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                {experians.map((item) => (
                  <div className="bg-(--color-nd-secondary) py-6 w-full flex flex-col justify-center items-center rounded-2xl">
                    <h4 className="text-[24px] md:text-[30px] text-(--color-primary)">
                      {item.index}
                    </h4>
                    <p className="text-[14px] text-gray-300">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
