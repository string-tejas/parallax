import { NotifTray } from "./Menu";
import { useDragScrollX } from "../../../custom-hooks";

const Gallery = () => {
   return (
      <>
         <NotifTray />
         <GalleryScreen>
            <GalleryImage src="/img/icons/youtube.png" alt="youtube" />
            <GalleryImage src="/img/icons/calculator.png" alt="youtube" />
            <GalleryImage src="/img/icons/gallery.png" alt="youtube" />
         </GalleryScreen>
      </>
   );
};

// styles
const GalleryScreen = ({ children }) => {
   const divRef = useDragScrollX({ snap: true });
   return (
      <div
         ref={divRef}
         className="w-full h-full z-0 rounded-[20px] relative bg-black 
   overflow-x-auto flex remove-scrollbar cursor-grab">
         {children}
      </div>
   );
};

const GalleryImage = ({ src, alt }) => (
   <div
      className="flex-[0_0_auto] h-[100%-64px] 
   w-full mt-[24px] bg-black flex items-center pointer-events-none">
      <img className="my-auto w-full pointer-events-none" src={src} alt={alt} />
   </div>
);

export default Gallery;
