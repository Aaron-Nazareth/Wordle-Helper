import Word from "./Word";

//the name of wordlist is we still wanna return wordlist, but to find first word


const WordList = ({ words }) => {

    const wordNodes = words.map(word => {
        return <Word word={word} key={word.id} />
    })
    //take the array the first .map is to find the first word
    //.at() will take integer index and return the value
    //we can put logic here
    const firstWord = wordNodes.at(0);


    return (
        <>
            {/* {wordNodes} */}
            {firstWord}
        </>
    )


}



export default WordList;