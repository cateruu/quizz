import React from 'react';
import classes from './css/question.module.css';
// Components
import Answer from './Answer';

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
    let isSelected;
    for (let selected of props.selectedAnswers) {
      if (selected.selectedAnswer === answer) {
        isSelected = true;
      }
    }

    return (
      <Answer
        key={answer}
        text={answer}
        isSelected={isSelected}
        handleClick={() => selectAnswer(props.question, answer)}
        checkingState={props.checkingState}
      />
    );
  });

  const checkedAnswerElements = props.answers.map((answer) => {
    const correctStyle = answer === props.correct ? true : false;

    let wrongStyle;
    for (let selectedAnswer of props.selectedAnswers) {
      if (selectedAnswer.selectedAnswer === answer && !selectedAnswer.correct) {
        wrongStyle = true;
      }
    }

    return (
      <Answer
        key={answer}
        text={answer}
        correct={correctStyle}
        wrong={wrongStyle}
        handleClick={() => selectAnswer(props.question, answer)}
        checkingState={props.checkingState}
      />
    );
  });

  return (
    <div className={classes.question}>
      <h2
        dangerouslySetInnerHTML={{ __html: props.question }}
        className={classes.header}
      />
      <div className={classes.answers}>
        {props.checkingState ? checkedAnswerElements : answerElements}
      </div>
    </div>
  );
};

export default Question;
