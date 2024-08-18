import { useState } from "react"
import AddPhrase from "../Components/AddPhrase"
import PhraseList from "../Components/PhraseList"
import Container from '@mui/material/Container';

function PhrasesPage() {
    const [phrases, setPhrases] = useState([])

    const onAdd = (newPhrase) => {
        setPhrases([...phrases, newPhrase])
    }

    const onDelete = (index) => {
        const currentPhrases = [...phrases];
        currentPhrases.splice(index, 1);
        setPhrases(currentPhrases)
    }

    const onEdit = (index, phrase) => {
        const currentPhrases = [...phrases];
        currentPhrases[index] = phrase;
        setPhrases(currentPhrases);
    }

    return (
        <Container maxWidth={false} sx={{ width: "30vw" }}>
            <AddPhrase onAdd={onAdd} />
            <PhraseList list={phrases} onDeletePhrase={onDelete} onEdit={onEdit} />
        </Container>

    )
}
export default PhrasesPage;