import React from "react";

export const Total = ({ totalMs }) => {
  console.log(totalMs);
  const msToTime = (duration) => {
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor(duration / (1000 * 60 * 60));
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes;
  };
  const totalHours = msToTime(totalMs);

  const totalPrice = 3 * Math.floor(totalMs / (1000 * 60));

  return (
    <li>
      <h3>total hours {totalHours}</h3>
      <h3>total price in kr{totalPrice}</h3>
    </li>
  );
};

export default Total;
