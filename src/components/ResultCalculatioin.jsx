import React from 'react'
import { useSearch } from '../context/SearchContext'
import { Box, Typography, Paper } from '@mui/material';

const ResultCalculatioin = () => {

  const { userAnswer, correctAnswer} = useSearch();

  const score = userAnswer.reduce((acc, answer, index) => {
    if (answer === correctAnswer[index]) {
      acc += 1;
    }
    return acc;
  }, 0)

  const accuracy = ((score / correctAnswer.length) * 100).toFixed(2);

  return (
    <React.Fragment>
      <Box sx={{
        bgcolor: '#262a35',
        color: 'white',
        minWidth: {
          xs: '80vw',
          sm: '50vw',
          md: '30vw',
        },
        minHeight: {
          xs: '80vw',
          sm: '50vw',
          md: '30vw',
        },
        maxWidth: '90vw',
        maxHeight: '90vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
        boxSizing: 'border-box',
      }}>
        <Typography variant='h5' >
          Score
        </Typography>

        <Paper elevation={3} sx={{
          bgcolor: '#383e4e',
          padding: 2,
          color: 'white',
          minWidth: '209px',
          margin: 2
        }}>
          <Typography variant='h7'>
            Correct Answers: {score}
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{
          bgcolor: '#383e4e',
          padding: 2,
          color: 'white',
          minWidth: '209px',
          margin: 2
        }}>
          <Typography variant='h7'>
            Number of Questions: {correctAnswer.length}
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{
          bgcolor: '#383e4e',
          padding: 2,
          color: 'white',
          minWidth: '209px',
          margin: 2
        }}>
          <Typography variant='h7'>
            Accuracy: {`${accuracy}%`}
          </Typography>
        </Paper>

      </Box>
    </React.Fragment>

  )
}

export default ResultCalculatioin