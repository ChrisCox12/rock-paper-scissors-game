import React, { useEffect, useState } from 'react';
import './WinLoss.css';
import paper from '../../assets/icon-paper.svg';
import rock from '../../assets/icon-rock.svg';
import scissors from '../../assets/icon-scissors.svg';

function WinLoss({ userPick, setPicked, computerPick, result }) {
    const [win, setWin] = useState(false);
    const [draw, setDraw] = useState(false);
    const [loss, setLoss] = useState(false);

    
    useEffect(() => {
        switch(result) {
            case 'win':
                setWin(true);
                break;
            case 'loss':
                setLoss(true);
                break;
            case 'draw':
                setDraw(true);
                break;
            default:
                break;
        }
    }, [result])
    

    return (
        <div className='results-screen'>
            <div className='results-screen__picks flex align-center justify-space-between'>
                <div className='results-screen__picks__user flex flex-column align-center justify-center'>
                    {userPick === 'paper' &&
                        <div className='results-screen__picks__user__paper flex justify-center align-center'>
                            <div className='flex justify-center align-center'>
                                <img src={paper} alt='paper' />
                            </div>
                        </div>
                    }
                    {userPick === 'scissors' &&
                        <div className='results-screen__picks__user__scissors flex justify-center align-center'>
                            <div className='flex justify-center align-center'>
                                <img src={scissors} alt='scissors' />
                            </div>
                        </div>
                    }
                    {userPick === 'rock' &&
                        <div className='results-screen__picks__user__rock flex justify-center align-center'>
                            <div className='flex justify-center align-center'>
                                <img src={rock} alt='rock' />
                            </div>
                        </div>
                    }
                    <p>YOU PICKED</p>
                </div>

                <div className='results-screen__picks__computer flex flex-column justify-center align-center'>
                    {computerPick === 'paper' &&
                        <div className='results-screen__picks__computer__paper flex justify-center align-center'>
                            <div className='flex justify-center align-center'>
                                <img src={paper} alt='paper' />
                            </div>
                        </div>
                    }
                    {computerPick === 'scissors' &&
                        <div className='results-screen__picks__computer__scissors flex justify-center align-center'>
                            <div className='flex justify-center align-center'>
                                <img src={scissors} alt='scissors' />
                            </div>
                        </div>
                    }
                    {computerPick === 'rock' &&
                        <div className='results-screen__picks__computer__rock flex justify-center align-center'>
                            <div className='flex justify-center align-center'>
                                <img src={rock} alt='rock' />
                            </div>
                        </div>
                    }
                    <p>THE HOUSE PICKED</p>
                </div>
            </div>
            {win && 
                <p className='results-screen__win-loss-draw'>YOU WIN</p>
            }
            
            {loss && 
                <p className='results-screen__win-loss-draw'>YOU LOSE</p>
            }

            {draw && 
                <p className='results-screen__win-loss-draw'>TIE</p>
            }

            <button className='results-screen__play-again-button' onClick={() => setPicked(false)}>PLAY AGAIN</button>
        </div>
    )
}

export default WinLoss;
