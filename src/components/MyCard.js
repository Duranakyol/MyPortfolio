import React from "react";
import "./MyCardStyles.css";
import profilePhoto from "../assets/profilePhoto.png";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MyCard = () => {
  return (
    <div className="container">
      <div className="personNeu">
        <div className="image">
          <img src={profilePhoto} alt="profile" />
        </div>
        <div className="name">
          <div>
            <b>Duran Akyol</b>
          </div>
          <div className="unvan">Web Entwickler</div>
          <div className="firma">
            <BsFillBriefcaseFill style={{ marginRight: "5px" }} />
            Siephi Software Solutions
          </div>
        </div>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default MyCard;
