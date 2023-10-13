import React from "react";

function DarkToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const buttonStyleToggle =
    theme === "light"
      ? {
          margin: "5% 10% 5% 10%",
          padding: "2%",
          backgroundColor: "#333",
          color: "#fff",
          fontSize: "2vw",
        }
      : {
          margin: "5% 10% 5% 10%",
          padding: "2%",
          backgroundColor: "#fff",
          color: "#333",
          fontSize: "2vw",
        };

  const themeToggle = theme === "light" ? "Dark Mode ☾" : "Light Mode ☀";

  return (
    <button style={buttonStyleToggle} onClick={toggleTheme}>
      {themeToggle}
    </button>
  );
}
export default DarkToggle;
