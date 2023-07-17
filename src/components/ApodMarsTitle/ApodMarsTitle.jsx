import React from "react";
import "./ApodMarsTitle.css";

const ApodMarsTitle = ({ selection }) => {
  return (
    <header>
      {selection ? (
        <h1 className="title">
          (<b>M</b>ars <b>R</b>over <b>P</b>hotos)
        </h1>
      ) : (
        <h1 className="title">
          (<b>A</b>stronomy <b>P</b>icture <b>O</b>f the <b>D</b>ay)
        </h1>
      )}
      <img
        id="nasa-logo"
        width="144"
        height="144"
        src="https://img.icons8.com/color/144/nasa.png"
        alt="nasa"
      />
    </header>
  );
};

export default ApodMarsTitle;
