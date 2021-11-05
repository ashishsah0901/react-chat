import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    channelId: null,
    channelName: null
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setChannelId: (state, action) => {
            state.channelId = action.payload;
        },
        setChannelName: (state, action) => {
            state.channelName = action.payload;
        },
    },
});

export const { setChannelId, setChannelName } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
