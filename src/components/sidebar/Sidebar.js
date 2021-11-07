import React, { useState, useEffect } from 'react'
import './sidebar.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
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
import db from '../../firebase/firebase';
import { addDoc, collection, onSnapshot } from '@firebase/firestore';
import { selectIsSideMenuOpen, setSideMenuState } from '../../features/appSlice';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
    const user = useSelector(selectUser);
    const sideMenuOpen = useSelector(selectIsSideMenuOpen)
    const dispatch = useDispatch()

    const toggleSideMenu = () => {
        dispatch(setSideMenuState({
            sideMenuOpen: !sideMenuOpen,
        }))
    }

    const [channels, setChannels] = useState([]);

    useEffect(() => {
        const q = collection(db, 'channels');
        onSnapshot(q, (snapshot) => {
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data().channelName,
            })))
        })
    }, []);

    const handleAddChannel = () => {
        const channelName = prompt('Enter a new channel name...');
        if (channelName) {
            const q = collection(db, 'channels');
            addDoc(q, {
                channelName: channelName
            })
        }
    }

    return (
        <div className={`sidebar ${!sideMenuOpen ? 'sidebar_openSideMenu' : 'sidebar_closeSideMenu'}`}>
            <div className="sidebar_top">
                <h3>Ashish sah</h3>
                <KeyboardArrowLeftIcon onClick={toggleSideMenu} />
            </div>
            <div className="sidebar_channels">
                <div className="sidebar_channelHeaders">
                    <div className="sidebar_header">
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon onClick={handleAddChannel} className='sidebar_addChannel' />
                </div>
                <div className="sidebar_channelsList">
                    {channels.map(channel => (
                        <SidebarChannel key={channel.id} channelName={channel.channel} id={channel.id} />
                    ))}
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
