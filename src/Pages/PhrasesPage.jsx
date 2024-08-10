import { useState } from "react"
import AddPhrase from "../Components/AddPhrase"
import PhraseList from "../Components/PhraseList"

function PhrasesPage() {
    const [phrases, setPhrases] = useState([])

    const onAdd = (newPhrase) => {
        setPhrases([...phrases, newPhrase])
    }
    return (
        <>
            <AddPhrase onAdd={onAdd} />
            <PhraseList list={phrases} />
        </>

    )
}
export default PhrasesPage;