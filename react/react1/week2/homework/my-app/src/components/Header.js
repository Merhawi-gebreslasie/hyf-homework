import React, { useState, useEffect } from "react";

export const Header = ({ header }) => {
  const [seconds, setSeconds] = useState(0);

  const tick = () => setSeconds((prevSecond) => prevSecond + 1);

  useEffect(() => {
    const timeOut = setInterval(tick, 1000);
    return () => clearInterval(timeOut);
  }, []);

  return (
    <div className="header">
      <h1>{header}</h1>
      <p>You have used {seconds} seconds on this website</p>
    </div>
  );
};
