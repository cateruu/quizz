import React from 'react';
import classes from './css/question.module.css';

const Question = (props) => {
  const checkIfSameQuestion = (question) => {
    for (let answer of props.selectedAnswers) {
      if (answer.question === question) return true;
    }

    return false;
  };

  const selectAnswer = (question, selectedAnswer) => {
    props.setSelectedAnswers((prevSelected) => {
      if (checkIfSameQuestion(question)) {
        for (let answer of prevSelected) {
          if (answer.question === question) {
            answer.selectedAnswer = selectedAnswer;
          }
        }

        return [...prevSelected];
      } else {
        return [
          ...prevSelected,
          {
            question: question,
            selectedAnswer: selectedAnswer,
            correct: false,
          },
        ];
      }
    });
  };

  const answerElements = props.answers.map((answer) => {
    return (
      <div
        key={answer}
        dangerouslySetInnerHTML={{ __html: answer }}
        className={classes.answer}
        onClick={() => selectAnswer(props.question, answer)}
      />
    );
  });

  const checkedAnswerElements = props.answers.map((answer) => {
    const correctStyle = answer === props.correct ? classes.correct : '';

    let wrongStyle;
    for (let selectedAnswer of props.selectedAnswers) {
      console.log(selectedAnswer.correct);
      if (selectedAnswer.selectedAnswer === answer && !selectedAnswer.correct) {
        wrongStyle = classes.wrong;
      }
    }

    return (
      <div
        key={answer}
        dangerouslySetInnerHTML={{ __html: answer }}
        className={`${classes.answer} ${correctStyle} ${wrongStyle}`}
        onClick={() => selectAnswer(props.question, answer)}
      />
    );
  });

  return (
    <div className={classes.question}>
      <h2 dangerouslySetInnerHTML={{ __html: props.question }} />
      <div className={classes.answers}>
        {props.checkingState ? checkedAnswerElements : answerElements}
      </div>
    </div>
  );
};

export default Question;
