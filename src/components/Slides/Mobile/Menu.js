import { useContext } from "react";
import { mobileContext } from ".";
import generateMenuData from "./appData";

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

const NotifTray = () => (
   <div
      className="absolute top-0 left-0 w-full h-[24px] rounded-tr-[19px] 
      rounded-tl-[19px] text-white px-4 text-[0.8rem] flex justify-end
      items-center"
      style={{ background: "rgba(0,0,0,0.9)" }}>
      <span style={{ marginRight: "auto" }}>16:04</span>
   </div>
);

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
