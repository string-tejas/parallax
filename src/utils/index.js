export function throttle(cb, delay = 100) {
   let shouldWait = false;
   let waitingArgs;
   const timeoutFunc = () => {
      if (waitingArgs === null) {
         shouldWait = false;
      } else {
         cb(...waitingArgs);
         waitingArgs = null;
         setTimeout(timeoutFunc, delay);
      }
   };
   return (...args) => {
      if (shouldWait) {
         if (args) waitingArgs = args;
         else waitingArgs = [];
         return;
      }
      if (args) cb(...args);
      else cb();
      shouldWait = true;

      setTimeout(timeoutFunc, delay);
   };
}
