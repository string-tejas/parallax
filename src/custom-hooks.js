import { useEffect, useRef } from "react";

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
