import React, { useState, useEffect } from "react";
import "./ApodMarsDetails.css";

const ApodMarsDetails = ({ selection, data, date }) => {
  const [randomPhotoIndex, setRandomPhotoIndex] = useState(0);
  
  useEffect(() => {
    if (data && data.photos && data.photos.length > 0) {
      setRandomPhotoIndex(photoRandomizer(data.photos.length));
    }
  }, []);

  const photoRandomizer = (l) => {
    return Math.floor(Math.random() * (l + 1));
  };

  if (!selection) {
    return (
      <>
        {data && data.url && (
          <>
            <div className="apod-img-container">
              <img id="apod-img" src={data.url} alt={data.title} />
            </div>
            <h1 id="apod-title">{data.title}</h1>
            <h3 id="apod-date">
              This image corresponds to the date:{" "}
              {date.split("-").reverse().join("/")}
            </h3>
            <p id="apod-explanation">{data.explanation}</p>
          </>
        )}
      </>
    );
  } else {
    if (data && data.photos && data.photos.length > 0) {
      return (
        <>
          <div className="apod-img-container">
            <img
              id="apod-img"
              src={data.photos[randomPhotoIndex].img_src}
              alt={data.photos[randomPhotoIndex].rover.name}
            />
          </div>
          <h1 id="apod-title">Rover: {data.photos[randomPhotoIndex].rover.name}</h1>
          <h3 id="apod-date">
            This image corresponds to the date:{" "}
            {date.split("-").reverse().join("/")}
          </h3>
          <div id="apod-explanation">
            <p>
              Camera: {data.photos[randomPhotoIndex].camera.full_name} (
              {data.photos[randomPhotoIndex].camera.name})
            </p>
            <p>Photo number: {randomPhotoIndex}</p>
          </div>
        </>
      );
    }
  }
};

export default ApodMarsDetails;
