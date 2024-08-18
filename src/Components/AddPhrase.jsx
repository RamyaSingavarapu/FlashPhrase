import { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function AddPhrase({ onAdd, initialValue = "" }) {

    const [phrase, setPhrase] = useState(initialValue)
    const onPhraseChange = (e) => {
        setPhrase(e.target.value)
    }
    const handleClick = () => {
        onAdd(phrase)
        setPhrase("")
    }

    return (
        <Box sx={{ display: "grid", gridTemplateRows: "4fr 1fr", width: "100%" }}>
            <TextField sx={{ width: "100%" }}
                onChange={onPhraseChange}
                label="Phrase"
                multiline
                rows={4}
                value={phrase}
            />
            <Box sx={{ display: "grid", gridTemplateColumns: "8fr 1fr" }}>
                <div></div>
                <Button variant="contained" onClick={handleClick} disabled={!phrase}>Add</Button>
            </Box>


        </Box>
    )
}

export default AddPhrase;