import { useState, useEffect } from 'react'
import './game.css'
const Game = (props) => {

    const [cards, setCards] = useState([]);

    const [count, setCount] = useState(0)
    
    const createCards = () => {
        for(let i = 0; i < 16; i++) {
            const card = {number: i, isClicked: false}
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

    shuffleCards(cards);
    const displayCards = cards.map((card) => 
        //displays cards with random number
        <div key={card.number} identifier={card.number}>Card {card.number}</div>
    );

    const testEff = (e) => {
        e.preventDefault();
        setCount(count + 1)
    }


    return(
        <div id='gameContainer'>
            <div id='cardsContainer'>
                {displayCards}
            </div>
            <button onClick={testEff}>Click</button>
        </div>
    )
}

export default Game;