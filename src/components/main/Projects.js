import React from "react";

const Projects = () => {
  return (
    <div className="my__projects__wrapper margin__top margin__bottom">
      <div className="projects__header margin__bottom">
        <h2 className="text__center special__font">My Projects</h2>
        <p className="text__center margin__top margin__bottom">
          Here are few projects, recently added.
        </p>
      </div>
      <ul className="">
        <li>
          <i className="fas fa-user-md color-purple"></i>{" "}
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
          <i className="fas fa-weight color-purple"></i>{" "}
          <a
            href="https://bmi-calc-abhk.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text__decoration__none"
          >
            Simple BMI Calculator
          </a>
        </li>
        <li>
          <i className="fas fa-blog color-purple"></i>{" "}
          <a
            href="https://channel-live.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className="text__decoration__none"
          >
            Blog Website
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
