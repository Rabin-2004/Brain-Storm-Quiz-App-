import React from 'react'
import { FormControl, RadioGroup, Grid, FormControlLabel, Radio, Typography} from "@mui/material";
import { useSearch } from "../context/SearchContext";

const UserAnswer = ({ index, answers, decodeHtml }) => {
  const { userAnswer, setUserAnswer } = useSearch();

  function handleAnswerChange(e) {
    const answer = e.target.value;
    const newAnswer = [...userAnswer];
    newAnswer[index] = answer || null;
    setUserAnswer(newAnswer);
  }


  return (
    <FormControl component="fieldset">
      <RadioGroup name={`q-${index}`} sx={{ width: "100%" }} onChange={handleAnswerChange}>
        <Grid container spacing={2}>
          {answers.map((answer, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <FormControlLabel
                value={answer}
                control={<Radio />}
                label={
                  <Typography sx={{ fontSize: { xs: '14px', sm: '14px', md: '16px' } }}>
                    {decodeHtml(answer)}
                  </Typography>
                }
                sx={{
                  width: "100%",
                  ml: "1vw",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  )
}

export default UserAnswer