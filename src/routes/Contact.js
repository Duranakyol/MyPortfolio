import React from "react";
import Form from "../components/Contact/Form";
import HeroImg2 from "../components/HeroImg2";
import "../components/Contact/ContactImgStyles.css";

const Contact = () => {
  return (
    <div>
      <HeroImg2
        myClass="contact"
        heading="CONTACT"
        text="Sie können mir erreichen."
      />
      <Form />
    </div>
  );
};

export default Contact;
