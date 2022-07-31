import { IoIosArrowBack } from "react-icons/io";
import { BiRectangle, BiCircle } from "react-icons/bi";

const NavTray = () => {
   return (
      <div
         className="bg-[rgba(0,0,0,0.9)] w-full h-[40px] 
      absolute bottom-0 left-0 rounded-br-[18px] 
      rounded-bl-[18px] z-10 text-white flex items-center 
      justify-around text-[1.2rem]">
         <IoIosArrowBack />
         <BiCircle />
         <BiRectangle />
      </div>
   );
};

export default NavTray;
