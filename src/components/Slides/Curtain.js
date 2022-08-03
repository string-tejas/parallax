import React, { useState, useRef, useContext, useEffect } from "react";
import Slide, { context } from "../Slide";
import { FcCancel } from "react-icons/fc";
import tableImg from "../../images/table.jpeg";
import curtainImg from "../../images/curtain.png";
import RippleButton from "../RippleButton";
// import ropeImg from "../../images/rope.png";

const Curtain = () => {
  const slideRef = useRef();

  return (
    <Slide
      className={"overflow-hidden"}
      slideRef={slideRef}
      msg="Don't Open the Curtains"
      icon={<FcCancel className="text-3xl" />}
    >
      <BlurImage className="h-screen w-full" />
      <Curtains slideRef={slideRef} />
      <Cover />
    </Slide>
  );
};

const BlurImage = ({ className, img, ...others }) => (
  <div className={"relative " + className} {...others}>
    <img
      src={tableImg}
      draggable={false}
      className="w-full blur-[4px]"
      alt="background-blur"
      style={{ background: `url(${tableImg})`, backgroundSize: "cover" }}
    />
    <img
      src={tableImg}
      draggable={false}
      className="absolute top-1/2 left-1/2 h-[70%]"
      alt="foreground-clear"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  </div>
);

const Curtains = ({ slideRef }) => {
  const { offsetY } = useContext(context);
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const handleActiveSlide = () => {
      if (Math.round(offsetY) !== slideRef.current.offsetTop)
        setTimeout(() => {
          setTranslate(0);
        }, 100);
    };
    handleActiveSlide();
  }, [offsetY, slideRef]);

  const openCurtains = (event) => {
    event.target.style.opacity = 0;
    setTimeout(() => setTranslate(110), 100);
  };

  return (
    <>
      <div className="absolute top-0 select-none w-full h-full flex">
        <div
          className="basis-1/2"
          style={{
            background: `url(${curtainImg})`,
            transform: `translateX(-${translate}%) skewX(-${
              translate / 10
            }deg)`,
            transition: "800ms ease-in",
          }}
        >
          left
        </div>
        <div
          className="basis-1/2"
          style={{
            background: `url(${curtainImg})`,
            transform: `translateX(${translate}%) skewX(${translate / 10}deg)`,
            transition: "800ms ease-in",
          }}
        >
          Right
        </div>
      </div>
      <div
        className="absolute top-1/2 left-1/2 z-10"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <RippleButton
          className="px-4 py-1 font-bold font-squarepeg text-[3rem] text-white"
          rippleColor="black"
          onClick={openCurtains}
          style={{ transition: "opacity 200ms ease-in" }}
        >
          Open Curtains
        </RippleButton>
      </div>
    </>
  );
};

const Cover = () => (
  <div className="absolute top-0 left-0 h-screen w-screen"></div>
);

export default Curtain;
