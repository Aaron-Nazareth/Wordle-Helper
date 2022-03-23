import { useState, useEffect, useRef } from "react";



const SubmitForm = ({ onWordSubmission, word }) => {

    const [key0, setKey0] = useState("t0");
    const [key1, setKey1] = useState("a1");
    const [key2, setKey2] = useState("r2");
    const [key3, setKey3] = useState("e3");
    const [key4, setKey4] = useState("s4");

    const [colour0, setColour0] = useState("");
    const [colour1, setColour1] = useState("");
    const [colour2, setColour2] = useState("");
    const [colour3, setColour3] = useState("");
    const [colour4, setColour4] = useState("");

    const isMounted = useRef(false);

    useEffect(()=> {
        if (isMounted.current) {
        setKey0(word.word[0] + "0")
        setKey1(word.word[1] + "1")
        setKey2(word.word[2] + "2")
        setKey3(word.word[3] + "3")
        setKey4(word.word[4] + "4")

        } else {
            isMounted.current= true;
        }
        

        

    }, [word]) 

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


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!colour0 || !colour1 || !colour2 || !colour3 || !colour4) {
            alert("missing information");
            return;
        }


        //create a key with string 

        // setKey0(word.word[0] + "0")
        // setKey0(word.word[1] + "1")
        // setKey0(word.word[2] + "2")
        // setKey0(word.word[3] + "3")
        // setKey0(word.word[4] + "4")

        const newWordObject = new Map() 



            //change the t0 etc to all colours 
            //the string literal set the keys similar to this
            //somehow pass in the object through literal 
            //word.word.0 
            //youll see the letters changing 
            //figure out how to update the keys not the value 
            //value is able to update 
            //t0 is a key we want to change this to another letter/index
            //you cant set a key as a string 
            
            newWordObject.set(key0,colour0);
            newWordObject.set(key1,colour1);
            newWordObject.set(key2,colour2);
            newWordObject.set(key3,colour3);
            newWordObject.set(key4,colour4);

            const objectHolder = Object.fromEntries(newWordObject);

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
            
        

        

        await onWordSubmission(objectHolder)
        console.log("onward submission finished");
        console.log(word.word);

        setColour0("");
        setColour1("");
        setColour2("");
        setColour3("");
        setColour4("");

        

        
    }

    return (
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
    )


}



export default SubmitForm;
