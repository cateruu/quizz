import React from 'react';
import classes from './css/playAgain.module.css';

const PlayAgain = (props) => {
  return (
    <div className={classes.playAgain}>
      <p className={classes.text}>You scored {props.score}/5 correct answers</p>
      <button className={classes.button} onClick={props.handleClick}>
        Play again
      </button>
    </div>
  );
};

export default PlayAgain;
