import Particles from "react-tsparticles";
import particleConfig from "./particle-config";
import { loadFull } from "tsparticles";

const ParticleBackground = ({ height = "100%" }) => {
   const particlesInit = async (main) => {
      console.log(main);
      await loadFull(main);
   };

   const particlesLoaded = (container) => {
      console.log("particlesLoaded", container);
   };
   particleConfig.style.height = height;
   return (
      <Particles
         id="tsparticles"
         options={particleConfig}
         init={particlesInit}
         loaded={particlesLoaded}
      />
   );
};

export default ParticleBackground;
