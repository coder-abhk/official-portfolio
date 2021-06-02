import React, { useEffect, useState } from "react";

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
    <div className="margin__top">
      <p className="text__center timer">{`${hours}:${minutes}:${seconds}`}</p>
      <p className="text__center">made with ❤️ @{new Date().getFullYear()}.</p>
      <br></br>
    </div>
  );
};

export default Footer;
