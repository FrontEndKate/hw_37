import React from 'react';
import UserAvatar from "./UserAvatar";
import {useDispatch, useSelector} from "react-redux";
import {changeFollowers, changeSubscribers} from "../redux/slices/statsSlice";

const UserStats = () => {
    const name = useSelector(state => state.user.name);
    const followers = useSelector(state => state.stats.followers);
    const subscribers = useSelector(state => state.stats.subscribers);
    const dispatch = useDispatch();
    return (
         <div className={'user-stats'} >
                <div className={'nickname'}>
                    <UserAvatar/>
                    {name}
                </div>
                <div className={'stats'}>
                    <div onClick={() => dispatch(changeFollowers(1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeFollowers(-1))
                    }}>Followers: {followers} </div>

                    <div onClick={() => dispatch(changeSubscribers(1))}
                         onContextMenu={(e) => {
                             e.preventDefault();
                             dispatch(changeSubscribers(-1))
                         }}>Subscribers: {subscribers}</div>
                </div>
            </div>

    );
};

export default UserStats;