import React from "react";
import "../CSS/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import logo_white from "../assests/logo_white.png";
import logo_dark from "../assests/logo.png";

const Header = ({ theme, setTheme }) => {
  const toggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className={`navbar ${theme}`}>
      <img
        src={theme === "light" ? logo_dark : logo_white}
        alt="Logo here"
        className="logo"
      />
      <div className="search">
        <div className={`search-box ${theme}`}>
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon
            icon={faSearch}
            className={theme === "light" ? "icon_light" : "icon_dark"}
          />
        </div>
        <FontAwesomeIcon
          icon={theme === "light" ? faMoon : faSun}
          className="toggle-icon"
          onClick={toggle}
        />
      </div>
    </div>
  );
};

export default Header;