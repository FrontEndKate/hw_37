import React, {useState} from 'react';
import './App.css';
import Nav from "./components/Nav";
import Body from "./components/Body";

const AppFunc = () => {

    return (
        <div className="App">
               <Nav/>
               <Body/>
        </div>
    );
};

export default AppFunc;