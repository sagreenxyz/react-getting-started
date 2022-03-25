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
      style={{ backgroundColor: colors[props.status] }}
      onClick={() => props.onClick(props.number, props.status)}
    >
      {props.number}
    </button>
  )
}

const PlayAgain = (props) => {
  return (
    <div className="game-done">
      <button>Play Again</button>
    </div>
  )
}

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9))
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9))
  const [candidateNums, setCandidateNums] = useState([])

  const candidatesAreWrong = utils.sum(candidateNums) > stars
  const gameIsDone = availableNums.length === 0

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used'
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate'
    }
    return 'available'
  }

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus == 'used') {
      return
    }
    const newCandidateNums =
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number)
    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums)
    } else {
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      )
      setStars(utils.randomSumIn(newAvailableNums, 9))
      setAvailableNums(newAvailableNums)
      setCandidateNums([])
    }
  }

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameIsDone ? (
            <PlayAgain />
          ) : (
            <StarsDisplay count={stars} />
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map(number => {
            return (
              <PlayNumber
                key={number}
                status={numberStatus(number)}
                number={number}
                onClick={onNumberClick}
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
