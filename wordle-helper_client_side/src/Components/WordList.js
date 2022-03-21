import Word from "./Word";

const WordList = ({ words }) => {

    const wordNodes = words.map(word => {
        return <Word word={word} key={word.id} />
    })


    return (
        <>
            {wordNodes}
        </>
    )


}



export default WordList;