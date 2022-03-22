import SubmitForm from "../Components/SubmitForm";
import Word from "./Word";



const Grid = ({SubmitForm}) => {
//pass through the word as a prop 
//turn it into an array split
//toCharacter function 
//pass it in as a innerText 
//through css you can center it and space it 

    return(

            
            <div id="grid">
              <div className="green">1</div>
              <div className="item">2</div>
              <div className="item">3</div>
              <div className="item">4</div>
              <div className="item">5</div>
            </div>

    )

}

export default Grid;