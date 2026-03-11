import React from "react";
import HeroSection from "../../components/public/HeroSection";
import AboutMeSection from "../../components/public/AboutMeSection";
import SklExpSection from "../../components/public/SklExpSection";
import FeaturedProjects from "../../components/public/FeaturedProjects";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <SklExpSection />
      <FeaturedProjects />
    </div>
  );
}

export default HomePage;
