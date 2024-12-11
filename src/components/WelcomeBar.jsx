import { useState } from "react";
import { useSearch } from "../context/SearchContext";
import { Snackbar, Alert } from "@mui/material";

const Welcomebar = () => {

const {isLoggedIn, displayName} = useSearch();
const [openSnackbar, setOpenSnackBar] = useState(true);

function handleClose(){
setOpenSnackBar(t => !t)
}

  return (
    <>
    {
        isLoggedIn && (
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