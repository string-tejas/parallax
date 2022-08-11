import { useContext, useRef } from "react";
import { context, Slide } from "../Slide";
import tableImg from "../../images/table-removesj.jpg";
import coffeeImg from "../../images/coffee.png";
import cakeImg from "../../images/real_cake-removebg.png";
import { MdDoNotTouch } from "react-icons/md";

// Cake slide with slight parallax effect
// Slowly scroll down to notice that the cake and coffee are moving
// Even the background is moving
const Cake = () => {
  const { offsetY } = useContext(context);
  const slideRef = useRef();
  const limit = 1000;

  const bgFactor = () => {
    if (offsetY >= limit) return "translateY(100px)";
    else return `translateY(${0.2 * offsetY}px)`;
  };

  const coffeeFactor = () => {
    if (offsetY >= limit) return "translateY(140px)";
    else return `translateY(${0.1 * offsetY}px)`;
  };

  const cakeFactor = () => {
    if (offsetY >= limit) return "translateY(140px)";
    else return `translateY(${-0.2 * offsetY}px)`;
  };

  const cakeShadow = () => {
    if (offsetY > limit / 2) return "32px";
    else return Math.round(14 + 0.023 * offsetY) + "px";
  };

  return (
    <Slide slideRef={slideRef} msg="Scroll slowly to see the parallax effect">
      <Table bgFactor={bgFactor} />
      <Coffee coffeeFactor={coffeeFactor} />
      <ShortCake cakeFactor={cakeFactor} cakeShadow={cakeShadow} />
      <Greeting>Site with Random effects !</Greeting>
    </Slide>
  );
};

const Greeting = ({ children }) => (
  <span
    className="absolute top-[40%] left-0 text-white 
   text-[5.5rem] font-cookie max-w-[65%] text-center backdrop-blur-sm 
   p-16 rounded-full"
    style={{
      lineHeight: "4.5rem",
      textShadow: "0 0 6px black",
    }}
  >
    {children}
  </span>
);

const Table = ({ bgFactor }) => (
  <img
    className="w-full -z-10"
    style={{ transform: bgFactor() }}
    src={tableImg}
    alt="table"
  />
);

const Coffee = ({ coffeeFactor }) => (
  <img
    className="absolute w-[30%] right-0 top-[10%] blur-[2px] 
      drop-shadow-[3px_7px_6px_black] transition-[50ms]"
    style={{ transform: coffeeFactor() }}
    src={coffeeImg}
    alt="coffee"
  />
);

const ShortCake = ({ cakeFactor, cakeShadow }) => (
  <img
    className="absolute w-[80%] right-0 bottom-0 transition-[50ms]"
    style={{
      transform: cakeFactor(),
      filter: `drop-shadow(9px ${cakeShadow()} 9px black)`,
    }}
    src={cakeImg}
    alt="cake"
  />
);

export default Cake;
