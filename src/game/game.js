import { useState, useEffect } from 'react'
import './game.css'
import logosArr from './images';

const Game = (props) => {

    const [cards, setCards] = useState([]);

    const [chosenCards, setChosenCards] = useState([]);
    
    const createCards = () => {
        for(let i = 0; i < 12; i++) {
            const card = {number: i, logo: logosArr[i]}
            const addCard = (card) => setCards(state => [...state, card])
            addCard(card)
        }
    };
    
    useEffect(() => {
        createCards();
    }, [])

    useEffect(() => {
        shuffleCards(cards);
    })


    const shuffleCards = (arr) => {
        let currentIndex = arr.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
        }
    }

    const checkIfAlreadyClicked = (e) => {
        e.preventDefault()
        if(chosenCards.includes(e.target.getAttribute('identifier'))) {
            //wrong
            props.resetScore();
            setChosenCards([]);
        } else {
            setChosenCards(chosenCards.concat(e.target.getAttribute('identifier')))
            //correct
            props.addToScore();
        };

    }

    shuffleCards(cards);
    const displayCards = cards.map((card) => 
        //displays cards with random number
        <div className ='card' onClick={checkIfAlreadyClicked} key={card.number} identifier={card.number}>
            <img className='image' src={card.logo} identifier={card.number} onClick={checkIfAlreadyClicked} ></img>
        </div>
    );


    return(
        <div id='gameContainer'>
            <div id='cardsContainer'>
                {displayCards}
            </div>
        </div>
    )
}

export default Game;