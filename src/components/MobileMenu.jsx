import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MobileMenu = () => {

    const [open, setOpen] = useState(false)
    const navigate = useNavigate();

    function handleToggle() {
        setOpen(open => !open)
    }

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open-menu"
                edge="end"
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    paddingRight: '7vw'
                }}
                onClick={handleToggle}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="right"
                open={open}
                onClose={handleToggle}
            >
                <List sx={{
                    bgcolor: "#262a35",
                    color: "white",
                    width: 250,
                    height: '100%'
                }}>
                    <ListItem button onClick={() => {
                        handleToggle();
                        navigate('/');
                    }}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={() => {
                        handleToggle();
                        navigate('/about');
                    }}>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button onClick={() => {
                        handleToggle();
                        navigate('/login');
                    }}>
                        <ListItemText primary="Login" />
                    </ListItem>
                    <ListItem button onClick={() => {
                        handleToggle();
                        navigate('/signup');
                    }}>
                        <ListItemText primary="SignUp" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default MobileMenu;
