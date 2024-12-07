import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { useSearch } from '../context/SearchContext'

const SeeAnswer = ({ index, decodeHtml }) => {
  const { userAnswer, correctAnswer } = useSearch();

  return (
    <>
      <Box sx={{
        display: 'flex',
        gap: '5vw'
      }}>
        <Paper elevation={3} sx={{ mb: 2, ml: "1vw", padding: 2, bgcolor: '#F0F0F0' }}>
          <Box >
            <Typography variant="h8" color="textPrimary" sx={{ fontStyle: "italic", fontSize: { xs: '10px', sm: '12px', md: '14px', fontWeight: 'bold' } }}>
              Your Answer:
            </Typography>
            <Typography sx={{ fontSize: { xs: '10px', sm: '12px', md: '14px' } }}>
              {userAnswer[index] ? userAnswer[index] : "No answer"}
            </Typography>
          </Box>
        </Paper>

        <Paper elevation={3} sx={{ mb: 2, ml: "1vw", padding: 2, bgcolor: '#F0F0F0' }}>
          <Box >
            <Typography variant="h8" color="textPrimary" sx={{ fontStyle: "italic", fontSize: { xs: '10px', sm: '12px', md: '14px', fontWeight: 'bold' } }}>
              Correct Answer:
            </Typography>
            <Typography sx={{ fontSize: { xs: '10px', sm: '12px', md: '14px' } }}>
              {correctAnswer[index] ? decodeHtml(correctAnswer[index]) : "No answer"}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </>
  )
}

export default SeeAnswer