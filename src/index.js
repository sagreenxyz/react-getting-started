import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import utils from './utils.js'
import colors from './config.js'

const StarsDisplay = (props) => {
  return (
    <>
      {utils.range(1, props.count).map(starId => {
        return <div key={starId} className="star" />
      })}
    </>
  )
}

const PlayNumber = (props) => {
  return (
    <button
      className="number"
      onClick={() => console.log('PlayNumber', props.number)}
    >
      {props.number}
    </button>
  )
}

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9))
  const [availableNums, setAvailableNums] = useState([1, 2, 3, 4, 5])
  const [candidateNums, setCandidateNums] = useState([2, 3])

  const candidatesAreWrong = utils.sum(candidateNums) > stars

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used'
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate'
    }
    return 'available'
  }

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay count={stars} />
        </div>
        <div className="right">
          {utils.range(1, 9).map(number => {
            return (
              <PlayNumber
                key={number}
                status={numberStatus(number)}
                number={number}
              />
            )
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
