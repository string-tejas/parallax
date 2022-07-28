import { useContext } from "react";
import { context, Slide } from "../Slide";
import tableImg from "../../images/table-removesj.jpg";
import coffeeImg from "../../images/coffee.png";
import cakeImg from "../../images/real_cake-removebg.png";

const Cake = () => {
   const offsetY = useContext(context);
   const limit = 1000;

   const bgFactor = () => {
      if (offsetY >= limit) return "translateY(100px)";
      else return `translateY(${0.1 * offsetY}px)`;
   };

   const coffeeFactor = () => {
      if (offsetY >= limit) return "translateY(140px)";
      else return `translateY(${0.2 * offsetY}px)`;
   };

   const cakeFactor = () => {
      if (offsetY >= 0 && offsetY <= limit / 6)
         return `translateY(${-0.2 * offsetY}px)`;
      else if (offsetY > limit / 6 && offsetY < limit)
         return `translateY(${0.2 * offsetY - (limit / 6) * 0.4}px)`;
      else return `translateY(140px)`;
   };

   const cakeShadow = () => {
      if (offsetY > limit / 2) return "32px";
      else return Math.round(14 + 0.023 * offsetY) + "px";
   };

   const textFactor = () => {
      if (offsetY < limit) return `translateY(${-1.2 * offsetY}px)`;
      else return "translateY(-800px)";
   };

   return (
      <Slide>
         <Table bgFactor={bgFactor} />
         <Coffee coffeeFactor={coffeeFactor} />
         <ShortCake cakeFactor={cakeFactor} cakeShadow={cakeShadow} />
         <Greeting textFactor={textFactor}>
            Wish you a many many <br /> Happy Returns of the Day !
         </Greeting>
      </Slide>
   );
};

const Greeting = ({ textFactor, children }) => (
   <span
      className="fixed top-[45%] left-0 text-white 
   text-[5.5rem] font-cookie max-w-[65%] text-center backdrop-blur-sm 
   p-16 rounded-full"
      style={{
         lineHeight: "4.5rem",
         transform: textFactor(),
      }}>
      {children}
   </span>
);

const Table = ({ bgFactor }) => (
   <img
      className="w-full -z-10"
      style={{ transform: bgFactor() }}
      src={tableImg}
   />
);

const Coffee = ({ coffeeFactor }) => (
   <img
      className="absolute w-[30%] right-0 top-[10%] blur-[2px] drop-shadow-[3px_7px_6px_black]"
      style={{ transform: coffeeFactor() }}
      src={coffeeImg}
   />
);

const ShortCake = ({ cakeFactor, cakeShadow }) => (
   <img
      className="absolute w-[80%] right-0 bottom-0"
      style={{
         transform: cakeFactor(),
         filter: `drop-shadow(9px ${cakeShadow()} 9px black)`,
      }}
      src={cakeImg}
   />
);

export default Cake;
