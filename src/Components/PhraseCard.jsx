import { useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function PhraseCard({ index, phrase, onDeletePhrase }) {
    const [isEditing, setIsEditing] = useState(false)
    return (<Card>
        <CardContent sx={{ display: "grid", gridTemplateColumns: "4fr 1fr 1fr", columnGap: 1 }}>
            <span style={{ marginTop: "10px" }}>{phrase}</span>
            <button>Edit</button>
            <button onClick={() => onDeletePhrase(index)}>Delete</button>
        </CardContent>
    </Card>)
}

export default PhraseCard;