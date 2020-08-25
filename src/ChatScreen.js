import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import './ChatScreen.css'

const ChatScreen = () => {

    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
            message: 'Whats up 🧑'
        },
        {
            name: 'Ellen',
            image: 'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
            message: 'How was it going?'
        },
        {
            message: 'Whats up 🧑'
        }
    ])


    const handleSend = e => {
        e.preventDefault()
        setMessages([...messages, { message: input }])
        setInput('')
    }

    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>YOU MATCHED WITH Barry ON 20/08/20</p>
            {messages.map((message) =>
                message.name ? (
                    <div className='chatScreen__message'>
                        <Avatar className='chatScreen__image' alt={message.name} src={message.image} />
                        <p className='chatScreen__text'>{message.message}</p>
                    </div>
                ) : (
                        <div className='chatScreen__message'>
                            <p className='chatScreen__textUser'>{message.message}</p>
                        </div>
                    )

            )}
            <form className='chatScreen__input'>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className='chatScreen__inputField'
                    type="text"
                    placeholder='Type a Message...' />
                <button onClick={handleSend} type='submit' className='chatScreen__inputButton'>SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
