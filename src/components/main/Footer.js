import React from "react";

const Footer = () => {
  return (
    <div className="margin__top margin__bottom">
      <p className="text__center">@{new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
