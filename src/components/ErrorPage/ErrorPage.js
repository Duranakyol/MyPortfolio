import React from "react";
import Error from "../../assets/img/error.jpg";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <img src={Error} alt="" />
    </div>
  );
};

export default ErrorPage;
