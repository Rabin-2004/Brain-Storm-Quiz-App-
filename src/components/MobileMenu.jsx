import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const MobileMenu = () => {

    const [open, setOpen] = useState(false)

    function handleToggle() {
        setOpen(!open)
    }

    return (
        <>
            <IconButton color="inherit" aria-label="open-menu" edge="end" sx={{
                display: { xs: 'block', sm: 'none' },
                paddingRight: '7vw'
            }} onClick={handleToggle}>
                <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={open} onClose={handleToggle}>
                <List sx={{
                    bgcolor: "#262a35",
                    color: "white",
                    width: 250,
                    height: '100%'
                }}>
                    <ListItem button onClick={handleToggle}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={handleToggle}>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button onClick={handleToggle}>
                        <ListItemText primary="Login" />
                    </ListItem>
                    <ListItem button onClick={handleToggle}>
                        <ListItemText primary="SignUp" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default MobileMenu