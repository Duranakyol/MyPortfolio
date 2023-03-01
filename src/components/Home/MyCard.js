import React from "react";
import "./MyCardStyles.css";
import profilePhoto from "../../assets/img/profilePhoto.png";
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
      <div className="paragraph">
        <h1>Duran Akyol</h1>
        <h2>Frontend Web Entwickler</h2>
        <p>
          Als ein leidenschaftlicher Front End Web Entwickler bin ich auf der
          Suche nach neuen Herausforderungen. Ich bin sehr gespannt darauf,
          meine Fähigkeiten in diesem Gebiet bei Ihrem Unternehmen einzusetzen.
        </p>
      </div>
    </div>
  );
};

export default MyCard;
