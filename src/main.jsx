import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';
import './Index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp CounterApp  />
        

        </React.StrictMode>
)

