import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function PhraseList({ list, onDeletePhrase }) {
    if (list.length) {
        return (
            <>
                <h2 style={{ textAlign: "left" }}>Phrases</h2>
                <Box style={{ backgroundColor: "rgb(232,234,238)" }} sx={{ display: "grid", rowGap: 2, p: 2 }}>
                    {list.map((phrase, index) => {
                        return (<Card key={index}>
                            <CardContent sx={{ display: "grid", gridTemplateColumns: "4fr 1fr" }}>
                                <span style={{ marginTop: "10px" }}>{phrase}</span>
                                <button onClick={() => onDeletePhrase(index)}>Delete</button>
                            </CardContent>
                        </Card>)
                    })}
                </Box>
            </>

        )
    }
}
export default PhraseList;


