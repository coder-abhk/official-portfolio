import React from "react";
import cssImg from "../../assets/icons/css.png";
import htmlImg from "../../assets/icons/html.png";
import javascriptImg from "../../assets/icons/javascript.png";
import mysqlImg from "../../assets/icons/mysql.png";
import pythonImg from "../../assets/icons/python.png";
import reactImg from "../../assets/icons/react.png";

const Tech = () => {
  return (
    <div className="my__techs__wrapper">
      <div className="techs__header">
        <h2 className="text__center special__font">My Technologies</h2>
        <p className="margin__top margin__bottom text__center">
          To showcase and build projects, I basically used these technologies
          listed below.👇
        </p>
      </div>
      <div className="techs__lists__wrapper">
        <div className="tech__img__wrapper">
          <img className="tech__img" src={cssImg} alt="" />
        </div>
        <div className="tech__img__wrapper">
          <img className="tech__img" src={htmlImg} alt="" />
        </div>
        <div className="tech__img__wrapper">
          <img className="tech__img" src={javascriptImg} alt="" />
        </div>
        <div className="tech__img__wrapper">
          <img className="tech__img" src={reactImg} alt="" />
        </div>
        <div className="tech__img__wrapper">
          <img className="tech__img" src={pythonImg} alt="" />
        </div>
        <div className="tech__img__wrapper">
          <img className="tech__img" src={mysqlImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tech;
