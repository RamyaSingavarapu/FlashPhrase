import AddPhrase from "../Components/AddPhrase"
import PhraseList from "../Components/PhraseList"

function PhrasesPage() {
    const onAdd = () => {

    }
    return (
        <>
            <AddPhrase onAdd={onAdd} />
            <PhraseList />
        </>

    )
}
export default PhrasesPage;