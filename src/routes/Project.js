import React from "react";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import Kompetenzen from "../components/Kompetenzen";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Sie können meine Projekte finden" />
      <Work />
      <Kompetenzen />
      <Footer />
    </div>
  );
};

export default Project;
