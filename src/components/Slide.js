import { useRef, useState, useEffect, useContext, createContext } from "react";
import { useKey } from "../custom-hooks";
// import { throttle } from "../utils";

export const context = createContext();

// Scroll logic and toast logic (kindof)
export const SlideContainer = ({ className, notify, children, ...others }) => {
  const ref = useRef();
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(ref.current.scrollTop);

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
        {...others}
      >
        {children}
      </div>
    </context.Provider>
  );
};

export const Slide = ({
  className,
  children,
  slideRef,
  msg,
  icon,
  ...others
}) => {
  const { notify, offsetY } = useContext(context);

  useEffect(() => {
    const offsetTop = slideRef.current.offsetTop;
    if (
      (offsetTop === Math.ceil(offsetY) || offsetTop === Math.floor(offsetY)) &&
      msg
    ) {
      notify(msg, icon);
    }
  }, [offsetY, icon, msg, notify, slideRef]);

  return (
    <div
      className={"w-full min-h-full relative snap-start " + className}
      ref={slideRef}
      {...others}
    >
      {children}
    </div>
  );
};

export default Slide;
