import { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";
import { Snackbar, Alert } from "@mui/material";

const Welcomebar = () => {

const {isLoggedIn, displayName} = useSearch();
const [openSnackbar, setOpenSnackBar] = useState(false);

useEffect(()=>{
  if (isLoggedIn && sessionStorage.getItem('welcomeShown')){
    setOpenSnackBar(true);
    sessionStorage.setItem('welcomeShown', 'true')
  }
}, [isLoggedIn])

function handleClose(){
setOpenSnackBar(t => !t)
}

  return (
    <>
    {
        isLoggedIn && openSnackbar && (
            <Snackbar open={openSnackbar}
            autoHideDuration = {3000}
            onClose = {handleClose}
            anchorOrigin= {{vertical: 'top', horizontal: 'center'}}
            >
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    Welcome {displayName}!
                </Alert>
            </Snackbar>
        )
    }
    </>
  )
}

export default Welcomebar