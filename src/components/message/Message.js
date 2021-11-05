import { Avatar } from '@mui/material'
import React from 'react'
import './message.css'

const Message = (props) => {
    const { timestamp, user, message } = props;
    return (
        <div className='message'>
            <div className="message_image">
                <Avatar src={user.photo} />
            </div>
            <div className="message_info">
                <h4>{user.displayName}
                    <span className='message_timestamp'>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
