import React from "react";
import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message Here" />
        <a href="mailto:duran.akyol@yahoo.com" className="myBtn">
          Schicken
        </a>
      </form>
    </div>
  );
};

export default Form;
