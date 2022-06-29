import logo from './assets/logo.svg';
import close from './assets/icon-close.svg';
import rules from './assets/image-rules.svg';
import './App.css';
import { useEffect, useState } from 'react';
import GameBoard from './components/GameBoard/GameBoard';
import WinLoss from './components/WinLoss/WinLoss';


function App() {
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState(false);
  const [userPick, setUserPick] = useState('');
  const [computerPick, setComputerPick] = useState('');
  const [showRules, setShowRules] = useState(false);
  const [result, setResult] = useState('');


  useEffect(() => {
    const scoreToRead = localStorage.getItem('rps-score');

    if(scoreToRead !== null) {
      setScore( parseInt(scoreToRead) );
    }
  }, []);

  useEffect(() => {
    const rules = document.querySelector('.rules-sheet');
    const overlay = document.querySelector('.overlay');

    if(showRules) {
      rules.classList.add('show');
      overlay.classList.add('show-overlay');
    }
    else{
      rules.classList.remove('show');
      overlay.classList.remove('show-overlay');
    }
  }, [showRules]);

  
  return (
    <div className="App">
      <header className='flex justify-space-between align-center'>
        <img className='logo' src={logo} alt='Rock, Paper, Scissors Logo' />
        
        <div className='score-counter flex justify-center align-center flex-column'>
          <p>SCORE</p>
          <p className='score-counter__score'>{score}</p>
        </div>
      </header>

      {picked ? 
        <WinLoss 
          userPick={userPick}
          setPicked={setPicked} 
          computerPick={computerPick}
          result={result}
        /> 
        : 
        <GameBoard 
          setPicked={setPicked} 
          setUserPick={setUserPick}
          setComputerPick={setComputerPick}
          score={score}
          setScore={setScore}
          setResult={setResult}
        /> 
      }

      <button className='rules-button' onClick={() => setShowRules(!showRules)}>RULES</button>

      <div className='overlay flex justify-center align-center'>
        <div className='rules-sheet'>
          <div className='flex justify-space-between align-center'>
            <p>RULES</p>
            <button className='rules-sheet__close-button' onClick={() => setShowRules(!showRules)}>
              <img src={close} alt='Close' />
            </button>
          </div>

          <div className='rules-sheet__sheet'>
            <img src={rules} alt='Rock, Paper, Scissors Rules' />
          </div>
        </div>
      </div>

      <footer className='attribution' style={{ color: 'white', textAlign: 'center', marginTop: '1.5rem' }}>
          Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>Frontend Mentor</a>. 
          Coded by <a href='https://chriscox12.github.io/' target='_blank' rel='noreferrer'>Christopher Cox</a>.
      </footer>
    </div>
  );
}

export default App;
