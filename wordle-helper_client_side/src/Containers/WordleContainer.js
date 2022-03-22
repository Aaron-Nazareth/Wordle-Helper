import { useState, useEffect } from "react";
import WordList from "../Components/WordList";
import SubmitForm from "../Components/SubmitForm";





//setting our state
const WordleContainer = () => {

    const [words, setWords] = useState([]);
    // const [guessWord,setGuessWord]=useState("");
    // let url = `http://localhost:8080/helper/start/${guessWord}`;


    useEffect(() => {
        
        fetch("http://localhost:8080/helper/start")
        //does not need to be state
            .then(response => response.json())  // Strip data we want from response using json function
            .then(data => setWords(data[0]))    // Set words array to be the first index of our data
        
        
        // fetch("http://localhost:8080/helper/start/{words}");
        //update variable in the path
    }, [])

    const filterWordList = async (newWordObject) => {
            console.log(words.word);
            console.log(newWordObject);
            const newWords = await fetch(`http://localhost:8080/helper/start/${words.word}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newWordObject)
        })
            .then(response => response.json())  // Strip data we want from our response
            // .then(data => console.log(data[0])) // Update state for words array with first index filtered word that is new suggestion
            console.log(newWords);
            setWords(newWords[0]);
            console.log("these are your new word");
            console.log(words);
        }
    

    return (
        <>
            <WordList word={words} />
            <SubmitForm onWordSubmission={filterWordList} word={words}/>

            
        </>
    )

}




export default WordleContainer;