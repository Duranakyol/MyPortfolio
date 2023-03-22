import React from "react";
import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../../assets/img/react1.jpg";
import React2 from "../../assets/img/react2.webp";

const AboutContent = () => {
  return (
    <div className="aboutContent">
      <div className="left">
        <h1>Wer bin ich ?</h1>
        <p>
          Ich liebe es, einfache, aber schöne Websites mit großartiger
          Benutzererfahrung zu erstellen. Ich interessiere mich für das ganze
          Full-Stack, wie das Ausprobieren neuer Dinge und das Entwickeln
          großartiger Projekte. Ich bin ein unabhängiger Entwickler und Blogger.
          Sie können sich über soziale Links mit mir verbinden.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
