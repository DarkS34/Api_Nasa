import React from "react";
import "./NMSwitch.css";
const NMSwitch = ({onChange}) => {
  return (
    <>
      <div className="switch-container">
        <label className="switch">
          <input type="checkbox" name="nm-switch" id="nm-switch" onChange={onChange}/>
          <span className="slider"></span>
        </label>
      </div>
    </>
  );
};

export default NMSwitch;
