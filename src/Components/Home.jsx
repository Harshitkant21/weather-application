import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../CSS/Home.css";
import home from "../assests/img1.png";
import Footer from "./Footer";
const Home = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "dark");
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  return (
    <>
      <div className={`container ${theme}`}>
        <Header theme={theme} setTheme={setTheme} />
        {/* front view of the page */}
        <div className="home">
          <div className={`content_home ${theme}`}>
            <h2>Stay ahead of the storm with our weather app!</h2>
            <p>Minute-by-minute tracking for precision. Plan confidently with accurate forecasts.</p>
          </div>
          <div className={`vector_home ${theme}`}>  
              <img src={home} alt="home" />
          </div>
        </div>
        <Footer theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
};

export default Home;
