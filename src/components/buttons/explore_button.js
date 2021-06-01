import React from "react";
import "./explore_button.css";

const ExploreButton = ({ isShow, showHandler }) => {
  return (
    <button className="explore__button" onClick={showHandler}>
      <i
        className={`fas fa-chevron-down rotateZ__90 ${isShow && "rotateZ__0"}`}
      ></i>
    </button>
  );
};

export default ExploreButton;
