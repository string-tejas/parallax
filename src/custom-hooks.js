import { useEffect, useRef } from "react";

// Map keypress to action
export const useKey = (code, cb) => {
  const callbackRef = useRef(cb);
  useEffect(() => {
    callbackRef.current = cb;
  });

  const handle = (event) => {
    if (event.code === code) {
      callbackRef.current(event);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handle);
    return () => {
      document.removeEventListener("keydown", handle);
    };
  });
};

// for the mobile
export const useDragScrollX = (options) => {
  const divRef = useRef();

  let isMouseDown = false,
    startX,
    scrollLeftWhenMouseDown;

  const handleMouseDown = (e) => {
    isMouseDown = true;
    startX = e.pageX - divRef.current.offsetLeft;
    scrollLeftWhenMouseDown = divRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - divRef.current.offsetLeft;
    const walk = x - startX;
    divRef.current.scrollLeft = scrollLeftWhenMouseDown - walk;
  };

  const handleMouseLeave = (e) => {
    isMouseDown = false;
    if (options.snap) {
      const snapScroll =
        Math.round(divRef.current.scrollLeft / divRef.current.clientWidth) *
        divRef.current.clientWidth;
      divRef.current.scrollTo({
        left: snapScroll,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const ref = divRef.current;
    ref.addEventListener("mousedown", handleMouseDown);
    ref.addEventListener("mousemove", handleMouseMove);
    ref.addEventListener("mouseleave", handleMouseLeave);
    ref.addEventListener("mouseup", handleMouseLeave);

    return () => {
      ref.removeEventListener("mousedown", handleMouseDown);
      ref.removeEventListener("mousemove", handleMouseMove);
      ref.removeEventListener("mouseleave", handleMouseLeave);
      ref.removeEventListener("mouseup", handleMouseLeave);
    };
  });

  return divRef;
};
