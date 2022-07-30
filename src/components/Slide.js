import { useRef, useState, useEffect, createContext } from "react";
import { useKey } from "../custom-hooks";
import { throttle } from "../utils";

export const context = createContext();

export const SlideContainer = ({ className, notify, children, ...others }) => {
   const ref = useRef();
   const [offsetY, setOffsetY] = useState(0);
   const handleScroll = throttle(() => setOffsetY(ref.current.scrollTop));

   useEffect(() => {
      ref.current.addEventListener("scroll", handleScroll);
      const refPreserve = ref.current;
      return () => refPreserve.removeEventListener("scroll", handleScroll);
   }, []);

   const scrollToNextSlide = () => {
      const top = ref.current.scrollTop;
      const totalScrollHeight = ref.current.scrollHeight;
      const pageHeight = ref.current.clientHeight;

      // reached last page
      console.dir(ref.current);
      if (top + pageHeight >= totalScrollHeight) {
         // then scroll to top
         ref.current.scrollTo({
            behavior: "smooth",
            top: 0,
         });
      } else {
         // else go to next page
         ref.current.scrollTo({
            behavior: "smooth",
            top: top + pageHeight,
         });
      }
   };
   const scrollToPreviousSlide = () => {
      const top = ref.current.scrollTop;
      const totalScrollHeight = ref.current.scrollHeight;
      const pageHeight = ref.current.clientHeight;

      // on first page
      if (top <= 0) {
         // then scroll to bottom
         ref.current.scrollTo({
            behavior: "smooth",
            top: totalScrollHeight - pageHeight,
         });
      } else {
         // else go to previous page
         ref.current.scrollTo({
            behavior: "smooth",
            top: top - pageHeight,
         });
      }
   };
   // next slide mapping
   useKey("Enter", scrollToNextSlide);
   useKey("ArrowDown", scrollToNextSlide);
   useKey("ArrowRight", scrollToNextSlide);
   useKey("Space", scrollToNextSlide);

   // previous slide mapping
   useKey("ArrowUp", scrollToPreviousSlide);
   useKey("ArrowLeft", scrollToPreviousSlide);
   useKey("Backspace", scrollToPreviousSlide);
   useKey("Escape", scrollToPreviousSlide);

   return (
      <context.Provider value={{ offsetY, notify }}>
         <div
            className={
               "w-full h-screen relative snap-y snap-mandatory overflow-y-auto " +
               className
            }
            ref={ref}
            {...others}>
            {children}
         </div>
      </context.Provider>
   );
};

export const Slide = ({ className, children, ...others }) => {
   return (
      <div
         className={"w-full min-h-full relative snap-start " + className}
         {...others}>
         {children}
      </div>
   );
};

export default Slide;
