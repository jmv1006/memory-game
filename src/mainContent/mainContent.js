import React, { useState, useEffect } from "react";
import './mainContent.css'
import Scoreboard from '../scoreboard/scoreboard';
import Game from "../game/game";

const MainContent = () => {

    const [currentScore, setCurrentScore] = useState(0);
    const [topScore, setTopScore] = useState(0);

    const checkIfIsTopScore = () => {
        if(currentScore >= topScore) {
            setTopScore(currentScore)
        }
    }

    useEffect(() => {
        checkIfIsTopScore();
    }, [currentScore])

    const updateScore = () => {
        setCurrentScore(currentScore + 1);
    };

    const resetScore = () => {
        setCurrentScore(0);
    }

    return(
        <div id='mainContentContainer'>
            <Scoreboard>
                <div>Score: {currentScore}</div>
                <div>Top Score: {topScore}</div>
            </Scoreboard>
            <Game resetScore={resetScore} addToScore={updateScore}/>
        </div>
    )
}

export default MainContent;