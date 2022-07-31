const generateMenuData = (dispatch, ACTIONS) => {
   const menuData = [
      {
         label: "Code",
         img: "/img/icons/code.png",
      },
      {
         label: "Notes",
         img: "/img/icons/notes.png",
         onClick: () => {
            dispatch({
               type: ACTIONS.iframe,
               payload: {
                  url: "https://note-web-app-neon.vercel.app/",
                  label: "Notes",
               },
            });
         },
      },
      {
         label: "Calculator",
         img: "/img/icons/calculator.png",
         onClick: () => {
            dispatch({
               type: ACTIONS.iframe,
               payload: {
                  url: "https://calculator-web-app-pi.vercel.app/",
                  label: "Calculator",
               },
            });
         },
      },
      {
         label: "Gallery",
         img: "/img/icons/gallery.png",
      },
      {
         label: "YouTube",
         img: "/img/icons/youtube.png",
         onClick: () => {
            dispatch({
               type: ACTIONS.iframe,
               payload: {
                  url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
                  label: "YouTube",
               },
            });
         },
      },
   ];
   return menuData;
};

export default generateMenuData;
