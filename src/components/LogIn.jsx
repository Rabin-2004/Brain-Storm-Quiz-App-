import { Card, CardHeader, CardContent, Box, Typography, TextField, InputAdornment, IconButton, Button } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import MainMenu from "./MainMenu"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase.js'
import { useNavigate } from "react-router-dom" 
import { useSearch } from "../context/SearchContext.jsx"

const LogIn = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); 
  const {setIsLoggedIn, setDisplayName} = useSearch();

  function handleShowPass() {
    setShowPass(e => !e);
  }

  const handleLogin = async () => {
    try {
      setError('');
      setSuccess('');
      
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const displayName = email.split('@')[0];
      setDisplayName(displayName);
      localStorage.setItem('displayName', displayName);

      setSuccess(`Welcome back ${userCredential.user.email}!`);
      
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true')

      navigate('/'); 
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
          <CardHeader title="Log In" sx={{
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
          <Button variant="contained" sx={{ mb: 3 }} onClick={handleLogin}>
            Log In
          </Button>
        </Card>
      </Box>
    </>
  );
}

export default LogIn;
