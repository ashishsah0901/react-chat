import React, { useEffect, useState } from 'react'
import ChatHeader from '../chatheader/ChatHeader'
import './chat.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from '../message/Message';
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { query, collection, orderBy, onSnapshot, addDoc, serverTimestamp } from '@firebase/firestore'
import db from '../../firebase/firebase';
import SendIcon from '@mui/icons-material/Send';

const Chat = () => {
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        if (channelId) {
            const q = query(collection(db, 'channels', channelId, 'messages'), orderBy('timestamp', 'desc'));
            onSnapshot(q, (snapshot) => setMessages(snapshot.docs.map(doc => doc.data()))
            )
        }
    }, [channelId]);

    const sendMessage = (e) => {
        e.preventDefault()
        if (input.trim() !== "") {
            addDoc(collection(db, 'channels', channelId, 'messages'), {
                message: input,
                user: user,
                timestamp: serverTimestamp()
            })
        }
        setInput('');
    }

    return (
        <div className={`chat chat_flex`}>
            <ChatHeader channelName={channelName} />
            <div className="chat_messages">
                {messages.length > 0 ? messages.map((message) => (
                    <Message timestamp={message.timestamp} message={message.message} user={message.user} />
                )) : <div className='chat_noMessage'>No messgaes to show</div>}
            </div>
            <div className="chat_input">
                <AddCircleIcon fontSize='large' />
                <form>
                    <input disabled={!channelId} value={input} onChange={e => setInput(e.target.value)} placeholder={channelName ? `Send message in ${channelName}` : 'Select a channel'} />
                    <button disabled={!channelId} className='chat_inputButton' type='submit' onClick={sendMessage}></button>
                </form>
                <div className="chat_inputIcons">
                    <SendIcon onClick={sendMessage} className='chat_messageSend' />
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat
