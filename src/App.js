import { SlideContainer } from "./components/Slide";
import { Cake, Code } from "./components/Slides";
// import ParticleBackground from "./components/ParticleBackground";

function App() {
   return (
      <SlideContainer className="bg-black">
         {/* <ParticleBackground height="200vh" /> */}
         <Cake />
         <Code />
      </SlideContainer>
   );
}

// const Sliddydoo = () => (
//    <SlideContainer>
//       <Slide className={"bg-blue-600"}>
//          <Text text="Slide 1" />
//       </Slide>
//       <Slide className={"bg-red-400"}>
//          <Text text="Slide 2" />
//       </Slide>
//       <Slide className={"bg-green-600"}>
//          <Text text="Slide 3" />
//       </Slide>
//    </SlideContainer>
// );

const Text = ({ text }) => (
   <span
      className="text-white text-2xl
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {text}
   </span>
);

export default App;
