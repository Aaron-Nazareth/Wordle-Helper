import { useEffect, useState } from "react";

//inital status is null

const Grid = ({word, colour0, colour1, colour2, colour3, colour4}) => {
  



const [oneWord,setOneWord] = useState('tares');

// const [colour, setColour] = useState("grey");



useEffect(()=>{
  if (word.word !=null) {
    setOneWord(word.word);
    
  }
},[word]
//run word change status
) 


const items = document.getElementsByClassName("item")
const itemColour = ["grey", "yellow", "green"]

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", () => {

        let item = items[i]

        const currentColour = item.getAttribute("colour")

        const colourIndex = itemColour.indexOf(currentColour);

        const nextColour = itemColour[(colourIndex + 1) % 3];

        item.setAttribute("colour", nextColour)


    })
}


//  const items = document.getElementsByClassName("item")
//     const square0 = items[0]
//     const square1 = items[1]
//     const square2 = items[2]
//     const square3 = items[3]
//     const square4 = items[4]


//     const itemColour = ["grey", "yellow", "green"]
//     square0.addEventListener("click", () => {

//         const currentColour = square0.getAttribute("colour")

//         const colourIndex = itemColour.indexOf(currentColour);

//         const nextColour = itemColour[(colourIndex + 1) % 3];

//         square0.setAttribute("colour", nextColour)

//         // setColour0(nextColour)
//     })



    return(

      // { word.word[0] }
     
      <>
       <div id="grid">

        <div className="item" id="square0" colour="grey">{oneWord[0]}</div>  
        <div className="item" id="square1" colour="grey">{oneWord[1]}</div>
        <div className="item" id="square2" colour="grey">{oneWord[2]}</div>
        <div className="item" id="square3" colour="grey">{oneWord[3]}</div>
        <div className="item" id="square4" colour="grey">{oneWord[4]}</div>
        </div> 


        <input type="submit" value="Submit" className="submitForm"/> 
      
      </>
      // pass colour within the state 
       

    )



}

export default Grid;