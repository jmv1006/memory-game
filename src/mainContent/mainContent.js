import React, { useState, useEffect } from "react";
import './mainContent.css'
import Scoreboard from '../scoreboard/scoreboard';
import Game from "../game/game";

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
            </Scoreboard>
            <Game buttonClick={updateScore}/>
        </div>
    )
}

export default MainContent;