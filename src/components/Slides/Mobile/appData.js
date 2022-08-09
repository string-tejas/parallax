// can this be used here ?

const generateMenuData = (dispatch, ACTIONS) => {
  const menuData = [
    {
      label: "Code",
      img: "/img/icons/code.png",
      onClick: () => {
        dispatch({
          type: ACTIONS.code,
          payload: {
            label: "Code",
          },
        });
      },
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
            img: "/img/icons/notes.png",
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
            img: "/img/icons/calculator.png",
          },
        });
      },
    },
    {
      label: "Gallery",
      img: "/img/icons/gallery.png",
      onClick: () => {
        dispatch({
          type: ACTIONS.gallery,
          payload: {
            label: "Gallery",
          },
        });
      },
    },
    {
      label: "YouTube",
      img: "/img/icons/youtube.png",
      onClick: () => {
        dispatch({
          type: ACTIONS.youtube,
          payload: {
            img: "/img/icons/youtube.png",
            label: "YouTube",
          },
        });
      },
    },
  ];
  return menuData;
};

export default generateMenuData;
