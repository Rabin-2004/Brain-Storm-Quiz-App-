import React, { useEffect } from 'react';
import { useSearch } from '../context/SearchContext';
import QuizQsn from './QuizQsn';
import SubmitButton from './SubmitButton';
import { Typography, Box } from '@mui/material';
import ReturnHomeButton from './ReturnHomeButton';

const Quiz = () => {

  const { questionNo, difficulty, quizData, setQuizData, setCorrectAnswer, seeAns } = useSearch();

  useEffect(() => {

    if (quizData.length > 0) {
      console.log('Data already exists, skipping fetch');
      return;
    }

    async function fetchQuiz() {
      try {
        const response = await fetch(`https://opentdb.com/api.php?amount=${questionNo}&difficulty=${difficulty}&type=multiple`);
        if (response.status === 429) {
          console.log('Too many requests, retrying in 2 seconds...');
          setTimeout(fetchQuiz, 2000);
          return;
        }
        if (!response.ok) {
          throw new Error("Error fetching quiz data");
          return;
        }
        const data = await response.json();

        setQuizData(data.results);


        const correctAnswers = data.results.map(quiz => quiz.correct_answer);
        setCorrectAnswer(correctAnswers);

      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    }

    fetchQuiz();

  }, [questionNo, difficulty, setQuizData, setCorrectAnswer]);
  return (
    <div>
      {quizData.length > 0 ? (
        <>
          {quizData.map((quiz, index) => (
            <QuizQsn key={index} quiz={quiz} index={index} />
          ))}

          <SubmitButton />
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2
          }}>
            {seeAns && <ReturnHomeButton />}
          </Box>
        </>
      ) : (
        <Typography variant='h5' gutterBottom>Loading quiz data...</Typography>
      )}
    </div>
  );
}


export default Quiz;
