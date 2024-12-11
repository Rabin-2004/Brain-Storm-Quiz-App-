import { Box} from "@mui/material"
import Welcomebar from "./WelcomeBar"
import Form from "./Form"
import { useSearch } from "../context/SearchContext"


const Body = () => {

  const {isLoggedIn, displayName} = useSearch()

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
      <Welcomebar />
      <Form />
    </Box>
  )
}

export default Body