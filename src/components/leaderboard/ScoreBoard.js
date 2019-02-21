import React from 'react';
import { stripColor, redBright } from 'ansi-colors';

const boxColor = (n, length) => {

    return {
         
    }
}



const ScoreBoard = ({ scores }) => {
    
    function compare(a,b) {
        if (a.score < b.score) {
            return 1
        } else if (a.score > b.score) {
            return -1
        }
        return 0
    }
    
    // sort scores and have them rank from top to bottom
    scores = scores.sort(compare)
    console.log(scores[scores.length-1].score);
    console.log(scores[0].score / scores[scores.length-1].score);
    // Display them
    const display = scores.map((e,i) => (
        <div className='score' key={i} style={boxColor(i, scores.length)}>
            <h3 className='rank'>{i+1}.</h3>
            <h3>{e.name}</h3>
            <div className='points outer'><div className='inner' style={{width: `${(e.score/scores[0].score) * 100}%`}}>{ e.score }</div></div>
        </div>
    ))
    return (
        <>
            { display }
        </>
    );
};

export default ScoreBoard;