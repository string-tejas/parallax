import React, { useState, useContext, useEffect, useRef } from "react";
import Slide, { context } from "../Slide";
import forestImg from "../../images/forest.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

// Forest -> Life -> Wisdom
// Why am I doing this again ?
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
    `Testing testing...`,
    "Sadly, I have to inform you that 1/4 of your life is over :(",
    "But the good news is",
    "3/4 still remains ...",
    "Kake sure",
    "Make sure to enjoy too !",
    "And don't panic over little things 🤣",
    "Wishing you luck in all your future endeavors",
    "Happy Birthday ! 🎂🎊🥳",
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
