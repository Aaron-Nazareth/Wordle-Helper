
import './App.css';
import WordleContainer from './Containers/WordleContainer';
// import Logo from './Components/Logo';
import wordlehelper from './images/wordlehelper.png';
import word2 from './images/word2.png';


function App() {
  return (
    <>
{/* a comment  */}
      <header> 
      <div class="menuLeft">
        <button id="navButton" class="icon" aria-label="Navigation menu">
          <nav-icon>
         
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    <title>ic_fluent_navigation_24_filled</title>
    <desc>Created with Sketch.</desc>
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="ic_fluent_navigation_24_filled" fill="#212121" fill-rule="nonzero">
            <path d="M3,17 L21,17 C21.5522847,17 22,17.4477153 22,18 C22,18.5128358 21.6139598,18.9355072 21.1166211,18.9932723 L21,19 L3,19 C2.44771525,19 2,18.5522847 2,18 C2,17.4871642 2.38604019,17.0644928 2.88337887,17.0067277 L3,17 L21,17 L3,17 Z M2.99987969,11 L20.9998797,10.9978344 C21.5521644,10.9977679 22,11.4454293 22,11.997714 C22,12.5105499 21.6140635,12.9332676 21.1167397,12.9910926 L21.0001203,12.9978344 L3.00012031,13 C2.44783557,13.0000664 2.00000001,12.5524051 2.00000001,12.0001203 C2.00000001,11.4872845 2.38593645,11.0645667 2.88326032,11.0067418 L2.99987969,11 L20.9998797,10.9978344 L2.99987969,11 Z M3,5 L21,5 C21.5522847,5 22,5.44771525 22,6 C22,6.51283584 21.6139598,6.93550716 21.1166211,6.99327227 L21,7 L3,7 C2.44771525,7 2,6.55228475 2,6 C2,5.48716416 2.38604019,5.06449284 2.88337887,5.00672773 L3,5 L21,5 L3,5 Z" id="🎨-Color"></path>
        </g>
    </g>
</svg>

           
          </nav-icon>
          </button>
        <button id="helpButton" class="icon" aria-label="Instructions">
        <help-icon>
        <svg width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon">
  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"/>
  <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"/>
</svg>

        </help-icon>
       </button>
        </div>
        <div class="title"> The Imitation Game</div>
        <div class="menuRight">
        <button id="settingButton" class="icon" aria-label="Setting">
        <game-icon icon="setting"> 
        <svg width="24px" height="24px"  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <title>ionicons-v5-q</title><path d="M256,176a80,80,0,1,0,80,80A80.24,80.24,0,0,0,256,176Zm172.72,80a165.53,165.53,0,0,1-1.64,22.34l48.69,38.12a11.59,11.59,0,0,1,2.63,14.78l-46.06,79.52a11.64,11.64,0,0,1-14.14,4.93l-57.25-23a176.56,176.56,0,0,1-38.82,22.67l-8.56,60.78A11.93,11.93,0,0,1,302.06,486H209.94a12,12,0,0,1-11.51-9.53l-8.56-60.78A169.3,169.3,0,0,1,151.05,393L93.8,416a11.64,11.64,0,0,1-14.14-4.92L33.6,331.57a11.59,11.59,0,0,1,2.63-14.78l48.69-38.12A174.58,174.58,0,0,1,83.28,256a165.53,165.53,0,0,1,1.64-22.34L36.23,195.54a11.59,11.59,0,0,1-2.63-14.78l46.06-79.52A11.64,11.64,0,0,1,93.8,96.31l57.25,23a176.56,176.56,0,0,1,38.82-22.67l8.56-60.78A11.93,11.93,0,0,1,209.94,26h92.12a12,12,0,0,1,11.51,9.53l8.56,60.78A169.3,169.3,0,0,1,361,119L418.2,96a11.64,11.64,0,0,1,14.14,4.92l46.06,79.52a11.59,11.59,0,0,1-2.63,14.78l-48.69,38.12A174.58,174.58,0,0,1,428.72,256Z"/></svg>
        </game-icon> 
          </button>

          </div>
       </header>
        <img src={wordlehelper} className="App-logo" alt="wordle logo" />
      <WordleContainer/>
    </>

  )
}

export default App;
