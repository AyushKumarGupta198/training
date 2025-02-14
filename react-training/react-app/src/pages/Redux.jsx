import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import '../components/Context/Context.css';
import { middleware } from "../redux/middleware";

function Redux() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className="app">
    <div className={`theme-container ${theme}`}>
      <h1>Redux Practice</h1>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <button onClick={() => dispatch(middleware())}>
        Change Theme
      </button>
    </div>
    </div>
  );
}

export default Redux;