import React from 'react';
import './App.css';
import {ViewPort} from "../viewPort/ViewPort";
import {ConfigDataSection} from "../config/ConfigDataSection";
import {ScrollButton} from "../buttons/ScrollButton";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {CreateButton} from "../buttons/CreateButton";
import {BoxTypeBar} from "../boxType/BoxTypeBar";
import backgroundImage from "../images/background-pattern.jpg";
import {NavBar} from "../nav/NavBar";
import {DeleteButton} from "../buttons/DeleteButton";

function App() {
    return (
        <div style={{backgroundImage: "url(" + backgroundImage + ")", minHeight: "100vh"}}>
            <Provider store={store}>
                <NavBar/>
                <div style={{margin: "10px 10px 0px 10px"}}>
                    <CreateButton/>
                    <ScrollButton direction="UP">Up</ScrollButton>
                    <ScrollButton direction="DOWN">Down</ScrollButton>
                    <DeleteButton/>
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
