import React from "react";
import "./ErrorDate.css"

const ErrorDate = () => {
  return (
    <>
      <img
      className="error-img"
        width="64"
        height="64"
        src="https://img.icons8.com/ios/64/ffffff/error--v1.png"
        alt="error--v1"
      />

      <p className="error-text">No picture available, change the date please!</p>
    </>
  );
};

export default ErrorDate;
