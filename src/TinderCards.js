import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css'
import database from './firebase'

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {

        const unsubscribe = database.collection('people').onSnapshot(snapshot =>
            setPeople(snapshot.docs.map(doc => doc.data()))
        );

        return ()=>{
            unsubscribe();
        }
    }, [])

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
