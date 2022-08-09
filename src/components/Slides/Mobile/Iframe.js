import { useState } from "react";

// cheap trick to include previous projects
// #notSponsered

const Iframe = ({ url, label, img }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="h-full w-full relative">
      <Navbar label={label} />
      {loading && <Loading img={img} />}
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
         text-white px-8 pt-2 bg-blue-700 shadow-[inset_0_0_6px_darkblue]"
  >
    {label}
  </div>
);

const Loading = ({ img }) => (
  <div
    className="absolute top-1/2 left-1/2 text-gray-700 w-full h-1/2 flex justify-center items-center"
    style={{ transform: "translate(-50%, -50%)" }}
  >
    <img className="w-[50%]" src={img} alt={img} />
  </div>
);

export default Iframe;
