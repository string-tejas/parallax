export const SlideContainer = ({ className, children, ...others }) => {
   return (
      <div
         className={
            "w-full h-screen relative snap-y snap-mandatory overflow-y-auto " +
            className
         }
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
