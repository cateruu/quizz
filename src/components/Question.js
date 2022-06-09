import React from 'react';
import { nanoid } from 'nanoid';
import classes from './question.module.css';

const Question = (props) => {
  const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const answerArray = shuffle(props.answers);
  const answerElements = answerArray.map((answer) => {
    return (
      <div
        key={nanoid()}
        className={classes.answer}
        dangerouslySetInnerHTML={{ __html: answer }}
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
