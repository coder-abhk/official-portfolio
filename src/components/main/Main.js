import React, { useState } from "react";
import "./Main.css";
import profilePic from "../../assets/images/abhk_pp.jpg";
import ExploreButton from "../buttons/explore_button";
import Tech from "./Tech";
import Projects from "./Projects";
import Contact from "./Contact";

const MainComponent = ({ my_name }) => {
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
      <>
        <h2 className="margin__bottom font__weight__500 special__border special__font">
          {my_name}
        </h2>
        <p className="margin__bottom">
          Hey! my name is Abhishek Rawat. I wants to be a fullstack web
          developer, ❤️ love to design, 🛠 build and create 🦋 beautiful
          websites.
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
      </>
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
};

export default MainComponent;
