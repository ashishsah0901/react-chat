import React from 'react'
import './chatheader.css'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSideMenuOpen, setSideMenuState } from '../../features/appSlice';

const ChatHeader = (props) => {
    const dispatch = useDispatch()
    const sideMenuOpen = useSelector(selectIsSideMenuOpen)

    const toggleSideMenu = () => {
        dispatch(setSideMenuState({
            sideMenuOpen: !sideMenuOpen,
        }))
    }

    return (
        <div className='chatheader'>
            <div className="chatheader_left">
                <MenuIcon onClick={toggleSideMenu} />
                <h3>
                    <span className='chatheader_hash'>#</span>
                    {props.channelName ? props.channelName : 'Channel Name'}
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
