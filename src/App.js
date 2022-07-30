import { ToastContainer, toast } from "react-toastify";
import { SlideContainer } from "./components/Slide";
import { Cake, Code } from "./components/Slides";
import "react-toastify/dist/ReactToastify.css";
import ParticleBackground from "./components/ParticleBackground";

function App() {
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
   return (
      <>
         <SlideContainer className="bg-black" notify={notify}>
            <ParticleBackground height="200vh" />
            <Cake />
            <Code />
         </SlideContainer>
         <ToastContainer />
      </>
   );
}

export default App;
