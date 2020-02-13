import React from 'react';
import './App.css';
import {ViewPort} from "./ViewPort";
import {Config} from "./Config";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <ViewPort boxRef="viewport"/>
                <Config/>
            </div>
        </Provider>
    );
}

export default App;
