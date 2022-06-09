import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import classes from './question.module.css';
import Answer from './Answer';

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
  const [answers, setAnswers] = useState(
    answerArray.map((answer) => {
      return {
        id: nanoid(),
        text: answer,
        isSelected: false,
      };
    })
  );

  const selectAnswer = (id) => {
    setAnswers((prevAnswer) =>
      prevAnswer.map((answer) => {
        if (answer.id === id) {
          answer = { ...answer, isSelected: true };
          props.getSelectedAnswer(answer.text, props.id);
        } else {
          answer = { ...answer, isSelected: false };
        }

        return answer;
      })
    );
  };

  const answerElements = answers.map((answer) => {
    return (
      <Answer
        key={answer.id}
        text={answer.text}
        isSelected={answer.isSelected}
        handleClick={() => selectAnswer(answer.id)}
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
