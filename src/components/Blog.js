import React from "react";
import BlogCard from "./BlogCard";
import BlogCardData from "./BlogCardData";
import "./BlogCardStyles.css";

const Blog = () => {
  return (
    <div className="work-container">
      <h1 className="blog-heading">Blogs</h1>
      <div className="blog-container">
        {BlogCardData.map((val, ind) => {
          return (
            <BlogCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
