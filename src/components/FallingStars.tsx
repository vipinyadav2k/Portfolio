import React from "react";
import "../styles/FallingStars.scss"; // Import the CSS file for styles

const FallingStars = () => {
  return (
    <div className="grid grid-cols-2 ">
    <div className="falling-stars-wrapper col-span-1">
      <div className="stars" id="stars1" />
      <div className="stars" id="stars2" />
      <div className="stars" id="stars3" />
      <div id="title">
        {/* <span>Vipin Yadav</span> */}
        <br />
        {/* <span>FULL STACK DEVELOPER</span> */}
      </div>
    </div>
    <div className="col-span-2"></div>
    </div>
  );
};

export default FallingStars;
