import {createSlice} from "@reduxjs/toolkit";


const statsSlice = createSlice({
    name: "stats",
    initialState: {
        'followers': 0,
        'subscribers': 5
    },
    reducers :{
        changeFollowers: (state, action) => {
            const tempFollowers = state.followers + action.payload;
            state.followers = tempFollowers >= 0 ? tempFollowers : state.followers;
        },
        changeSubscribers: (state, action) => {
            const tempSubscribers = state.subscribers + action.payload
            state.subscribers = tempSubscribers >= 0 ? tempSubscribers : state.subscribers;
        }
    }
})

export const {changeFollowers, changeSubscribers} = statsSlice.actions;
export const statsReduser = statsSlice.reducer;