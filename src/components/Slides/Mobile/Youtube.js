import React, { useState } from "react";
import rick from "../../../images/rick.gif";

// Just a prank
const Youtube = ({ img }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full relative h-full bg-black rounded-[18px] flex items-center justify-center">
      {loading && (
        <div
          className="absolute w-full h-[300px] top-1/2 left-1/2 bg-black flex justify-center items-center"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <img className="w-[70%]" src={img} alt="youtube" />
        </div>
      )}
      <img src={rick} alt="rick" onLoad={() => setLoading(false)} />
    </div>
  );
};

export default Youtube;
