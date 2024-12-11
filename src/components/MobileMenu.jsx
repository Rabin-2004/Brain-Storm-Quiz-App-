import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import LogOut from "./LogOut";

const MobileMenu = () => {

    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const { isLoggedIn } = useSearch();

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
                    {!isLoggedIn ? <>
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
                    </> : 
                    <>
                    <ListItem button onClick={() => handleToggle}>
                        <LogOut />
                    </ListItem>
                    <ListItem button onClick={() => handleToggle}>
                        Profile
                    </ListItem>
                     </>}


                </List>
            </Drawer>
        </>
    )
}

export default MobileMenu;
