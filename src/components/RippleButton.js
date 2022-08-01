import { useRef } from "react";

const RippleButton = ({ className, rippleColor, children, ...others }) => {
   const buttonRef = useRef();
   const addRipple = (event) => {
      const button = buttonRef.current;

      const ripple = document.createElement("span");

      ripple.classList.add("ripple-effect");
      const top =
         button.getBoundingClientRect().top +
         document.documentElement.scrollTop;

      const left =
         button.getBoundingClientRect().left +
         document.documentElement.scrollLeft;
      ripple.style.top = event.clientY - top + "px";
      ripple.style.left = event.clientX - left + "px";
      ripple.style.background = rippleColor || "white";

      button.appendChild(ripple);

      setTimeout(() => {
         ripple.remove();
      }, 800);
   };

   return (
      <button
         className={
            "relative overflow-hidden cursor-pointer outline-none " + className
         }
         ref={buttonRef}
         onMouseDown={addRipple}
         {...others}>
         {children}
      </button>
   );
};

export default RippleButton;
