import React from "react";
import AboutContent from "../components/About/AboutContent";
import HeroImg2 from "../components/HeroImg2";
import Kompetenzen from "../components/About/Kompetenzen";

const About = () => {
  return (
    <div>
      <HeroImg2
        heading="ABOUT"
        text="Sie können viele Infos über mich finden."
      />
      <AboutContent />
      <Kompetenzen />
    </div>
  );
};

export default About;
