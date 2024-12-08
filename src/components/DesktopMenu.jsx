import { Toolbar, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

const DesktopMenu = () => {
  const navigate = useNavigate();


  return (
    <Toolbar>
      <Typography variant="h5" sx={{
        flexGrow: 1,
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
      }}>
        BrainStorm🧠
      </Typography>
      <Typography sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <Button sx={{ color: "white" }} onClick={() => navigate('/')}>Home</Button>
        <Button sx={{ color: "white" }} onClick={ ()=> navigate('/about')}>About</Button>
        <Button sx={{ color: "white"  }} onClick={ ()=> navigate('/login')}>Log In</Button>
        <Button sx={{ color: "white" }} onClick={() => navigate('/signup')}> Sign Up</Button>
      </Typography>
    </Toolbar>
  )
}

export default DesktopMenu;
