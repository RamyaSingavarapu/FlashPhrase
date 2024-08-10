function PhraseList({ list }) {
    return (
        <ul>
            {list.map((phrase, index) => {
                return <li key={index}>{phrase}</li>
            })}
        </ul>
    )
}
export default PhraseList;


