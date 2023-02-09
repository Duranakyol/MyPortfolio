import React from "react";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import MyLebenslauf from "../components/MyLebenslauf";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="Ich bin ein Frontend Web Entwickler" />
      <AboutContent />
      <MyLebenslauf />
      <Footer />
    </div>
  );
};

export default About;
