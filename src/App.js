import React from 'react';
import { useState } from 'react';
import { getQuestions } from './API';
import { nanoid } from 'nanoid';
import classes from './css/app.module.css';
// Components
import Landing from './components/Landing';
import Question from './components/Question';
import Check from './components/Check';
import PlayAgain from './components/PlayAgain';

const App = () => {
  const startGame = async () => {
    setCheckingAnswers(false);
    setLoadingQuestions(true);
    setGameStarted(true);

    const newQuestions = await getQuestions();
    setAllQuestions(newQuestions);
    setLoadingQuestions(false);
  };

  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [checkingAnswers, setCheckingAnswers] = useState(false);
  const [allQuestions, setAllQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const checkAnswers = () => {
    setCheckingAnswers(true);
    for (let question of allQuestions) {
      for (let answer of selectedAnswers) {
        if (question.question === answer.question) {
          if (question.correct === answer.selectedAnswer) {
            setScore((prevScore) => ++prevScore);
          }
        }
      }
    }
  };

  const questionElements = allQuestions.map((question) => {
    return (
      <Question
        key={nanoid()}
        question={question.question}
        answers={question.answers}
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
      />
    );
  });

  return (
    <div className={classes.app}>
      <div className={classes.topBlob}></div>
      <div className={classes.bottomBlob}></div>
      {!gameStarted && <Landing handleClick={startGame} />}
      {loadingQuestions && (
        <p className={classes.loading}>Loading questions...</p>
      )}
      {gameStarted && !loadingQuestions && (
        <section className={classes.quiz}>
          {questionElements}
          {checkingAnswers ? (
            <PlayAgain score={score} handleClick={startGame} />
          ) : (
            <Check handleClick={checkAnswers} />
          )}
        </section>
      )}
    </div>
  );
};

export default App;
