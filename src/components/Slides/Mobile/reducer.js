export const ACTIONS = {
  menu: "menu",
  standby: "standby",
  iframe: "iframe",
  gallery: "gallery",
  code: "code",
  youtube: "youtube",
};

// Mobile state management
export const reducer = (state, { type, payload }) => {
  switch (type) {
    // iframes
    case ACTIONS.iframe:
      if (payload)
        return {
          current: ACTIONS.iframe,
          url: payload.url,
          label: payload.label,
          img: payload.img,
        };
      else return state;

    //   gallery
    case ACTIONS.gallery:
      return { current: ACTIONS.gallery, label: payload.label };

    //   visit menu
    case ACTIONS.menu:
      return { current: ACTIONS.menu };

    // the standby screen
    case ACTIONS.standby:
      if (state.current === ACTIONS.standby)
        return {
          current: ACTIONS.standby,
          msg: "Oh hello ? standby ka standby kaise nikalu ab",
        };
      else if (state.current !== ACTIONS.menu)
        return {
          current: ACTIONS.standby,
          msg: `Standby afford karne ka paisa nahi hai to maine ${state.label} bhi uda dala πΆββοΈ`,
        };
      else return { current: ACTIONS.standby, msg: "No apps on standby" };

    //   youtube prank
    case ACTIONS.youtube:
      return {
        current: ACTIONS.youtube,
        img: payload.img,
        label: payload.label,
      };

    // code app
    case ACTIONS.code:
      return { current: ACTIONS.code, label: payload.label };
    default:
      return { ...state };
  }
};

export default reducer;
