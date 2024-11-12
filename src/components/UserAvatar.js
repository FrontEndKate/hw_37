import React, {useContext} from 'react';
import {twitterContext} from "../utils/twitterContext";
import {useDispatch, useSelector} from "react-redux";
import {changeAvatar, changeName} from "../redux/slices/userSlice";

const UserAvatar = (props) => {
const dispatch = useDispatch();
const user = useSelector(state => state.user)
    return (
        <img className={`user-avatar ${props.size}`} src={user.avatar}
                           onClick={() => dispatch(changeAvatar(prompt("Enter new avatar url")))}
                           onContextMenu={(e) => {
                               e.preventDefault();
                               dispatch(changeName(prompt("Enter new nickname")))
                           }}
                           alt={user.name}/>
        )
};

export default UserAvatar;