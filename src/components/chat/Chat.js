import React from 'react'
import ChatHeader from '../chatheader/ChatHeader'
import './chat.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from '../message/Message';

const Chat = () => {
    return (
        <div className='chat'>
            <ChatHeader />
            <div className="chat_messages">
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
            <div className="chat_input">
                <AddCircleIcon fontSize='large' />
                <form>
                    <input placeholder='Type here to send message...' />
                    <button className='chat_inputButton' type='submit'></button>
                </form>
                <div className="chat_inputIcons">
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat
