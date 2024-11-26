import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import home from "../assests/img1.png";
import { useNavigate } from "react-router-dom";

const Home = ({ theme, setTheme }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // Set default value for query when component mounts
  useEffect(() => {
    setQuery("Chandigarh");
  }, []);

  const handleSearch = () => {
    // Navigate to the weather page with the current query
    navigate(`/weather/${query}`);
  };

  return (
    <div className={`container ${theme}`}>
      <div className="home">
        <div className={`content_home ${theme}`}>
          <h2>Stay ahead of the storm with our weather app!</h2>
          <p>
            Minute-by-minute tracking for precision. Plan confidently with
            accurate forecasts.
          </p>
          {/* Removed Link wrapper and used onClick to trigger navigate */}
          <button className={`button ${theme}`} onClick={handleSearch}>
            Get Started
          </button>
        </div>
        <div className={`vector_home ${theme}`}>
          <img src={home} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default Home;
