import React, { useState, useContext, useEffect, useRef } from "react";
import Slide, { context } from "../Slide";
import forestImg from "../../images/forest.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Forest = () => {
  const slideRef = useRef();
  const [focus, setFocus] = useState(false);
  const { offsetY } = useContext(context);

  useEffect(() => {
    const offsetTop = slideRef.current.offsetTop;
    if (offsetTop === Math.ceil(offsetY) || offsetTop === Math.floor(offsetY)) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  }, [offsetY, slideRef]);

  return (
    <Slide slideRef={slideRef}>
      <div className="w-full h-screen relative overflow-hidden bg-green-900">
        <img
          className="w-full"
          style={{
            filter: `brightness(${focus ? "0.6" : "1"}) blur(${
              focus ? "4px" : "0px"
            })`,
            transition: "filter 10s linear",
          }}
          src={forestImg}
          alt="forrest gump"
        />
        {focus && <TextEffect />}
      </div>
    </Slide>
  );
};

const TextEffect = () => {
  const sentences = [
    "Hello there how are you ?",
    "Its good to see you how you've been",
  ];
  const { text } = useTypewriter({
    words: sentences,
    onLoopDone: () => {
      console.log("loop done");
    },
  });
  return (
    <div className="absolute top-[70%] w-1/2 left-[10%] text-white text-[3rem]">
      {text}
      <Cursor cursorStyle="|" />
    </div>
  );
};

export default Forest;
