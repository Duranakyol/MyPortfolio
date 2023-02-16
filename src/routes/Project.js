import React from "react";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";

import Work from "../components/Work";
import Blog from "../components/Blog";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Sie können meine Projekte finden" />
      <Work />
      <Blog />
      <Footer />
    </div>
  );
};

export default Project;
