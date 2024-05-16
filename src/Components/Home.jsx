import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../CSS/Home.css";

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
            <p>Minute-by-minute tracking for precision.</p>
            <p>Plan confidently with accurate forecasts.</p>
          </div>
          <div className={`vector_home ${theme}`}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              adipisci iure qui, totam vero expedita alias cum ut corporis
              repellendus recusandae rem ducimus natus libero fugit repellat
              voluptatibus, quasi excepturi!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
