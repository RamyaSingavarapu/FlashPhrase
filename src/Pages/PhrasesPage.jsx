import { useState } from "react"
import AddPhrase from "../Components/AddPhrase"
import PhraseList from "../Components/PhraseList"
import Container from '@mui/material/Container';

function PhrasesPage() {
    const [phrases, setPhrases] = useState([])

    const onAdd = (newPhrase) => {
        setPhrases([...phrases, newPhrase])
    }
    return (
        <Container maxWidth={false} sx={{ width: "30vw" }}>
            <AddPhrase onAdd={onAdd} />
            <PhraseList list={phrases} />
        </Container>

    )
}
export default PhrasesPage;