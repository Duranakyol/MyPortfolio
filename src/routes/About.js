import React from "react";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/About/AboutContent";
import Kompetenzen from "../components/About/Kompetenzen";
import "../components/About/AboutImgStyles.css";

const Project = () => {
  return (
    <div>
      <HeroImg2
        myClass="about"
        heading="ABOUT"
        text="Sie können viele Infos über mich finden."
      />
      <AboutContent />
      <Kompetenzen />
    </div>
  );
};

export default Project;
