const Iframe = ({ url, label }) => {
   return (
      <div className="h-full w-full relative">
         <div
            className="h-[40px] w-full rounded-tl-[20px] rounded-tr-[20px] 
         text-white px-8 pt-2 bg-blue-700 shadow-[inset_0_0_6px_darkblue">
            {label}
         </div>
         <iframe
            className="h-[calc(100%_-_40px_-_40px)] w-full bg-white"
            title="mobile-iframe"
            src={url}
            onLoad={() => console.log("site loaded")}
         />
      </div>
   );
};

export default Iframe;
