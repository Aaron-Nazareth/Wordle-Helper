import { useState, useEffect, useRef } from "react";
import Grid from "./Grid";


const SubmitForm = ({ onWordSubmission, word }) => {

    // setting initial state for keys
    const [key0, setKey0] = useState("t0");
    const [key1, setKey1] = useState("a1");
    const [key2, setKey2] = useState("r2");
    const [key3, setKey3] = useState("e3");
    const [key4, setKey4] = useState("s4");

    // setting initial state for our colours
    const [colour0, setColour0] = useState("");
    const [colour1, setColour1] = useState("");
    const [colour2, setColour2] = useState("");
    const [colour3, setColour3] = useState("");
    const [colour4, setColour4] = useState("");


    // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
    // The returned object will persist for the full lifetime of the component.

    const isMounted = useRef(false); // useRef set to false so setKeys in useEffect is not used initially. This is because we don't want it to run before its been mounted.

    useEffect(()=> {
        if (isMounted.current) {    // if its not true we want to set the keys to true the first time it loops
        setKey0(word.word[0] + "0")
        setKey1(word.word[1] + "1")
        setKey2(word.word[2] + "2")
        setKey3(word.word[3] + "3")
        setKey4(word.word[4] + "4")

        } else {
            isMounted.current = true;
        }
        
    }, [word])  // We want use this so that useEffect is called whenever the state of [word] changes and our keys can be set to the relevant one for each new word


    // Creating event handlers for our colour changes
    const handleColour0Change = (event) => {
        setColour0(event.target.value);

    }
    const handleColour1Change = (event) => {
        setColour1(event.target.value);

    }
    const handleColour2Change = (event) => {
        setColour2(event.target.value);

    }
    const handleColour3Change = (event) => {
        setColour3(event.target.value);

    }
    const handleColour4Change = (event) => {
        setColour4(event.target.value);

    }

    // Creating an event handler for our form submission
    const handleFormSubmit = async (event) => { // We
        event.preventDefault(); // Ensures page won't refresh on form submission

        if (!colour0 || !colour1 || !colour2 || !colour3 || !colour4) {
            alert("missing information");   // Alert for empty fields on form submission options
            return;
        }


        const newWordObject = new Map() // We want to map the key-value pairs for our new word directly, using the keys and colours we've set up with state
            
            newWordObject.set(key0,colour0);
            newWordObject.set(key1,colour1);
            newWordObject.set(key2,colour2);
            newWordObject.set(key3,colour3);
            newWordObject.set(key4,colour4);

            const objectHolder = Object.fromEntries(newWordObject); // Here we create an object from these new mapped key-value pair entries
        
        await onWordSubmission(objectHolder)    // Make our async function (handleFormSubmit) wait for this to be resolved before executing
        // console.log("onward submission finished");
        // console.log(word.word);

        // Reset colour fields to be ready for next form submission
        setColour0("");
        setColour1("");
        setColour2("");
        setColour3("");
        setColour4("");
        
    }

    return (
        <>
        {/* // We pass our event handler here so the form knows to run our event on submission */}
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="colour0">{key0}</label>
                <input type="text" id="colour0" value={colour0} onChange={handleColour0Change} />


                <label htmlFor="colour1">{key1}</label>
                <input type="text" id="colour1" value={colour1} onChange={handleColour1Change} />


                <label htmlFor="colour2">{key2}</label>
                <input type="text" id="colour2" value={colour2} onChange={handleColour2Change} />


                <label htmlFor="colour3">{key3}</label>
                <input type="text" id="colour3" value={colour3} onChange={handleColour3Change} />


                <label htmlFor="colour4">{key4}</label>
                <input type="text" id="colour4" value={colour4} onChange={handleColour4Change} />

                <input type="submit" value="SUBMIT" />

            </form>
            
        
        </>
        
    )


}

export default SubmitForm;


// --------------------------------------
// Some failed ideas from our attempts to have our keys update with each new word:

// newWordObject[key0] = colour0;
// newWordObject[key1] = colour1;
// newWordObject[key2] = colour2;
// newWordObject[key3] = colour3;
// newWordObject[key4] = colour4;


// `${word.word[0]}0`: colour0,
// key1 : colour1,
// key2 : colour2,
// key3 : colour3,
// key4 : colour4


// `${word.word[0]}0`: colour0,
// `${word.word[1]}1`: colour1,
// `${word.word[2]}2`: colour2,
// `${word.word[3]}3`: colour3,
// `${word.word[4]}4`: colour4,
// -------------------------------------