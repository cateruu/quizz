const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const getQuestions = async () => {
  const response = await fetch(
    'https://opentdb.com/api.php?amount=5&type=multiple'
  );
  const data = await response.json();

  return data.results.map((question) => {
    return {
      question: question.question,
      answers: shuffle([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
      correct: question.correct_answer,
    };
  });
};
