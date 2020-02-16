import React from 'react';
import './App.css';
import {ViewPort} from "./ViewPort";
import {Config} from "./Config";
import {ScrollButton} from "./ScrollButton";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {CreationButton} from "./CreationButton";
import {LoadButton} from "./LoadButton";
import {BoxTypeBar} from "./BoxTypeBar";

function App() {
    return (
        <Provider store={store}>
            <ScrollButton direction="UP">Up</ScrollButton>
            <ScrollButton direction="DOWN">Down</ScrollButton>
            <CreationButton>CREATE!</CreationButton>
            <LoadButton>Load box data to store</LoadButton>
            <div className="app">
                <ViewPort/>
                <Config/>
            </div>
            <BoxTypeBar/>
        </Provider>
    );
}

export default App;
