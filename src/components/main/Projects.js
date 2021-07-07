import React from "react";

const Projects = () => {
  return (
    <div className="margin__top margin__bottom">
      <div className="margin__bottom">
        <h2 className="text__center special__font margin__bottom">
          My Projects
        </h2>
        <p className="text__center font__large margin__bottom">
          Here are few projects, I had recently added.
        </p>
      </div>
      <ul className="">
        <li>
          <i className="fas fa-blog color__purple"></i>{" "}
          <a
            href="https://channel-live.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className="text__decoration__none"
          >
            Blog Website (in Python/Django)
          </a>
        </li>
        <li>
          <i className="far fa-newspaper color__purple"></i>{" "}
          <a
            href="https://cover-page-abhk.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="text__decoration__none"
          >
            Cover Page (in HTML5, CSS3 and Javascript)
          </a>
        </li>
        <li>
          <i className="fas fa-user-md color__purple"></i>{" "}
          <a
            href="https://dr-health.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text__decoration__none"
          >
            Doctor Health
          </a>
        </li>
        <li>
          <i className="fas fa-weight color__purple"></i>{" "}
          <a
            href="https://bmi-calc-abhk.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text__decoration__none"
          >
            Simple BMI Calculator(in react.js)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
