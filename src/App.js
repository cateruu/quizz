import React from 'react';
import { useState, useEffect } from 'react';
import classes from './app.module.css';
import Landing from './components/Landing';
import Quiz from './components/Quiz';

const App = () => {
  const startGame = () => {
    setGameStarted((prevState) => !prevState);
  };

  const [gameStarted, setGameStarted] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const response = await fetch(
        'https://opentdb.com/api.php?amount=5&type=multiple'
      );
      const result = await response.json();

      setQuestions(result.results);
    };

    getQuestions();
  }, [gameStarted]);

  return (
    <div className={classes.app}>
      <div className={classes.topBlob}></div>
      <div className={classes.bottomBlob}></div>
      {!gameStarted && <Landing handleClick={startGame} />}
      {gameStarted && <Quiz questions={questions} />}
    </div>
  );
};

export default App;
