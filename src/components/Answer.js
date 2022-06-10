import React from 'react';
import classes from './css/answer.module.css';

const Answer = (props) => {
  let answer;
  if (props.checkingState) {
    answer = (
      <div
        dangerouslySetInnerHTML={{ __html: props.text }}
        className={`${classes.answer} ${
          props.correct ? classes.correct : null
        } ${props.wrong ? classes.wrong : null}`}
        onClick={props.handleClick}
      />
    );
  } else {
    answer = (
      <div
        dangerouslySetInnerHTML={{ __html: props.text }}
        className={`${classes.answer} ${
          props.isSelected ? classes.selected : null
        }`}
        onClick={props.handleClick}
      />
    );
  }

  return answer;
};

export default Answer;
