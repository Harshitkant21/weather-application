import React, {useState} from "react";
import Header from "./Header";
import "../CSS/Home.css";

const Home = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <div className={`container ${theme}`}>
        <Header theme={theme} setTheme={setTheme}/>
      </div>
    </>
  );
};

export default Home;
