import { Box } from "@mui/material"
import Form from "./Form"



const Body = () => {
  return (
    <Box sx={{
      bgcolor: "#383e4e",
      height: "100vh",
      color: "white",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Form />
    </Box>
  )
}

export default Body