import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../CSS/Home.css";

const Home = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  useEffect(()=>{
    localStorage.setItem("current_theme",theme);
  },[theme])
  return (
    <>
      <div className={`container ${theme}`}>
        <Header theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
};

export default Home;
