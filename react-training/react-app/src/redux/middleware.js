import { toggleTheme } from "./themeSlice";

export const middleware = () => (dispatch) => {
    console.log("Thunk Middleware: Changing Theme...");
    dispatch(toggleTheme());
  };