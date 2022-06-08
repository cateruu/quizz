import React from 'react';
import classes from './landing.module.css';

const Landing = () => {
  return (
    <div className={classes.landing}>
      <h1 className={classes.header}>Quizz</h1>
      <p className={classes.text}>Challange yourself</p>
      <button className={classes.button}>Start quiz</button>
    </div>
  );
};

export default Landing;
