import "./NavbarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaElementor,
  FaHome,
  FaPenFancy,
  FaPhoneAlt,
} from "react-icons/fa";
import Logo2 from "../../assets/img/Logo2.jpg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <img src={Logo2} alt="Logo" />
        <span>D.Akyol</span>
      </Link>
      <ul
        className={click ? "nav-menu active" : "nav-menu"}
        id="navMenu"
        onClick={handleClick}
      >
        <li>
          <FaHome className="icon" />
          <Link to="/">Home</Link>
        </li>
        <li>
          <FaElementor className="icon" />
          <Link to="/project">Project</Link>
        </li>
        <li>
          <FaPenFancy className="icon" />
          <Link to="/about">About</Link>
        </li>
        <li>
          <FaPhoneAlt className="icon" />
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        <FaBars size={20} style={{ color: "#fff" }} />
      </div>
    </div>
  );
};

export default Navbar;
