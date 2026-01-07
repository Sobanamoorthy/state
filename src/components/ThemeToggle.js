import React, { useState } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeStyle = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#333",
    minHeight: "100vh",
    padding: "20px"
  };

  const buttonStyle = {
    padding: "10px",
    backgroundColor: isDarkMode ? "#2329e0" : "#5e1111",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <div style={themeStyle}>
      <h2>{isDarkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button style={buttonStyle} onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
