import React from 'react';
import ReactDOM from 'react-dom';
import utils from './utils.js'
import colors from './config.js'

// STAR MATCH - Starting Template

const StarMatch = () => {
  const stars = utils.random(1, 9)
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
          {utils.range(1, 9).map(number => {
            return <button key={number} className="number">{number}</button>
          })}
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
