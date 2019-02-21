import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ScoreBoard from './ScoreBoard';
import './leaderboard.scss';

const socket = io('http://localhost:4000');

const LeaderBoard = (props) => {
    const [leaderBoard, setLeaderBoard] = useState(null);
    
    useEffect(() => {
        socket.on('update', newBoard => setLeaderBoard(newBoard));
        if(!leaderBoard) {
            socket.emit('requestScores')
        }
    })
    
    const leaders = leaderBoard ? <ScoreBoard scores={leaderBoard}/>: null

    return (
        <div className='leaderboard'>
            {leaders}
        </div>
    );
};

export default LeaderBoard;