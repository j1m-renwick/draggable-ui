import React, {useEffect} from 'react';
import {store} from "./redux/store"
import {saveStateLoadingInitiated} from "./redux/actions";
import {sample} from "./sample";

export function LoadButton(props) {

    useEffect(() => {
        loadSampleData()});

    function loadSampleData() {
        store.dispatch(saveStateLoadingInitiated(sample));
    }

    return (
        <></>
        // <Button style={{"margin": "10px 0px 0px 10px"}} onClick={loadSampleData}>{props.children}</Button>
    )
}