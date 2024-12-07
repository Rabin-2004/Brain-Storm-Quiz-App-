import { AppBar } from "@mui/material"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"

const MainMenu = () => {
  return (
    <AppBar sx={{
      bgcolor: "#262a35",
      fontSize: { xs: '0.5rem', sm: '2rem', md: '2.5rem' },
      width: "100%",
      display: { xs: "flex", sm: "block" },
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}>

      <DesktopMenu />
      <MobileMenu />
    </AppBar>
  )
}

export default MainMenu