import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Question from './Question';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const response = await fetch(
        'https://opentdb.com/api.php?amount=5&type=multiple'
      );
      const data = await response.json();

      setQuestions(data.results);
    };

    getQuestions();
  }, []);

  const questionElements = questions.map((question) => {
    return (
      <Question
        key={nanoid()}
        question={question.question}
        correct={question.correct_answer}
        incorrect={question.incorrect_answers}
      />
    );
  });

  return <section>{questionElements}</section>;
};

export default Quiz;
