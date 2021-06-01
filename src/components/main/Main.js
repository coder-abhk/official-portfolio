import React, { useState } from "react";
import "./Main.css";
import cssImg from "../../assets/icons/css.png";
import htmlImg from "../../assets/icons/html.png";
import javascriptImg from "../../assets/icons/javascript.png";
import mysqlImg from "../../assets/icons/mysql.png";
import pythonImg from "../../assets/icons/python.png";
import reactImg from "../../assets/icons/react.png";
import profilePic from "../../assets/images/abhk_pp.jpg";
import ExploreButton from "../buttons/explore_button";

const MainComponent = () => {
  const [isShow, setIsShow] = useState(false);
  const showHandler = () => {
    isShow ? setIsShow(false) : setIsShow(true);
  };

  const profileDisplayHandler = () => {
    return (
      <div
        className={`profile__display ${
          isShow ? "display__block" : "display__none"
        }`}
      >
        <div className="profile__pic__wrapper">
          <img className="profile__pic" src={profilePic} alt="" />
        </div>

        <div className="profile__content margin__top">
          <p>
            <i className="fab fa-github color-purple"></i>{" "}
            <a
              href="https://github.com/coder-abhk"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            <i className="fab fa-telegram-plane color-purple"></i>{" "}
            <a href="https://t.me/jr_devs" target="_blank" rel="noreferrer">
              Telegram
            </a>
          </p>
          <p>
            <i className="fab fa-facebook-f color-purple"></i>{" "}
            <a
              href="https://www.facebook.com/coder.abhk/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="main__section">
      <div>
        <h1 className="margin__bottom font__weight__500 special__border">
          @coder-abhk
        </h1>
        <p className="margin__bottom">
          Hey! my name is Abhishek Rawat. I’m a web developer, ❤️ love to
          design, 🛠 build and create 🦋 beautiful websites.
        </p>
        <p className="margin__bottom">
          To showcase my work I love to deploy them to GitHub. I also run a
          friend circle Telegram channel where I usually post articles on
          programming, linux operating system, and web technologies.{" "}
        </p>
        <div className="margin__top">
          <ExploreButton showHandler={showHandler} isShow={isShow} />
        </div>
        <div>{profileDisplayHandler()}</div>
      </div>
      {/* techs section */}
      <div className="my__techs__wrapper">
        <div className="techs__header">
          <h1 className="text__center">My Techs</h1>
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
      {/* end techs section */}
      {/* projects */}
      <div className="my__projects__wrapper margin__top margin__bottom">
        <div className="projects__header margin__bottom">
          <h1 className="text__center">My Projects</h1>
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
      {/* end projects */}
      {/* contact */}
      <div className="contact__wrapper ">
        <h1 className="margin__bottom font__weight__500 special__border">
          To contact:
        </h1>
        <div>
          <i class="fas fa-envelope-open-text color-purple"></i>{" "}
          <a href="mailto:abhkrwt07@gmail.com">Mail Me</a>
        </div>
      </div>
      {/* end contact */}
      {/* footer */}
      <div className="margin__top">
        <p className="text__center">@{new Date().getFullYear()}</p>
      </div>
      {/* end footer */}
    </div>
  );
};

export default MainComponent;
