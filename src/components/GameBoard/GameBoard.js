import React from 'react';
import triangle from '../../assets/bg-triangle.svg';
import paper from '../../assets/icon-paper.svg';
import scissors from '../../assets/icon-scissors.svg';
import rock from '../../assets/icon-rock.svg';
import './GameBoard.css';

function GameBoard({ setPicked, setUserPick, setComputerPick, score, setScore, setResult }) {

  function shoot(userPick) {
    //  Randomly picks a number between 1 and 3
    let computerPick = Math.floor( Math.random() * 3 ) + 1;

    switch (computerPick) {
      case 1:
        computerPick = 'paper';
        break;
      case 2:
        computerPick = 'scissors';
        break;
      case 3:
        computerPick = 'rock';
        break;
      default:
        console.log('The computer had an error picking');
        break;
    }
    
    determineWinner(userPick, computerPick);
  }

  function determineWinner(userPick, computerPick) {
    if(userPick === 'paper' && computerPick === 'rock') {
      updateScore('win');
    }
    else if(userPick === 'rock' && computerPick === 'scissors') {
      updateScore('win');
    }
    else if(userPick === 'scissors' && computerPick === 'paper') {
      updateScore('win');
    }
    else if(userPick === computerPick) {
      updateScore('draw');
    }
    else {
      updateScore('loss');
    }

    setUserPick(userPick);
    setComputerPick(computerPick);
    setPicked(true);
  }

  function updateScore(result) {
    console.log('result: ', result);
    let x = score;

    switch(result) {
      case 'win':
        x++;

        setResult('win');
        setScore(x);
        
        break;
      case 'loss':
        setResult('loss');
        
        if(x > 0) {
          x--;
          setScore(x);
        }
        
        break;
      default:
        setResult('draw');
        
        break;
    }
  }


  return (
    <section className='game-board'>
      <div className='game-board__background flex justify-center align-center'>
        <img className='game-board__background__image' src={triangle} alt='a triangle' />
      </div>

      <div className='game-board__paper flex justify-center align-center' onClick={() => shoot('paper')}>
        <div className='flex justify-center align-center'>
          <img src={paper} alt='paper' />
        </div>
      </div>
      
      <div className='game-board__scissors flex justify-center align-center' onClick={() => shoot('scissors')}>
        <div className='flex justify-center align-center'>
          <img src={scissors} alt='scissors' />
        </div>
      </div>
      
      <div className='game-board__rock flex justify-center align-center' onClick={() => shoot('rock')}>
        <div className='flex justify-center align-center'>
          <img src={rock} alt='rock' />
        </div>
      </div>
    </section>
  )
}

export default GameBoard;
