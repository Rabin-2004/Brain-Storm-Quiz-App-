import { Box, Typography, TextField } from "@mui/material"
import { useSearch } from "../context/SearchContext"


const QuestionNumber = () => {

  const { questionNo, setQuestionNo } = useSearch();

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      const numberValue = parseInt(value, 10);

      if (numberValue <= 50) {
        setQuestionNo(numberValue);
      } else if (value === "") {

        setQuestionNo("");
      }
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Typography variant="h6" sx={{
        marginBottom: 2,
        fontSize: {
          xs: '0.9rem',
          sm: '1rem',
          md: '1.25rem',
        }
      }}>
        Enter your preferred number of questions
      </Typography>

      <TextField
        type='text'
        value={questionNo}
        onInput={handleInputChange}
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          min: 5,
          max: 50,
          step: 1,
        }}
        sx={{
          bgcolor: "white",
          borderRadius: '10px',
          width: {
            xs: "82.1719px",
          }
        }}
      />
    </Box>
  )
}

export default QuestionNumber