import React from "react";
import { useState, useEffect } from "react";

export const Header = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSeconds((prevValue) => prevValue + 1);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [seconds]);

  return (
    <div className="header">
      <h1>To-Do list</h1>
      <p>You have used {seconds} seconds on this website</p>
    </div>
  );
};
