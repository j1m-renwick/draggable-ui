import React, {useState} from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "../redux/store";
import backgroundImage from "../images/background-pattern.jpg";
import {NavBar} from "../nav/NavBar";
import {boxUnfocused} from "../redux/actions";
import {CreateButton} from "../buttons/CreateButton";
import {ScrollButton} from "../buttons/ScrollButton";
import {DeleteButton} from "../buttons/DeleteButton";
import {ViewPort} from "../viewPort/ViewPort";
import {BoxTypeBar} from "../boxType/BoxTypeBar";
import {ConfigDataSection} from "../config/ConfigDataSection";

function App() {

    const [target, setTarget] = useState(null);

    // only unfocus the element if the target has not changed (i.e. the mouse has not been dragged between sections), AND the
    // onClick event has managed to propagate up to this DOM element
    function onClick(e) {
        if (e.target === target) {
            store.dispatch(boxUnfocused());
        }
    }

    function onMouseDown(e) {
        setTarget(e.target);
    }

    return (
        <div onMouseDown={onMouseDown} onClick={onClick} style={{backgroundImage: "url(" + backgroundImage + ")", minHeight: "100vh"}}>
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
