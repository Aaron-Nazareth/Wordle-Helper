import { useState, useEffect } from "react";
import WordList from "../Components/WordList";





//setting our state
const WordleContainer = () => {

    const [words, setWords] = useState([]);
    // const [guessWord,setGuessWord]=useState("");
    // let url = `http://localhost:8080/helper/start/${guessWord}`;


    useEffect(() => {
        
        fetch("http://localhost:8080/helper/start")
        //do not need to be state
        // fetch("http://localhost:8080/helper/start/{words}");
       


        //update variable in the path
            .then(response => response.json())
            .then(data => setWords(data))
    }, [])
    

    return (
        <>
            <WordList words={words} />
            
        </>
    )

}




export default WordleContainer;