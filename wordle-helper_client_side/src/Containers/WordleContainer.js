import { useState, useEffect } from "react";
import WordList from "../Components/WordList";





//setting our state
const WordleContainer = () => {

    const [words, setWords] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/helper/start")
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