import { useState } from 'react';

export const useSearchContextState = () => {
  const [questionNo, setQuestionNo] = useState(5);
  const [difficulty, setDifficulty] = useState("easy");
  const [quizData, setQuizData] = useState([]);
  const [userAnswer, setUserAnswer] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [seeAns, setSeeAns] = useState(false);
  const [displayName, setDisplayName] =  useState(() => localStorage.getItem('displayName'));
 const [isLoggedIn, setIsLoggedIn] = useState(() => {
  const storedIsLoggedIn = localStorage.getItem('isLoggedIn')
  return storedIsLoggedIn === 'true'
 });

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
    displayName,
    setDisplayName,
    isLoggedIn,
    setIsLoggedIn
  };
};
