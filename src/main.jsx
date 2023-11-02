import React from 'react';
import ReactDOM from 'react-dom/client'
// import {HelloWorldApp} from './HellloWorldApp';
import {FirstApp} from './FirstApp';
import {CounterApp} from './CounterApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value = {20} />
        {/* <FirstApp title = "Hola, soy Borja"></FirstApp> */}
    </React.StrictMode>
)