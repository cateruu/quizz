import React from 'react';
import { useState } from 'react';
import classes from './app.module.css';
import Landing from './components/Landing';
import Quiz from './components/Quizz/Quiz';

const App = () => {
  const startGame = () => {
    setGameStarted((prevState) => !prevState);
  };

  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className={classes.app}>
      {!gameStarted && <Landing handleClick={startGame} />}
      {gameStarted && <Quiz />}
    </div>
  );
};

export default App;
