import { Card, CardHeader, CardContent, Box, Typography, TextField, InputAdornment, IconButton, Button } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase.js'
import { useState } from "react"
import MainMenu from "./MainMenu"

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  function handleShowPass() {
    setShowPass(e => !e);
  }


  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };


  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSignUp = async () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      setError('');
      setSuccess('');
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(`Welcome ${userCredential.user.email}!`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <MainMenu />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <Card sx={{
          minWidth: '30vw',
          maxWidth: '60vw',
          maxHeight: '80vh',
          mt: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <CardHeader title="Create an Account" sx={{
            bgcolor: "#262a35",
            textAlign: 'center',
            color: 'white'
          }} />
          <CardContent>
            <Typography variant="h6">
              Username
            </Typography>
            <TextField
              type="email"
              fullWidth
              variant="outlined"
              margin="normal"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography variant="h6">
              Password
            </Typography>
            <TextField
              type={showPass ? 'text' : 'password'}
              fullWidth
              variant="outlined"
              margin="normal"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPass} edge="end">
                      {showPass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {error && <Typography color="error">{error}</Typography>}
            {success && <Typography color="success">{success}</Typography>}
          </CardContent>
          <Button variant="contained" sx={{ mb: 3 }} onClick={handleSignUp}>
            Sign Up
          </Button>
        </Card>
      </Box>
    </>
  );
};

export default SignUp;
