import React from 'react'
import { Box } from '@mui/material';
import SeeAnswersButton from './SeeAnswersButton';
import ReturnHomeButton from './ReturnHomeButton';
import ResultCalculatioin from './ResultCalculatioin';

const QuizResult = () => {

  return (
    <Box sx={{
      bgcolor: "#383e4e ",
      height: "100vh",
      color: "white",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}
    >
      <ResultCalculatioin />
      <SeeAnswersButton />
      <ReturnHomeButton />
    </Box>
  )
}

export default QuizResult