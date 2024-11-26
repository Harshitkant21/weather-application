// import React, { useState } from "react";
// import "../CSS/Header.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
// import logo_white from "../assests/logo_white.png";
// import logo_dark from "../assests/logo.png";
// import { useNavigate } from "react-router";

// const Header = ({ theme, setTheme }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();
//   const toggle = () => {
//     if (theme === "light") {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   };

//   const handleSearch = () => {
//     if (searchQuery.trim()) {
//       navigate(`/weather/${searchQuery}`);
//     }
//   };
//   return (
//     <div className={`navbar ${theme}`}>
//       <img
//         src={theme === "light" ? logo_dark : logo_white}
//         alt="Logo here"
//         className="logo"
//       />
//       <div className="search">
//         <div className={`search-box ${theme}`}>
//           <input type="text" placeholder="Search..." value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}/>
//           <FontAwesomeIcon
//             icon={faSearch}
//             className={theme === "light" ? "icon_light" : "icon_dark"}
//             onClick={handleSearch}
//           />
//         </div>
//         <FontAwesomeIcon
//           icon={theme === "light" ? faMoon : faSun}
//           className="toggle-icon"
//           onClick={toggle}
          
//         />
//       </div>
//     </div>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import "../CSS/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import logo_white from "../assests/logo_white.png";
import logo_dark from "../assests/logo.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Header = ({ theme, setTheme }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const navigate = useNavigate();

  // Debouncing logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 200); 
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  // Fetch suggestions based on the debounced query
  useEffect(() => {
    if (debouncedQuery.trim()) {
      fetch(`http://localhost:8080/api/${debouncedQuery}`)
        .then((res) => res.json())
        .then((data) => {
          const citySuggestions =
          data.features?.map((feature) => {
            if (feature.properties?.city && feature.properties?.state && feature.properties?.country) {
              return `${feature.properties.city}, ${feature.properties.state}, ${feature.properties.country}`;
            }
            return null; 
          }).filter(Boolean);
          
          setSuggestions(citySuggestions);
        })
        .catch((err) => console.error("Error fetching suggestions:", err));
    } else {
      setSuggestions([]);
      return;
    }
  }, [debouncedQuery]);

  // Handle theme toggle
  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Handle search navigation
  const handleSearch = (query) => {
    if (query && suggestions.includes(query)) {
      navigate(`/weather/${query}`);
      setSuggestions([]); // Clear suggestions after navigation
      setSearchQuery(""); // Clear search query after navigation
    }
  };

  return (
    <div className={`navbar ${theme}`}>
      <Link to={"/"}><img
        src={theme === "light" ? logo_dark : logo_white}
        alt="Logo here"
        className="logo"
      /></Link>
      <div className="search">
        <div className={`search-box ${theme}`}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className={theme === "light" ? "icon_light" : "icon_dark"}
            onClick={() => handleSearch(searchQuery)}
          />
          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <ul className="suggestions-dropdown">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSearch(suggestion)}
                  className="suggestion-item"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
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
