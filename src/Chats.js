import React from 'react'
import Chat from './Chat'
import './Chats.css'

const Chats = () => {
    return (
        <div className='chats'>
            <Chat
                name='Barry'
                message='I am the fastest man alive 🔥'
                timestamp='40 seconds ago'
                profilePic='https://github.githubassets.com/images/modules/logos_page/Octocat.png'
            />
            <Chat
                name='Serizawa'
                message='Lets Play Chicken'
                timestamp='3 minutes ago'
                profilePic='https://pbs.twimg.com/profile_images/531069505854652416/p70lK9Qf_400x400.jpeg'
            />
        </div>
    )
}

export default Chats
