import { useState, useEffect } from 'react'
import './game.css'
const Game = (props) => {

    const [cards, setCards] = useState([]);

    
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

    const testEffect = (e) => {
        e.preventDefault()
        console.log('worked')
        console.log(cards)
    }

    const displayCards = cards.map((card) => 
        <div key={card.number}>Card</div>
    );


    return(
        <div id='gameContainer'>
            <div id='cardsContainer'>
                {displayCards}
                <button onClick={testEffect}>test</button>
            </div>
        </div>
    )
}

export default Game;