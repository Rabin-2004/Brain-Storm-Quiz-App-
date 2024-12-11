import { Toolbar, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import LogOut from "./LogOut";

const DesktopMenu = () => {
  const navigate = useNavigate();
  const {isLoggedIn} = useSearch();

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
        
        {!isLoggedIn ? <> 
        <Button sx={{ color: "white"  }} onClick={ ()=> navigate('/login')}>Log In</Button>
        <Button sx={{ color: "white" }} onClick={() => navigate('/signup')}> Sign Up</Button>
        </> : 
        <>
        <Button sx={{ color: "white"  }}> Profile </Button>
        <LogOut />
        </>
        }
        

      </Typography>
    </Toolbar>
  )
}

export default DesktopMenu;
