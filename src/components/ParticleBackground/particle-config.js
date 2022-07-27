const particleConfig = {
   style: {
      position: "absolute",
      height: "200vh",
   },
   background: {
      color: "#000",
   },
   fpsLimit: 60,
   particles: {
      number: {
         value: 30,
         density: {
            enable: true,
            value_area: 800,
         },
      },
      color: {
         value: "#fff",
      },
      shape: {
         type: "circle",
         stroke: {
            width: 0,
            color: "#000000",
         },
         polygon: {
            nb_sides: 5,
         },
         image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
         },
      },
      opacity: {
         value: 0.2966312312601217,
         random: true,
         anim: {
            enable: false,
            speed: 1,
            opacity_min: 0,
            sync: false,
         },
      },
      size: {
         value: 11,
         random: true,
         anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
         },
      },
      line_linked: {
         enable: false,
         distance: 500,
         color: "#ffffff",
         opacity: 0.4,
         width: 2,
      },
      move: {
         enable: true,
         speed: 1,
         direction: "bottom",
         random: false,
         straight: false,
         out_mode: "out",
         bounce: false,
         attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
         },
      },
   },
   interactivity: {
      detect_on: "canvas",
      events: {
         onhover: {
            enable: true,
            mode: "bubble",
         },
         onclick: {
            enable: true,
            mode: "repulse",
         },
         resize: true,
      },
      modes: {
         grab: {
            distance: 400,
            line_linked: {
               opacity: 0.5,
            },
         },
         bubble: {
            distance: 133.99274002972194,
            size: 0,
            duration: 0.3,
            opacity: 0.07192807192807193,
            speed: 3,
         },
         repulse: {
            distance: 121.81158184520177,
            duration: 0.4,
         },
         push: {
            particles_nb: 4,
         },
         remove: {
            particles_nb: 2,
         },
      },
   },
   retina_detect: true,
};

export default particleConfig;
