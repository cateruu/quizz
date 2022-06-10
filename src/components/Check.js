import React from 'react';
import classes from './css/check.module.css';

const Check = (props) => {
  return (
    <button className={classes.button} onClick={props.handleClick}>
      Check answers
    </button>
  );
};

export default Check;
