import React from "react";
import HeroImg2 from "../components/HeroImg2";

import Work from "../components/Project/Work";
import Blog from "../components/Project/Blog";

const Project = () => {
  return (
    <div>
      <HeroImg2 heading="PROJECTS" text="Sie können meine Projekte finden" />
      <Work />
      <Blog />
    </div>
  );
};

export default Project;
