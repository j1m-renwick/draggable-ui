import React, {useRef} from 'react';
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
import {boxUnfocused} from "../redux/actions";

function App() {

    // Generate and pass refs to child display components.  If event target contains one of the refs then do nothing - otherwise dispatch an action to unfocus current box

    const boxTypeRef = useRef(() => React.createRef());
    const viewPortRef = useRef(() => React.createRef());
    const configDataRef = useRef(() => React.createRef());

    function onClick(e) {
        // TODO make this more efficient and nicer to read/extend - only evaluate if e.target changes between clicks - maybe as a custom hook?
        if (!(boxTypeRef.current.contains(e.target) || viewPortRef.current.contains(e.target) || configDataRef.current.contains(e.target))) {
            store.dispatch(boxUnfocused());
        }
    }

    return (
        <div onClick={onClick} style={{backgroundImage: "url(" + backgroundImage + ")", minHeight: "100vh"}}>
            <Provider store={store}>
                <NavBar/>
                <div style={{margin: "10px 10px 0px 10px"}}>
                    <CreateButton/>
                    <ScrollButton direction="UP">Up</ScrollButton>
                    <ScrollButton direction="DOWN">Down</ScrollButton>
                    <DeleteButton/>
                </div>
                <div className="app">
                    <BoxTypeBar id={boxTypeRef}/>
                    <ViewPort id={viewPortRef}/>
                    <ConfigDataSection id={configDataRef}/>
                </div>
            </Provider>
        </div>
    );
}

export default App;
