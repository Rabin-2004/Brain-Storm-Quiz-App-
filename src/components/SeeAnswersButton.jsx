import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSearch } from '../context/SearchContext'

const SeeAnswersButton = () => {

  const { setSeeAns } = useSearch();

  const navigate = useNavigate();

  function handleClick() {
    setSeeAns(true)
    navigate(`/quiz?query=seeAnswers`)
  }

  return (
    <Button variant='contained' onClick={handleClick} sx={{
      marginTop: '6vh',
      fontWeight: 'bold',
      bgcolor: 'orange',
      color: 'black'
    }}>
      See Answers
    </Button>
  )
}

export default SeeAnswersButton