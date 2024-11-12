import React from 'react';
import Content from "./Content";
import SideBar from "./SideBar";

const Body = () => {
    return (
        <div className={'body'}>
            <SideBar/>
            <Content/>
        </div>
    );
};

export default Body;