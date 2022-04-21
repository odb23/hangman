import React, {useEffect} from 'react'

const Popup = ({wrongLetters, correctLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = ''
  let finalMessageRevealWord = ''
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord)=== 'win') {
      finalMessage = 'Congratulations! You won.'
      playable = false
  } else if (checkWin(correctLetters, wrongLetters, selectedWord)=== 'lose') {
    finalMessage = 'Unfortunately! You lost.'
    playable = false
    finalMessageRevealWord = `... the word was ${selectedWord}`
  }

  function checkWin(correct, wrong, word) {
    let status = 'win';
  
    // Check for win
    word.split('').forEach(letter => {
      if(!correct.includes(letter)){
        status = '';
      }
    });
    
    // Check for lose
    if(wrong.length === 6) status = 'lose';
  
    return status
  }

  useEffect(() => setPlayable(playable))

    return (
    <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}} >
      <div className="popup">
        <h2 >{finalMessage}</h2>
        <h3 >{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup