import { Box, Select, Typography, MenuItem } from "@mui/material"
import { useSearch } from "../context/SearchContext"


const Difficulty = () => {

    const { difficulty, setDifficulty } = useSearch();

    function handleChange(e) {
        setDifficulty(e.target.value);
    }

    return (
        < Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography variant="h6" sx={{
                marginTop: 2,
                marginBotoom: 2,
                fontSize: {
                    xs: '0.9rem',
                    sm: '1rem',
                    md: '1.25rem',
                }
            }}>
                Choose your preferred difficulty
            </Typography>

            <Select
                value={difficulty}
                onChange={handleChange}
                sx={{
                    bgcolor: 'white',
                    borderRadius: '10px'
                }}
            >
                <MenuItem value={'easy'}> Easy </MenuItem>
                <MenuItem value={'medium'}> Medium </MenuItem>
                <MenuItem value={'hard'}> Hard </MenuItem>
            </Select>

        </ Box>
    )
}

export default Difficulty