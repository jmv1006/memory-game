import React, { useState, useEffect } from "react";
import './mainContent.css'
import Scoreboard from '../scoreboard/scoreboard';

const MainContent = () => {

    const [currentScore, setCurrentScore] = useState(0);

    const updateScore = (e) => {
        e.preventDefault();
        setCurrentScore(currentScore + 1);
    }
    return(
        <div id='mainContentContainer'>
            <Scoreboard>
                <div>{currentScore}</div>
                <button onClick={updateScore}>Click</button>
            </Scoreboard>
        </div>
    )
}

export default MainContent;