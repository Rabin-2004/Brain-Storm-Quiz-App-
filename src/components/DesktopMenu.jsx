import { Toolbar, Typography, Button } from "@mui/material"

const DesktopMenu = () => {
  return (
    <Toolbar>
      <Typography variant="h5" sx={{
        flexGrow: 1,
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
      }}>
        BrainStorm🧠
      </Typography>
      <Typography sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <Button sx={{ color: "white" }}>Home</Button>
        <Button sx={{ color: "white" }}>About</Button>
        <Button sx={{ color: "white" }}>Log In</Button>
        <Button sx={{ color: "white" }}>Sign Up</Button>
      </Typography>
    </Toolbar>
  )
}

export default DesktopMenu