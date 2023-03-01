import React from "react";
import "./WorkCardStyles.css";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="myImage" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={props.source} target="blank" className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
