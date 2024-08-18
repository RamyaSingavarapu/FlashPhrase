import { useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddPhrase from "./AddPhrase";

function PhraseCard({ index, phrase, onDeletePhrase, onEdit }) {
    const [isEditing, setIsEditing] = useState(false)
    const onModify = (modifiedPhrase) => {
        onEdit(index, modifiedPhrase)
        setIsEditing(false)
    }
    return (<Card>
        {isEditing ? (<CardContent><AddPhrase onAdd={onModify} initialValue={phrase} /></CardContent>) : (
            <CardContent sx={{ display: "grid", gridTemplateColumns: "4fr 1fr 1fr", columnGap: 1 }}>
                <span style={{ marginTop: "10px" }}>{phrase}</span>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => onDeletePhrase(index)}>Delete</button>
            </CardContent>)
        }
    </Card>)
}

export default PhraseCard;