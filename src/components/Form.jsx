import { Container } from '@mui/material'
import QuestionNumber from './QuestionNumber';
import Difficulty from './Difficulty';
import StartQuiz from './StartQuiz';

const Form = () => {

  return (
    <Container sx={{
      display: "flex",
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: "center"
    }}>

      <QuestionNumber />
      <Difficulty />
      <StartQuiz />
    </Container>
  )
}

export default Form