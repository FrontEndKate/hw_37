import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppFunc from "./AppFunc";
import {Provider} from "react-redux";
import {store} from "./redux/slices/storeConfig";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}><AppFunc/></Provider>
);

