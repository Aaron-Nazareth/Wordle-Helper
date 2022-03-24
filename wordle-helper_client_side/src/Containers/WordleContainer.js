import { useState, useEffect } from "react";
import Word from "../Components/Word";
import SubmitForm from "../Components/SubmitForm";
import Grid from "../Components/Grid";





//setting our state
const WordleContainer = () => {

    const [words, setWords] = useState([]);


    const [colour0, setColour0] = useState("grey");  // put this up a level in wordlecontainer  passed as a prop to the grid - can create an array 
    const [colour1, setColour1] = useState("grey");   // pass colour states as props to grid - grid can handle updating the colour on click - grid is solely responsible for managing the clicks and updating colours 
    const [colour2, setColour2] = useState("grey");  // pass the colour states as props within the submit form 
    const [colour3, setColour3] = useState("grey");
    const [colour4, setColour4] = useState("grey");


    useEffect(() => {
        
        fetch("http://localhost:8080/helper/start")
            .then(response => response.json())  // Strip data we want from response using json function
            .then(data => setWords(data[0]))    // Set words array to be the first index of our data
    }, [])

    
    // fetch("http://localhost:8080/helper/start/{words}");
    //update variable in the path
    const filterWordList = async (newWordObject) => {
            // console.log(words.word);
            // console.log(newWordObject);

            // Need to use an await below because we don't want the function to execute until the fetch request is satisfied - account for even the smallest fraction of a delay in response, since working with a large database
            await fetch(`http://localhost:8080/helper/start/${words.word}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newWordObject)
        })
            .then(response => response.json())  // Strip data we want from our response
            .then(data => setWords(data[0])) // Update state for words array with first index filtered word that is new suggestion
            // console.log(newWords);
            // setWords(newWords[0]); - alternative use, which requires "newWords" variable to be created - have "const newWords = " before the await fetch
            // console.log("these are your new word");
            // console.log(words);
        }
    

    return (
        <>
            {/* <Word word={words} /> */}
             <Grid word={words} colour0={colour0} colour1={colour1} colour2={colour2} colour3={colour3} colour4={colour4}/>
                
                
            {/* <center> <SubmitForm  onWordSubmission={filterWordList} word={words} colour0={colour0} colour1={colour1} colour2={colour2} colour3={colour3} colour4={colour4}/> </center> */}
            
            


            
        </>
    )

}




export default WordleContainer;
