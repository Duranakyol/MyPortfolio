import "./HeroImgStyles.css";
import React from "react";
// import IntroImg from "../../assets/img/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero-img1">
      <div className="heading1">
        <p>HALLO, Ich bin Web Entwickler</p>
        <h1>Frontend Developer</h1>
        <div className="link">
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
