import React from 'react';
import { useState } from 'react';
import { getQuestions } from './API';
import classes from './css/app.module.css';
// Components
import Landing from './components/Landing';
import Loading from './components/Loading';
import Quiz from './components/Quiz';

const App = () => {
  const startGame = async () => {
    setCheckingAnswers(false);
    setLoadingQuestions(true);
    setGameStarted(true);
    setSelectedAnswers([]);
    setScore(0);

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
            answer.correct = true;
          }
        }
      }
    }
  };

  return (
    <div className={classes.app}>
      <div className={classes.topBlob}></div>
      <div className={classes.bottomBlob}></div>
      {!gameStarted && <Landing handleClick={startGame} />}
      {loadingQuestions && <Loading />}
      {gameStarted && !loadingQuestions && (
        <Quiz
          allQuestions={allQuestions}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          checkingState={checkingAnswers}
          score={score}
          startGame={startGame}
          checkAnswers={checkAnswers}
        />
      )}
    </div>
  );
};

export default App;
