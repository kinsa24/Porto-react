import { useTheme } from "../../context/ThemeContext";
import "./ThemeToggle.css";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle-icon">{isDark ? "🌙" : "☀️"}</span>
    </button>
  );
};
