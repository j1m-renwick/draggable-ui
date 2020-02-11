import React, {useRef} from 'react';
import './App.css';
import {Box} from "./Box";
import {ViewPort} from "./ViewPort";
import {Config} from "./Config";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {ArrowsBetweenDivsContextProvider} from "react-simple-arrows";
import {ArrowGenerator} from "./ArrowGenerator";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div style={{"display": "flex"}}>
                    <ArrowsBetweenDivsContextProvider>
                        {({ registerDivToArrowsContext }) => (
                            <>
                            <ArrowGenerator/>
                            <ViewPort arrowRegisterFcn={registerDivToArrowsContext} boxRef="viewport"/>
                            </>
                        )}
                    </ArrowsBetweenDivsContextProvider>
                    <Config/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
