import React, { useState } from "react";
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
    <>
      <div className={`navbar ${theme}`}>
        <img
          src={theme === "light" ? logo_dark : logo_white}
          alt="Logo here"
          className="logo"
        />
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Features</li>
          <li>About</li>
        </ul>

        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon
            icon={faSearch}
            className={theme === "light" ? "icon_light" : "icon_dark"}
          />
        </div>

        <FontAwesomeIcon
          icon={theme === "light" ? faSun : faMoon}
          className="toggle-icon"
          onClick={() => toggle()}
        />
      </div>
    </>
  );
};

export default Header;
