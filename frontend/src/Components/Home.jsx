import React from 'react';
import '../CSS/Home.css';
import home from '../assests/img1.png';

const Home = ({ theme, setTheme }) => {
  return (
    <div className={`container ${theme}`}>
      <div className="home">
        <div className={`content_home ${theme}`}>
          <h2>Stay ahead of the storm with our weather app!</h2>
          <p>Minute-by-minute tracking for precision. Plan confidently with accurate forecasts.</p>
        </div>
        <div className={`vector_home ${theme}`}>
          <img src={home} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default Home;