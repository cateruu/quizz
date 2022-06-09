import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import classes from './quiz.module.css';
import Question from './Question';

const Quiz = (props) => {
  let selectedAnswers = [];
  const checkIfAnswerFromSameQuestion = (question) => {
    for (let answer of selectedAnswers) {
      if (answer.question === question) {
        return true;
      }
    }

    return false;
  };
  const getSelectedAnswer = (text, question) => {
    if (checkIfAnswerFromSameQuestion(question)) {
      selectedAnswers = selectedAnswers.map((answer) => {
        if (answer.question === question) {
          answer.answer = text;
        }

        return answer;
      });
    } else {
      selectedAnswers.push({ question: question, answer: text });
    }
  };

  const [answered, setAnswered] = useState(
    props.questions.map((question) => {
      return {
        question: question.question,
        correct: false,
      };
    })
  );

  const checkAnswers = () => {
    const correctAnswers = props.questions.map((question) => {
      return {
        question: question.question,
        answer: question.correct_answer,
      };
    });

    for (let answer of selectedAnswers) {
      for (let correct of correctAnswers) {
        if (answer.question !== correct.question) continue;

        if (correct.answer === answer.answer) {
          setAnswered((prevAnswered) =>
            prevAnswered.map((check) => {
              if (answer.question === check.question) {
                return {
                  ...check,
                  correct: true,
                };
              }

              return check;
            })
          );
        }
      }
    }
  };

  console.log(answered);

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
