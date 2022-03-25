import React from 'react';
import ReactDOM from 'react-dom';
import utils from './utils.js'
import colors from './config.js'

// STAR MATCH - Starting Template

const StarMatch = () => {
  const stars = 5
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {utils.range(1, stars).map(starId => {
            return <div key={starId} className="star" />
          })}
        </div>
        <div className="right">
          <button className="number">1</button>
          <button className="number">2</button>
          <button className="number">3</button>
          <button className="number">4</button>
          <button className="number">5</button>
          <button className="number">6</button>
          <button className="number">7</button>
          <button className="number">8</button>
          <button className="number">9</button>
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

ReactDOM.render(
  <StarMatch />,
  document.getElementById('root')
);
