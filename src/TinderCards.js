import React from 'react'
import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Takiya Genji',
            url: 'https://wallpapercave.com/wp/wp2027159.jpg'
        },
        {
            name: 'Tammao Serizawa',
            url: 'https://i.pinimg.com/originals/7e/4c/79/7e4c79d46c03ab33bab15a26f6adb42e.jpg'
        }
    ]);
    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map((person, index) => (
                    <TinderCard
                        className='swipe'
                        key={index}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
