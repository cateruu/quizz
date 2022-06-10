import React from 'react';
import { useState } from 'react';
import { getQuestions } from './API';
import { nanoid } from 'nanoid';
import classes from './css/app.module.css';
// Components
import Landing from './components/Landing';
import Question from './components/Question';

const App = () => {
  const startGame = async () => {
    setGameStarted(true);

    const newQuestions = await getQuestions();
    setAllQuestions(newQuestions);
  };

  const [gameStarted, setGameStarted] = useState(false);
  const [allQuestions, setAllQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  console.log(selectedAnswers);

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
      {gameStarted && (
        <section className={classes.quiz}>
          {questionElements}
          <button className={classes.button}>Check answers</button>
        </section>
      )}
    </div>
  );
};

export default App;
