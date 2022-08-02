import React, { useState } from "react";
import rick from "../../../images/rick.gif";

const Youtube = ({ img }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full relative h-full bg-black rounded-[18px] flex items-center justify-center">
      {loading && (
        <img
          className="absolute w-[70%] z-10 top-1/2 left-1/2"
          style={{ transform: "translate(-50%, -50%)" }}
          src={img}
          alt="youtube"
        />
      )}
      <img src={rick} alt="rick" onLoad={() => setLoading(false)} />
    </div>
  );
};

export default Youtube;
