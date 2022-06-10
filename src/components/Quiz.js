import React from 'react';
import { nanoid } from 'nanoid';
import classes from './css/quiz.module.css';
// Components
import Question from './Question';
import PlayAgain from './PlayAgain';
import Check from './Check';

const Quiz = (props) => {
  const checkAnswers = () => {
    props.setCheckingAnswers(true);
    for (let question of props.allQuestions) {
      for (let answer of props.selectedAnswers) {
        if (question.question === answer.question) {
          if (question.correct === answer.selectedAnswer) {
            props.setScore((prevScore) => ++prevScore);
            answer.correct = true;
          }
        }
      }
    }
  };

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
        <Check handleClick={checkAnswers} />
      )}
    </section>
  );
};

export default Quiz;
