import { Button } from '@mui/material'
import { useSearch } from '../context/SearchContext'
import { useNavigate } from 'react-router-dom';

const SubmitButton = () => {
  const { userAnswer, seeAns } = useSearch();
  const navigate = useNavigate();    

  function handleSubmit() {
    navigate(`/result`);
  }

  return (
    <>
      {!seeAns && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',  
          alignItems: 'center',
        }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 4 }}
          >
            Submit Answers
          </Button>
        </div>
      )}
    </>
  );
}

export default SubmitButton;
