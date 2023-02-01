import React from "react";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some of my most recent works" />
      <ProjectCard />
      <Footer />
    </div>
  );
};

export default Project;
