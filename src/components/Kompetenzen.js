import React from "react";
import "./KompetenzenStyles.css";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaReact, FaBootstrap } from "react-icons/fa";
import {
  SiRedux,
  SiStrapi,
  SiGraphql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiGithub,
} from "react-icons/si";

const Kompetenzen = () => {
  const Kompetenzen = [
    {
      icon: <FaReact />,
      name: "React",
      href: "https://reactjs.org/",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
      href: "https://redux.js.org/",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootsrap",
      href: "https://getbootstrap.com/",
    },
    {
      icon: <SiStrapi />,
      name: "Strapi",
      href: "https://strapi.io/",
    },
    {
      icon: <SiGraphql />,
      name: "GraphQL",
      href: "https://graphql.org/",
    },
    {
      icon: <SiMongodb />,
      name: "Mongo DB",
      href: "https://www.mongodb.com/",
    },
    {
      icon: <SiHtml5 />,
      name: "HTML5",
      href: "https://www.w3schools.com/html/",
    },
    {
      icon: <SiCss3 />,
      name: "CSS3",
      href: "https://www.w3schools.com/css//",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      href: "https://www.javascript.com/",
    },
    {
      icon: <SiGithub />,
      name: "GITHUB",
      href: "https://github.com/",
    },
    {
      icon: <SiJquery />,
      name: "JQuery",
      href: "https://jquery.com/",
    },
    {
      icon: <BsGrid1X2Fill />,
      name: "Responsive Design",
      href: "https://www.w3schools.com/html/html_responsive.asp",
    },
  ];

  return (
    <div className="kompetenzen">
      <h1>Meine Kompetenzen</h1>
      <div className="card-container">
        {Kompetenzen.map((item) => (
          <div className="card">
            <div className="cardIcon">{item.icon}</div>
            <a href={item.href} target="blank">
              <button className="btn">{item.name}</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kompetenzen;
