import Box from '@mui/material/Box';
import PhraseCard from './PhraseCard';

function PhraseList({ list, onDeletePhrase }) {
    if (list.length) {
        return (
            <>
                <h2 style={{ textAlign: "left" }}>Phrases</h2>
                <Box style={{ backgroundColor: "rgb(232,234,238)" }} sx={{ display: "grid", rowGap: 2, p: 2 }}>
                    {list.map((phrase, index) =>
                        <PhraseCard key={index} index={index} phrase={phrase} onDeletePhrase={onDeletePhrase} />
                    )}
                </Box>
            </>

        )
    }
}
export default PhraseList;


