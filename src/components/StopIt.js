import React from "react";
import stopItImg from "../images/stop.jpg";

// This is an excuse
// Coz I'm too lazy to make stuff responsive
const StopIt = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="w-full flex flex-col items-center justify-center">
        <h1
          className="text-[1.5rem] text-center text-white mb-4"
          style={{ lineHeight: "32px" }}
        >
          Get a bigger screen
        </h1>
        <img src={stopItImg} alt="get bigger display" />
        <h1
          className="text-[1.5rem] text-center text-white mt-4"
          style={{ lineHeight: "32px" }}
        >
          Stop Checking For Responsiveness everywhere
        </h1>
      </div>
    </div>
  );
};

export default StopIt;
