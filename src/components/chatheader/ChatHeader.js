import React from 'react'
import './chatheader.css'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

const ChatHeader = () => {
    return (
        <div className='chatheader'>
            <div className="chatheader_left">
                <h3>
                    <span className='chatheader_hash'>#</span>
                    Ashish
                </h3>
            </div>
            <div className="chatheader_right">
                <NotificationsActiveIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />
                <div className="chatheader_search">
                    <input placeholder='Search...' />
                    <SearchRoundedIcon />
                </div>
                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default ChatHeader
