import { SlideContainer } from "./components/Slide";
import { Cake, Code } from "./components/Slides";
import ParticleBackground from "./components/ParticleBackground";

function App() {
   return (
      <SlideContainer className="bg-black">
         <ParticleBackground height="200vh" />
         <Cake />
         <Code />
      </SlideContainer>
   );
}

export default App;
