
import './App.css';
import WordleContainer from './Containers/WordleContainer';
// import Logo from './Components/Logo';
import wordlehelper from './images/wordlehelper.png';
import Grid from './Components/Grid';

function App() {
  return (
    <>

      <h1> <center> The Imitation Game </center>  </h1>
      <img src={wordlehelper} className="App-logo" alt="wordle logo" />
      <WordleContainer/>
      <Grid/>
    </>

  )
}

export default App;
