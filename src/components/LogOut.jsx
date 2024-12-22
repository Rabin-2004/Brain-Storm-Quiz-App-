import React from 'react'
import { Button, Typography } from '@mui/material'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSearch } from "../context/SearchContext.jsx"

const LogOut = () => {

    const navigate = useNavigate();
    const {setDisplayName, setIsLoggedIn} = useSearch();

    const handleLogOut = async () => {
        try{
            const auth = getAuth();
            await signOut(auth);
            console.log("User logged out");

            setIsLoggedIn(false);
            localStorage.setItem('isLoggedIn', 'false');

            setDisplayName(null);
            localStorage.removeItem('displayName');

            navigate('/login')
        }
     catch(err){
        console.log(err)
    }
}

  return (
    <Button sx={{color: 'white'}} onClick={handleLogOut}>
      <Typography variant='body1' gutterBottom>
        Log Out
        </Typography>
    </Button>
  )
}

export default LogOut