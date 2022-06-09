import React from 'react';
import { nanoid } from 'nanoid';
import classes from './quiz.module.css';
import Question from './Question';

const Quiz = (props) => {
  let selectedAnswers = [];

  const checkIfAnswerFromSameQuestion = (id) => {
    for (let answer of selectedAnswers) {
      if (answer.id === id) {
        return true;
      }
    }

    return false;
  };

  const getSelectedAnswer = (text, id) => {
    const check = checkIfAnswerFromSameQuestion(id);

    if (check) {
      selectedAnswers = selectedAnswers.map((answer) => {
        if (answer.id === id) {
          answer.text = text;
        }

        return answer;
      });
    } else {
      selectedAnswers.push({ id: id, text: text });
    }
  };

  const checkAnswers = () => {
    console.log(selectedAnswers);
  };

  const questionElements = props.questions.map((question) => {
    return (
      <Question
        key={nanoid()}
        id={nanoid()}
        question={question.question}
        answers={[...question.incorrect_answers, question.correct_answer]}
        getSelectedAnswer={getSelectedAnswer}
      />
    );
  });

  return (
    <section className={classes.quiz}>
      {questionElements}
      <button className={classes.check} onClick={checkAnswers}>
        Check answers
      </button>
    </section>
  );
};

export default Quiz;
