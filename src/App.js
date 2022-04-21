import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word'
import './App.css';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { useState } from 'react';

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;
const correctLetters = [];
const wrongLetters = [];


function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  return (
    <>
      <h1>Hangman</h1>
      <p>Find the hidden word - Enter a letter </p>

      <div className='game-container'>
        <Figure />
        <WrongLetters />
        <Word selectedWord={selectedWord} correctLetters = {correctLetters}/>
      </div>
      <Popup />
      <Notification />
    </>
  );
}

export default App;
