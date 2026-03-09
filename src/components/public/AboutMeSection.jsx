import React from "react";

/**
 * Basic about section created to match the Figma layout.
 * You can replace the placeholder text, image and styles
 * with the exact assets from your design.
 */
function AboutMeSection() {
  return (
    <section className="bg-white py-20" id="about">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image on one side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-lg">
            <img
              src="/path/to/about-image.jpg"
              alt="About me"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text information */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consectetur ligula, ut finibus eros accumsan sit amet.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Vivamus fermentum placerat sem, vitae interdum felis ultricies ac.
            Nunc vehicula eleifend purus, vitae sollicitudin libero viverra eu.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
