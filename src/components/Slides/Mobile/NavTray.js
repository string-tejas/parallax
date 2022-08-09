import { IoIosArrowBack } from "react-icons/io";
import { BiRectangle, BiCircle } from "react-icons/bi";
import RippleButton from "../../RippleButton";
import { useState, useContext } from "react";
import { mobileContext } from ".";

// Only one button works
const NavTray = () => {
  const [toast, setToast] = useState(false);
  const { dispatch, ACTIONS } = useContext(mobileContext);

  let toastTimeOutId = 0;
  const mobileNotify = (msg) => {
    clearTimeout(toastTimeOutId);
    setToast(msg);
    toastTimeOutId = setTimeout(() => {
      setToast(false);
    }, 2000);
  };
  const handleBack = () => {
    mobileNotify("No Going Back For You !");
  };

  const handleHome = () => {
    dispatch({ type: ACTIONS.menu });
  };

  const handleStandby = () => {
    dispatch({ type: ACTIONS.standby });
  };

  return (
    <>
      {toast && <MobileToast msg={toast} />}
      <NavTrayContainer>
        <RippleButton
          className="w-[33%] h-full flex justify-center items-center rounded-bl-[20px]"
          onClick={handleBack}
        >
          <IoIosArrowBack />
        </RippleButton>

        <RippleButton
          className="w-[33%] h-full flex justify-center items-center"
          onClick={handleHome}
        >
          <BiCircle />
        </RippleButton>

        <RippleButton
          className="w-[33%] h-full flex justify-center items-center rounded-br-[20px]"
          onClick={handleStandby}
        >
          <BiRectangle />
        </RippleButton>
      </NavTrayContainer>
    </>
  );
};

const NavTrayContainer = ({ children }) => (
  <div
    className="bg-[rgba(0,0,0,0.9)] w-full h-[40px] 
      absolute bottom-0 left-0 rounded-br-[18px] 
      rounded-bl-[18px] z-10 text-white flex items-center 
      justify-around text-[1.2rem]"
  >
    {children}
  </div>
);

const MobileToast = ({ msg }) => (
  <div
    className="absolute top-[73%] left-[50%] bg-gray-500 
      z-10 text-white min-w-[85%] rounded-full py-1 flex 
      justify-center items-center pointer-events-none bg-opacity-95"
    style={{
      transform: "translateX(-50%)",
      boxShadow: "inset 0 0 8px #666",
    }}
  >
    {msg}
  </div>
);

export default NavTray;
