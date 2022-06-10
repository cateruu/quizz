import React from 'react';
import { useState, useEffect } from 'react';
import classes from './app.module.css';
import { getQuestions } from './API';
// Components
import Landing from './components/Landing';

const App = () => {
  const startGame = async () => {
    setGameStarted(true);

    const newQuestions = await getQuestions();

    console.log(newQuestions);
  };

  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className={classes.app}>
      <div className={classes.topBlob}></div>
      <div className={classes.bottomBlob}></div>
      {!gameStarted && <Landing handleClick={startGame} />}
    </div>
  );
};

export default App;
