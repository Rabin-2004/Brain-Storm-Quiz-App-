import { useState } from 'react';

export const useSearchContextState = () => {
  const [questionNo, setQuestionNo] = useState(5);
  const [difficulty, setDifficulty] = useState("easy");
  const [quizData, setQuizData] = useState([]);
  const [userAnswer, setUserAnswer] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [seeAns, setSeeAns] = useState(false);


  return {
    questionNo,
    setQuestionNo,
    difficulty,
    setDifficulty,
    quizData,
    setQuizData,
    userAnswer,
    setUserAnswer,
    correctAnswer,
    setCorrectAnswer,
    seeAns,
    setSeeAns,
  };
};
