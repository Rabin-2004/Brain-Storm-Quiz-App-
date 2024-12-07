import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';

const ReturnHomeButton = () => {

  const { setQuestionNo, setDifficulty, setQuizData, setSeeAns } = useSearch()

  const navigate = useNavigate();

  function handleClick() {
    setQuestionNo(5);
    setDifficulty('easy');
    setQuizData([]);
    setSeeAns(false);
    navigate(`/`)
  }

  return (
    <Button variant='contained' onClick={handleClick} sx={{
      marginTop: '6vh',
      fontWeight: 'bold',
      bgcolor: 'orange',
      color: 'black'
    }}>
      Return to Home
    </Button>
  )
}

export default ReturnHomeButton