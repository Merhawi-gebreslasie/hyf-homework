import React from "react";

const User = ({ name, startDate, endDate }) => {
  const duration = Date.parse(endDate) - Date.parse(startDate);
  const payment = 3 * (duration / (1000 * 60));

  const msToTime = (duration) => {
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor(duration / (1000 * 60 * 60));
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes;
  };

  return (
    <li className="item">
      <div>{name}</div>
      <div>{startDate}</div>
      <div>{endDate}</div>
      <div>{msToTime(duration)}</div>
      <div>{payment}</div>
    </li>
  );
};

export default User;
