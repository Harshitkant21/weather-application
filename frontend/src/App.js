import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home";
import Privacy from "./Components/Privacy";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Components/About";
import WeatherCard from "./Components/WeatherCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "dark");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`app-container ${theme}`}>
      <Router>
        <Header theme={theme} setTheme={setTheme} />
        <Routes>
          <Route
            path="/"
            element={<Home theme={theme} setTheme={setTheme} />}
          />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/weather/:city" element={<WeatherCard />} />
        </Routes>
        <Footer theme={theme} />
      </Router>
    </div>
  );
}

export default App;
