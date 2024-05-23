import React, { useState } from "react";

function Header({ onDarkModeClick }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkModeClick = () => {
      setIsDarkMode((isDarkMode) => !isDarkMode);
      onDarkModeClick();
    }

  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={toggleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>       

    </header>
  );
}
export default Header;