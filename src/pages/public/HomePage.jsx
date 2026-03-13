import React from "react";
import HeroSection from "../../components/public/HeroSection";
import AboutMeSection from "../../components/public/AboutMeSection";
import SklExpSection from "../../components/public/SklExpSection";
import FeaturedProjects from "../../components/public/FeaturedProjects";
import ExpAsEdu from "../../components/public/ExpAsEdu";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <SklExpSection />
      <FeaturedProjects />
      <ExpAsEdu />
    </div>
  );
}

export default HomePage;
