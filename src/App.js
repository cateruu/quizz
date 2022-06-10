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
import Loading from './components/Loading';

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

  console.log(selectedAnswers);

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

  const questionElements = allQuestions.map((question) => {
    return (
      <Question
        key={nanoid()}
        question={question.question}
        answers={question.answers}
        correct={question.correct}
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
        checkingState={checkingAnswers}
      />
    );
  });

  return (
    <div className={classes.app}>
      <div className={classes.topBlob}></div>
      <div className={classes.bottomBlob}></div>
      {!gameStarted && <Landing handleClick={startGame} />}
      {loadingQuestions && <Loading />}
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
