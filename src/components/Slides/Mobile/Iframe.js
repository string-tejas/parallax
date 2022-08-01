import { useState } from "react";

const Iframe = ({ url, label }) => {
   const [loading, setLoading] = useState(true);
   return (
      <div className="h-full w-full relative">
         <Navbar label={label} />
         {loading && <Loading msg="Opening..." />}
         <iframe
            className="h-[calc(100%_-_40px_-_40px)] w-full bg-white"
            title="mobile-iframe"
            src={url}
            onLoad={() => setLoading(false)}
         />
      </div>
   );
};

const Navbar = ({ label }) => (
   <div
      className="h-[40px] w-full rounded-tl-[20px] rounded-tr-[20px] 
         text-white px-8 pt-2 bg-blue-700 shadow-[inset_0_0_6px_darkblue]">
      {label}
   </div>
);

const Loading = ({ msg }) => (
   <div
      className="absolute top-1/2 left-1/2 text-gray-700"
      style={{ transform: "translate(-50%, -50%)" }}>
      {msg}
   </div>
);

export default Iframe;
