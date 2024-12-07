import { useMemo } from 'react'
import { Box, Typography, Button } from '@mui/material';
import QuizAnswer from './QuizAnswer';


const QuizQsn = ({ quiz, index }) => {

  const decodeHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.documentElement.textContent || doc.body.textContent;
  }

  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);


  const allAnswers = useMemo(() => shuffleArray([...quiz.incorrect_answers, quiz.correct_answer]), [quiz]);


  return (
    <Box sx={{ mb: 4 }}>
      <Box component="ul" sx={{
        listStyleType: 'disc',
        pl: 4,
        fontWeight: 'bold',
        fontSize: { xs: '14px', sm: '14px', md: '16px' }
      }}>
        <Typography variant='h7' component='li' sx={{ display: 'list-item' }}>
          {decodeHtml(quiz.question)}
        </Typography>
      </Box>

      <QuizAnswer answers={allAnswers} index={index} decodeHtml={decodeHtml} />



    </Box>
  )
}

export default QuizQsn
