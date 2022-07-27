import { useRef } from "react";
import { useKey } from "../custom-hooks";

export const SlideContainer = ({ className, children, ...others }) => {
   const ref = useRef();
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
      <div
         className={
            "w-full h-screen relative snap-y snap-mandatory overflow-y-auto " +
            className
         }
         ref={ref}
         {...others}>
         {children}
      </div>
   );
};

export const Slide = ({ className, children, ...others }) => {
   return (
      <div
         className={"w-full h-full relative snap-start " + className}
         {...others}>
         {children}
      </div>
   );
};

export default Slide;
