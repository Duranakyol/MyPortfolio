import React from "react";
import "./MyLebenslaufStyles.css";
import myLebenslauf from "../assets/myLebenslauf.png";

const MyLebenslauf = () => {
  return (
    <div className="überich">
      <h2>Sie können unten meinen Lebenslauf finden.</h2>
      <img src={myLebenslauf} alt="myLebenslauf" />
    </div>
  );
};

export default MyLebenslauf;
