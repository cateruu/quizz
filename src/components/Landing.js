import React from 'react';
import classes from './css/landing.module.css';

const Landing = (props) => {
  return (
    <div className={classes.landing}>
      <h1 className={classes.header}>Quizz</h1>
      <p className={classes.text}>Challange yourself</p>
      <button className={classes.button} onClick={props.handleClick}>
        Start quiz
      </button>
    </div>
  );
};

export default Landing;
