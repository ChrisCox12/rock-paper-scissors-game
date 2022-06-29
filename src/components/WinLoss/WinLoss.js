import React, { useEffect, useState } from 'react';
import './WinLoss.css';
import paper from '../../assets/icon-paper.svg';
import rock from '../../assets/icon-rock.svg';
import scissors from '../../assets/icon-scissors.svg';


export default function WinLoss({ userPick, setPicked, computerPick, result }) {
    const [win, setWin] = useState(false);
    const [draw, setDraw] = useState(false);
    const [loss, setLoss] = useState(false);
    

    useEffect(() => {
        let userP = null;
        let computerP = null;
        const userPicksBackg = document.querySelector('.user_picks-backg');
        const computerPicksBackg = document.querySelector('.computer_picks-backg');

        switch(userPick) {
            case 'paper':
                userP = document.querySelector('.results-screen__picks__user__paper');
                break;
            case 'scissors':
                userP = document.querySelector('.results-screen__picks__user__scissors');
                break;
            case 'rock':
                userP = document.querySelector('.results-screen__picks__user__rock');
                break;
            default:
                break;
        }

        switch(computerPick) {
            case 'paper':
                computerP = document.querySelector('.results-screen__picks__computer__paper');
                break;
            case 'scissors':
                computerP = document.querySelector('.results-screen__picks__computer__scissors');
                break;
            case 'rock':
                computerP = document.querySelector('.results-screen__picks__computer__rock');
                break;
            default:
                break;
        }

        switch(result) {
            case 'win':
                setWin(true);
                userP.classList.add('winner');
                userPicksBackg.classList.remove('noshow');
                break;
            case 'loss':
                setLoss(true);
                computerP.classList.add('winner');
                computerPicksBackg.classList.remove('noshow');
                break;
            case 'draw':
                setDraw(true);
                break;
            default:
                break;
        }
    }, [result, userPick, computerPick]);
    

    return (
        <div className='results-screen'>
            <div className='results-screen__picks flex align-center'>
                <div className='results-screen__picks__user flex flex-column align-center justify-center'>
                    {userPick === 'paper' &&
                        <div className='results-screen__picks__user__paper flex justify-center align-center'>
                            <div className='flex justify-center align-center'>
                                <img  className='rps-icon' src={paper} alt='paper' />
                            </div>
                        </div>
                    }
                    {userPick === 'scissors' &&
                        <div className='results-screen__picks__user__scissors flex justify-center align-center'>
                            <div className='flex justify-center align-center'>
                                <img  className='rps-icon' src={scissors} alt='scissors' />
                            </div>
                        </div>
                    }
                    {userPick === 'rock' &&
                        <div className='results-screen__picks__user__rock flex justify-center align-center'>
                            <div className='flex justify-center align-center'>
                                <img  className='rps-icon' src={rock} alt='rock' />
                            </div>
                        </div>
                    }
                    <div className='user_picks-backg noshow'></div>
                    <p>YOU PICKED</p>
                </div>

                <div className='results-screen__picks__computer flex flex-column justify-center align-center'>
                    {computerPick === 'paper' &&
                        <div className='results-screen__picks__computer__paper flex justify-center align-center'>
                            <div className='flex justify-center align-center'>
                                <img  className='rps-icon' src={paper} alt='paper' />
                            </div>
                        </div>
                    }
                    {computerPick === 'scissors' &&
                        <div className='results-screen__picks__computer__scissors flex justify-center align-center'>
                            <div className='flex justify-center align-center'>
                                <img  className='rps-icon' src={scissors} alt='scissors' />
                            </div>
                        </div>
                    }
                    {computerPick === 'rock' &&
                        <div className='results-screen__picks__computer__rock flex justify-center align-center'>
                            <div className='flex justify-center align-center'>
                                <img  className='rps-icon' src={rock} alt='rock' />
                            </div>
                        </div>
                    }
                    <div className='computer_picks-backg noshow'></div>
                    <p>THE HOUSE PICKED</p>
                </div>
            </div>
            <div className="results-screen__rapa">
                {win && <p className='results-screen__win-loss-draw'>YOU WIN</p>}
                
                {loss && <p className='results-screen__win-loss-draw'>YOU LOSE</p>}
                
                {draw && <p className='results-screen__win-loss-draw'>TIE</p>}

                <button className='results-screen__play-again-button' onClick={() => setPicked(false)}>PLAY AGAIN</button>
            </div>
        </div>
    )
}
