import React from 'react';
import { useState, useEffect } from 'react';
import classes from './app.module.css';
import Landing from './components/Landing';

const App = () => {
  const startGame = () => {
    setGameStarted((prevState) => !prevState);
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
