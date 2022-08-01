import { useContext, useState } from "react";
import { mobileContext } from ".";
import generateMenuData from "./appData";
import { BsBatteryHalf } from "react-icons/bs";
import { MdNetworkWifi } from "react-icons/md";
import { BiWindows } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import RippleButton from "../../RippleButton";

const Menu = () => {
   const { dispatch, ACTIONS } = useContext(mobileContext);
   const menuItems = generateMenuData(dispatch, ACTIONS);
   return (
      <MenuContainer>
         <NotifTray />
         {menuItems.map((appIconData, index) => (
            <AppIcon {...appIconData} key={appIconData.label + index} />
         ))}
      </MenuContainer>
   );
};

export const StandBy = ({ msg }) => {
   const { dispatch, ACTIONS } = useContext(mobileContext);

   return (
      <div className="w-full h-full flex justify-center items-end relative">
         <NotifTray />
         <div
            className="w-full relative h-[calc(100%-24px)] rounded-bl-[20px] rounded-br-[20px] flex justify-center items-center"
            style={{ background: "rgba(0,0,0,0.7)" }}>
            <span
               className="absolute white top-[20%] left-[50%] w-[85%] text-center text-white"
               style={{ transform: "translateX(-50%)" }}>
               {msg}
            </span>
            <BiWindows
               className="text-[8rem]"
               style={{
                  transform: "translateX(7%)",
                  color: "rgba(255, 255, 255, 0.3)",
               }}
            />
            <div className="absolute top-[80%] left-[50%]">
               <RippleButton
                  className="rounded-full w-[3rem] h-[3rem] shadow-xl flex justify-center items-center bg-slate-700"
                  style={{ transform: "translateX(-50%)" }}
                  onClick={() => dispatch({ type: ACTIONS.menu })}>
                  <AiOutlineClose className="text-white font-3xl" />
               </RippleButton>
            </div>
         </div>
      </div>
   );
};

const NotifTray = () => {
   const [time, setTime] = useState(new Date().toTimeString().substring(0, 5));

   setInterval(() => {
      setTime(new Date().toTimeString().substring(0, 5));
   }, 1000 * 60);

   return (
      <div
         className="absolute top-0 left-0 w-full h-[24px] rounded-tr-[19px] 
      rounded-tl-[19px] text-white px-4 text-[0.9rem] flex justify-end
      items-center z-10"
         style={{ background: "rgba(0,0,0,0.9)" }}>
         <span style={{ marginRight: "auto", fontSize: "0.7rem" }}>{time}</span>
         <MdNetworkWifi className="mr-2" />
         <BsBatteryHalf />
      </div>
   );
};

const MenuContainer = ({ children }) => (
   <div
      className="w-full h-full px-[10px] py-[60px] 
      flex justify-evenly items-end relative">
      {children}
   </div>
);

const AppIcon = ({ img, label, onClick }) => (
   <div
      className="w-[18%] flex flex-col items-center justify-center cursor-pointer"
      onClick={onClick}>
      <img
         className="w-[70%] transition-all hover:drop-shadow-[0_0_2px_black]"
         src={img}
         alt={label}
      />
      <span
         className="text-[0.9rem] text-white mt-0.5"
         style={{ textShadow: "1px 0 3px black" }}>
         {label}
      </span>
   </div>
);

export default Menu;
