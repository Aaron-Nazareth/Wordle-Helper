
import './App.css';
import WordleContainer from './Containers/WordleContainer';
import word2 from './images/word2.png';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <>
        <NavigationBar/>
        <img src={word2} className="App-logo" alt="wordle logo" />
        <WordleContainer/>
    </>

  )
}

export default App;
