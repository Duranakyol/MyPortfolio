import React from "react";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaMedium,
  FaPhone,
  FaXing,
} from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>12353 Berlin</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +49 176 458 843 26
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="mailto:duran.akyol.yahoo.com">duran.akyol@yahoo.com</a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Über mich</h4>
          <p>
            Ich bin ein unabhängiger Frontend Web Entwickler und Blogger. Sie
            können sich über soziale Links mit mir verbinden.
          </p>
          <div className="social">
            {" "}
            <a href="https://www.linkedin.com/in/duranakyol/" target="blank">
              <FaLinkedin className="socialIcon" size={30} />
            </a>
            <a href="https://github.com/Duranakyol" target="blank">
              <FaGithub className="socialIcon" size={30} />
            </a>
            <a
              href="https://www.xing.com/profile/Duran_Akyol/cv"
              target="blank"
            >
              <FaXing className="socialIcon" size={30} />
            </a>
            <a href="https://medium.com/@duranakyol71" target="blank">
              <FaMedium className="socialIcon" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
