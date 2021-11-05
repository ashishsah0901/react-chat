import React from 'react'
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../features/appSlice'
import './sidebarchannel.css'

const SidebarChannel = (props) => {
    const dispatch = useDispatch();
    const { id, channelName } = props;
    return (
        <div className='sidebarChannel'
            onClick={() =>
                dispatch(
                    setChannelInfo({
                        channelId: id,
                        channelName: channelName,
                    })
                )
            }>
            <h4>
                <span className='sidebarChannel_hash'>#</span>
                {channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
