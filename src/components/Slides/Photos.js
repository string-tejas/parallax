import React, { useState, useRef } from "react";
import tableTexture from "../../images/texture.jpg";
import Slide from "../Slide";
import { FcRemoveImage } from "react-icons/fc";
import photosData from "./photosData";

const Photos = () => {
  const slideRef = useRef();

  return (
    <Slide
      slideRef={slideRef}
      msg="Don't Click on photos"
      className="overflow-hidden"
      icon={<FcRemoveImage className="text-3xl" />}
    >
      <WoodTexture>
        {photosData.reverse().map((image, index) => (
          <Photo
            src={image.src}
            alt={image.alt}
            key={image.src}
            rotateOffset={photosData.length / 2 - index}
          />
        ))}
      </WoodTexture>
    </Slide>
  );
};

const WoodTexture = ({ children }) => (
  <div
    className="w-full h-screen bg-[#9d7254] overflow-hidden z-10"
    style={{ background: `url(${tableTexture})` }}
  >
    {children}
  </div>
);

const Photo = ({ src, rotateOffset = 0 }) => {
  const [transform, setTransform] = useState(
    `translate(-50%, -50%) rotate(${rotateOffset}deg)`
  );
  const required = "translate(-150vw, 100vh) rotate(-90deg)";

  return (
    <div
      className="h-[70vh] w-[70vh] absolute cursor-pointer
  shadow-[0_0_8px_2px_black,inset_0_0_2px_black] bg-white
   p-4 pb-14 top-1/2 left-1/2"
      style={{ transition: "800ms ease-in", transform: transform }}
      onClick={() => setTransform(required)}
    >
      <div className="relative w-full h-full">
        <img
          src={src}
          className="bg-white h-full w-full brightness-50"
          alt="blur-text"
        />
        <img
          src={src}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full"
          alt="overtop-img"
        />
      </div>
    </div>
  );
};
export default Photos;
