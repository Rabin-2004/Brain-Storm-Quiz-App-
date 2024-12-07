import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearch } from '../context/SearchContext'

const StartQuiz = () => {

  const { questionNo, difficulty } = useSearch();
  const nav = useNavigate()

  function handleClick() {
    nav(`/quiz?questions=${questionNo}&difficulty=${difficulty}`)
  }

  return (
    <Button variant='contained' onClick={handleClick} sx={{
      marginTop: '6vh',
      fontWeight: 'bold',
      bgcolor: 'orange',
      color: 'black'
    }}>
      Start Quiz
    </Button>
  )
}

export default StartQuiz