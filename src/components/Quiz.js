import React from 'react';
import classes from './quiz.module.css';
import { nanoid } from 'nanoid';
import Question from './Question';

const Quiz = (props) => {
  const questionElements = props.questions.map((question) => {
    return (
      <Question
        key={nanoid()}
        question={question.question}
        answers={[...question.incorrect_answers, question.correct_answer]}
      />
    );
  });

  return (
    <section className={classes.quiz}>
      {questionElements}
      <button className={classes.check}>Check answers</button>
    </section>
  );
};

export default Quiz;
