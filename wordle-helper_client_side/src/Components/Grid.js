import { useEffect, useState } from "react";

//inital status is null

const Grid = ({word}) => {
  
const [oneWord,setOneWord] = useState('tares');
useEffect(()=>{
  if (word.word !=null) {
    setOneWord(word.word);
    
  }
},[word]
//run word change status
) 

//  const item = document.getElementsByClassName("item")
 

//  item.addEventListener("click", () => {
//   //  const currentColour = 
//  })


//  const newArray=word.word.split(); 

  //first word mean allwords, second word mean property 
  // const arr = Object.entries(word.word);

//pass through the word as a prop 
//turn it into an array split

//toCharacter function 
//pass it in as a innerText 
//through css you can center it and space it 

    return(

      // { word.word[0] }
     
        <div id="grid">

        <div className="item" colour="green">{oneWord[0]}</div>
        <div className="item" colour="grey">{oneWord[1]}</div>
        <div className="item" colour="grey">{oneWord[2]}</div>
        <div className="item" colour="grey">{oneWord[3]}</div>
        <div className="item" colour="grey">{oneWord[4]}</div>
        </div>

    )


      
    

}

export default Grid;