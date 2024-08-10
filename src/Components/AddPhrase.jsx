import { useState } from "react"

function AddPhrase({ onAdd }) {
    const [phrase, setPhrase] = useState("")
    const onPhraseChange = (e) => {
        setPhrase(e.target.value)
    }
    const handleClick = () => {
        onAdd(phrase)
        setPhrase("")
    }

    return (
        <div>
            <input type="textarea" value={phrase} onChange={onPhraseChange} />
            <button onClick={handleClick} disabled={!phrase}>Add</button>
        </div>
    )
}

export default AddPhrase;