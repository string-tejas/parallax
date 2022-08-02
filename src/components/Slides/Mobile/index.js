import { useRef, useReducer, createContext } from "react";
import Slide from "../../Slide";
import wallpaper from "../../../images/watson.png";
import lens from "../../../images/lens.png";
import Menu, { StandBy } from "./Menu";
import Iframe from "./Iframe";
import reducer, { ACTIONS } from "./reducer";
import { MdOutlineMobileOff } from "react-icons/md";
import NavTray from "./NavTray";
import Gallery from "./Gallery";

export const mobileContext = createContext();

const Mobile = () => {
   const slideRef = useRef();

   return (
      <Slide
         slideRef={slideRef}
         msg={"Don't use the mobile"}
         icon={<MdOutlineMobileOff />}
         className={"bg-black  h-screen flex justify-center items-center"}>
         <SmartPhone />
      </Slide>
   );
};

const SmartPhone = () => {
   const [state, dispatch] = useReducer(reducer, { current: ACTIONS.menu });

   const currentActivity = () => {
      switch (state.current) {
         case ACTIONS.menu:
            return <Menu />;
         case ACTIONS.iframe:
            return (
               <Iframe url={state.url} label={state.label} img={state.img} />
            );
         case ACTIONS.standby:
            return <StandBy msg={state.msg} />;
         case ACTIONS.gallery:
            return <Gallery />;
         default:
            return <Menu />;
      }
   };
   return (
      <mobileContext.Provider value={{ state, dispatch, ACTIONS }}>
         <MobileContainer>
            <MobileScreen>
               <Camera diameter="30px" />
               {currentActivity()}
               <NavTray />
            </MobileScreen>
         </MobileContainer>
      </mobileContext.Provider>
   );
};

const MobileContainer = ({ children }) => (
   <div
      className={`bg-[#222] w-[350px] h-[650px] rounded-[30px] 
       px-[12px] pt-[12px] pb-[16px] 
       shadow-[inset_0_0_24px_8px_#111,_0_0_0_2px_green]`}>
      {children}
   </div>
);

const MobileScreen = ({ children }) => (
   <div
      className={`relative w-full h-full rounded-[20px] 
 shadow-[0_0_24px_8px_#111,_inset_0_0_8px_0px_#444]`}
      style={{ background: `url(${wallpaper})`, backgroundSize: "cover" }}>
      {children}
   </div>
);

const Camera = ({ diameter }) => (
   <div
      className="z-10 bg-[#222] absolute left-[50%] top-[1%] 
      rounded-[50%] flex justify-center items-center 
      shadow-[0_0_8px_#444]"
      style={{
         height: diameter,
         width: diameter,
         transform: "translateX(-50%)",
      }}>
      <img
         style={{ width: "80%", filter: "brightness(0.4)" }}
         src={lens}
         alt="lens"
      />
   </div>
);

export default Mobile;
