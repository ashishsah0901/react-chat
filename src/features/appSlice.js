import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    channelId: null,
    channelName: null,
    sideMenuOpen: true
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setChannelInfo: (state, action) => {
            state.channelId = action.payload.channelId;
            state.channelName = action.payload.channelName;
        },
        setSideMenuState: (state, action) => {
            state.sideMenuOpen = action.payload.sideMenuOpen;
        }
    },
});

export const { setChannelInfo, setSideMenuState } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;
export const selectIsSideMenuOpen = (state) => state.app.sideMenuOpen;

export default appSlice.reducer;
