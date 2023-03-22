import React from "react";
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Project/Work";
import Blog from "../components/Project/Blog";
import "../components/Project/ProjektImgStyles.css";

const Project = () => {
  return (
    <div>
      <HeroImg2
        myClass="project"
        heading="PROJECTS"
        text="Sie können meine Projekte finden"
      />
      <Work />
      <Blog />
    </div>
  );
};

export default Project;
