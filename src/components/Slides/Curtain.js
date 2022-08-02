import React, { useRef } from "react";
import Slide from "../Slide";

const Curtain = () => {
  const slideRef = useRef();
  return (
    <Slide slideRef={slideRef} msg="Don't pull the rope">
      <div>Curtain</div>;
    </Slide>
  );
};

export default Curtain;
