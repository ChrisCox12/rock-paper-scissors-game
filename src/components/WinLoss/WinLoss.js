import React, { useEffect, useState } from 'react';

function WinLoss({ userPick, setPicked, computerPick, result }) {
    const [win, setWin] = useState(false);
    const [draw, setDraw] = useState(false);
    const [loss, setLoss] = useState(false);

    useEffect(() => {
        if(result === 'win') {
            setWin(true);
        }
        else if(result === 'loss') {
            setLoss(true);
        }
        else {
            setDraw(true);
        }
    }, [result])
    

    return (
        <div>
            <p>Win / Loss</p>
            <p>You selected {userPick}</p>
            <p>The computer selected {computerPick}</p>
            {win && 
                <p>Winner</p>
            }
            
            {loss && 
                <p>Loser</p>
            }

            {draw && 
                <p>Tie</p>
            }  
            {/* <button onClick={incScore}>{currentScore}</button> */}          
            <button onClick={() => setPicked(false)}>Click me</button>
        </div>
    )
}

export default WinLoss;
