import { Avatar } from '@mui/material'
import React from 'react'
import './message.css'

const Message = () => {
    return (
        <div className='message'>
            <div className="message_image">
                <Avatar src='' />
            </div>
            <div className="message_info">
                <h4>Ashish
                    <span className='message_timestamp'>Time</span>
                </h4>
                <p>This is message</p>
            </div>
        </div>
    )
}

export default Message
