import React from 'react'
import './sidebar.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from '../sidebarchannel/SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallIcon from '@mui/icons-material/Call';
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { signOut } from '@firebase/auth';
import { auth } from '../../firebase/firebase';

const Sidebar = () => {
    const user = useSelector(selectUser);
    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <h3>Ashish sah</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar_channels">
                <div className="sidebar_channelHeaders">
                    <div className="sidebar_header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className='sidebar_addChannel' />
                </div>
                <div className="sidebar_channelsList">
                    <SidebarChannel />
                </div>
            </div>
            <div className="sidebar_voice">
                <SignalCellularAltIcon className='sidebar_voiceIcon' fontSize='large' />
                <div className="sidebar_voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar_voiceIcon">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>
            <div className="sidebar_profile">
                <Avatar src={user.photo} onClick={() => { signOut(auth) }} />
                <div className="sidebar_profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 9)}...</p>
                </div>
                <div className="sidebar_profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
