import React from 'react';
import { nanoid } from 'nanoid';
import classes from './css/quiz.module.css';
// Components
import Question from './Question';
import PlayAgain from './PlayAgain';
import Check from './Check';

const Quiz = (props) => {
  const questionElements = props.allQuestions.map((question) => {
    return (
      <Question
        key={nanoid()}
        question={question.question}
        answers={question.answers}
        correct={question.correct}
        selectedAnswers={props.selectedAnswers}
        setSelectedAnswers={props.setSelectedAnswers}
        checkingState={props.checkingState}
      />
    );
  });
  return (
    <section className={classes.quiz}>
      {questionElements}
      {props.checkingState ? (
        <PlayAgain score={props.score} handleClick={props.startGame} />
      ) : (
        <Check handleClick={props.checkAnswers} />
      )}
    </section>
  );
};

export default Quiz;
