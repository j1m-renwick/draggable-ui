import React from 'react';
import './App.css';
import {ViewPort} from "./ViewPort";
import {ConfigDataSection} from "./ConfigDataSection";
import {ScrollButton} from "./ScrollButton";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {CreationButton} from "./CreationButton";
import {LoadButton} from "./LoadButton";
import {BoxTypeBar} from "./BoxTypeBar";
import backgroundImage from "./images/background-pattern.jpg";

function App() {
    return (
        <div style={{backgroundImage: "url(" + backgroundImage + ")", height: "100vh"}}>
            <Provider store={store}>
                <CreationButton>CREATE!</CreationButton>
                <LoadButton>Load box data to store</LoadButton>
                <ScrollButton direction="UP">Up</ScrollButton>
                <ScrollButton direction="DOWN">Down</ScrollButton>
                <div className="app">
                    <BoxTypeBar/>
                    <ViewPort/>
                    <ConfigDataSection/>
                </div>
            </Provider>
        </div>
    );
}

export default App;
