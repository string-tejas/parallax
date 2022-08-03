import { ToastContainer, toast } from "react-toastify";
import { SlideContainer } from "./components/Slide";
import { Cake, Curtain, Forest, Mobile, Photos } from "./components/Slides";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import StopIt from "./components/StopIt";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  });

  const notify = (msg, icon) => {
    const options = {
      position: toast.POSITION.TOP_RIGHT,
      style: {
        background: "#222",
        color: "#ddd",
      },
      progressStyle: {
        background: "#999",
      },
    };
    if (icon) options.icon = icon;
    toast.dismiss();
    toast(msg, options);
  };
  return width < 1090 ? (
    <StopIt />
  ) : (
    <>
      <SlideContainer className="bg-black" notify={notify}>
        <Cake />
        <Mobile />
        <Curtain />
        <Photos />
        <Forest />
      </SlideContainer>
      <ToastContainer />
    </>
  );
}

export default App;
