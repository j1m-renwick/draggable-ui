import React from 'react';
import './App.css';
import {ViewPort} from "./ViewPort";
import {Config} from "./Config";
import {ScrollButton} from "./ScrollButton";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <ScrollButton direction="UP">Up</ScrollButton>
            <ScrollButton direction="DOWN">Down</ScrollButton>
            <div className="app">
                <ViewPort/>
                <Config/>
            </div>
        </Provider>
    );
}

export default App;
