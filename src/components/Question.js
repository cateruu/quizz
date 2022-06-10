import React from 'react';
import { nanoid } from 'nanoid';
import classes from './css/question.module.css';

const Question = (props) => {
  const answerElements = props.answers.map((answer) => {
    return (
      <div
        key={nanoid()}
        dangerouslySetInnerHTML={{ __html: answer }}
        className={classes.answer}
      />
    );
  });

  return (
    <div className={classes.question}>
      <h2 dangerouslySetInnerHTML={{ __html: props.question }} />
      <div className={classes.answers}>{answerElements}</div>
    </div>
  );
};

export default Question;
