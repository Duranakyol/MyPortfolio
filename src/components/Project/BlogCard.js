import React from "react";
import "./BlogCardStyles.css";

const BlogCard = (props) => {
  return (
    <div className="blog-card">
      <img src={props.imgsrc} alt="myImage" />
      <h2 className="blog-title">{props.title}</h2>
      <div className="blog-details">
        <p>{props.text}</p>
        <div className="blog-btns">
          <a href={props.source} target="blank" className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
