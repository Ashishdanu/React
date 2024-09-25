import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ChangeTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <div>
      <h2>Change Theme</h2>
      <div>
        <p style={{ color: theme === "light" ? "#000" : "#fff" }}>
          Current Theme: {theme}
        </p>
        {theme === "light" ? (
          <button onClick={() => dispatch({ type: "dark" })}>
            Switch to Dark Theme
          </button>
        ) : (
          <button onClick={() => dispatch({ type: "light" })}>
            Switch to Light Theme
          </button>
        )}
      </div>
    </div>
  );
};

export default ChangeTheme;
