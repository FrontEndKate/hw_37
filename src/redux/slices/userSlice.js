import {createSlice} from "@reduxjs/toolkit";
import {imgUserUrl} from "../../utils/constamt";

const initialState = {
    avatar: imgUserUrl,
    name: 'Kate'
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload || state.name
        },
        changeAvatar: (state, action) => {
            state.avatar = action.payload || state.avatar
        }
    }
})

export const {changeName, changeAvatar} = userSlice.actions;
export const userReducer = userSlice.reducer