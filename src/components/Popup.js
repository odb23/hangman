import React, {useEffect} from 'react'
import { checkWin } from '../helpers/helpers'

const Popup = ({wrongLetters, correctedLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = ''
  let finalMessageRevealWord = ''
  let playable = true;

  if (checkWin(correctedLetters, wrongLetters, selectedWord)=== 'win') {
      finalMessage = 'Congratulations! You won.'
      playable = false
  } else if (checkWin(correctedLetters, wrongLetters, selectedWord)=== 'lose') {
    finalMessage = 'Unfortunately! You lost.'
    playable = false
    finalMessageRevealWord = `... the word was ${selectedWord}`
  }

  useEffect(() => setPlayable(playable))

    return (
    <div className="popup-container" style={finalMessage !== '' ? {display: flex} : {}} >
      <div className="popup">
        <h2 >{finalMessage}</h2>
        <h3 >{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup