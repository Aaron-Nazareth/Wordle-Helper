
import './App.css';
import WordleContainer from './Containers/WordleContainer';
// import Logo from './Components/Logo';
import wordlehelper from './images/wordlehelper.png';
import word2 from './images/word2.png';


function App() {
  return (
    <>

        <img src={word2} className="App-logo" alt="wordle logo" />
      <WordleContainer/>
    </>

  )
}

export default App;
