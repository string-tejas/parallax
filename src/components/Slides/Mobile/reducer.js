export const ACTIONS = {
   menu: "menu",
   standby: "standby",
   iframe: "iframe",
   gallery: "gallery",
   code: "code",
};

export const reducer = (state, { type, payload }) => {
   switch (type) {
      case ACTIONS.iframe:
         if (payload)
            return {
               current: ACTIONS.iframe,
               url: payload.url,
               label: payload.label,
            };
         else return state;
      case ACTIONS.gallery:
         return { current: ACTIONS.gallery };
      case ACTIONS.menu:
         return { current: ACTIONS.menu };
      case ACTIONS.standby:
         if (state.current === ACTIONS.standby)
            return {
               current: ACTIONS.standby,
               msg: "Oh hello ? standby ka standby kaise nikalu ab",
            };
         else if (state.current !== ACTIONS.menu)
            return {
               current: ACTIONS.standby,
               msg: `Standby afford karne ka paisa nahi hai to maine ${state.label} bhi uda dala 🚶‍♂️`,
            };
         else return { current: ACTIONS.standby, msg: "No apps on standby" };
      case ACTIONS.code:
         return { current: ACTIONS.code };
      default:
         return { ...state };
   }
};

export default reducer;
