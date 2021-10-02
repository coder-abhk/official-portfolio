import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  let [hours, setHours] = useState(() => 0);
  let [minutes, setMinutes] = useState(() => 0);
  let [seconds, setSeconds] = useState(() => 0);

  useEffect(() => {
    let date = new Date();
    setTimeout(() => {
      setHours(date.getHours());
      setMinutes(date.getMinutes());
      setSeconds(date.getSeconds());
    }, 1000);
  }, [hours, minutes, seconds]);
  return (
    <div className="footer__container">
      <p className="">{`${hours}:${minutes}:${seconds}`}</p>
      <p className="">made with ❤️ @{new Date().getFullYear()}.</p>
    </div>
  );
};

export default Footer;
