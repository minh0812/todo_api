import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const styles = isLightTheme ? light : dark;
  return (
    <div className="navbar" style={styles}>
      <h1>My todo list</h1>
      <ul>
        <li>
          <Link style={styles} className="link" to="/">Home</Link>
        </li>
        <li>
          <Link style={styles} className="link" to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
