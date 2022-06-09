import React from 'react';
import classes from './answer.module.css';

const Answer = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.text }}
      className={`${classes.answer} ${
        props.isSelected ? classes.selected : ''
      }`}
      onClick={props.handleClick}
    />
  );
};

export default Answer;
