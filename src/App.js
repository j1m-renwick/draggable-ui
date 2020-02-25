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
import {NavBar} from "./NavBar";

function App() {
    return (
        <div style={{backgroundImage: "url(" + backgroundImage + ")", height: "100vh"}}>
            <Provider store={store}>
                <NavBar/>
                <div style={{margin: "10px 10px 0px 10px"}}>
                    <CreationButton/>
                    <LoadButton/>
                    <ScrollButton direction="UP">Up</ScrollButton>
                    <ScrollButton direction="DOWN">Down</ScrollButton>
                </div>
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
