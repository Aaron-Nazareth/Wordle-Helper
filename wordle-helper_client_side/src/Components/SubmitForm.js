import { useState } from "react";

const SubmitForm = ({onWordSubmission}) => {

    const [t0, setT0] = useState("");
    const [a1, setA1] = useState("");
    const [r2, setR2] = useState("");
    const [e3, setE3] = useState("");
    const [s4, setS4] = useState("");


    const handleT0Change = (event) => {
        setT0(event.target.value);

    }
    const handleA1Change = (event) => {
        setA1(event.target.value);

    }
    const handleR2Change = (event) => {
        setR2(event.target.value);

    }
    const handleE3Change = (event) => {
        setE3(event.target.value);

    }
    const handleS4Change = (event) => {
        setS4(event.target.value);

    }


    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!t0 || !a1 || !r2 || !e3 || !s4) {
            alert("missing information");
            return;
        }
    
        const newWordObject = {
        t0: t0,
        a1: a1,
        r2: r2,
        e3: e3,
        s4: s4
        }

        onWordSubmission(newWordObject)

        setT0("");
        setA1("");
        setR2("");
        setE3("");
        setS4("");


    }

        return (
            <form>
            <label htmlFor="t0">t0:</label>
            <input type="text" id="t0" value={t0} onChange={handleT0Change} />


            <label htmlFor="a1">a1:</label>
            <input type="text" id="a1" value={a1} onChange={handleA1Change} />


            <label htmlFor="r2">r2:</label>
            <input type="text" id="r2" value={r2} onChange={handleR2Change} />


            <label htmlFor="e3">e3:</label>
            <input type="text" id="e3" value={e3} onChange={handleE3Change} />


            <label htmlFor="s4">s4:</label>
            <input type="text" id="s4" value={s4} onChange={handleS4Change} />
            
            <input type="submit" value="SUBMIT"/>

            </form>
        )


    }



export default SubmitForm;
