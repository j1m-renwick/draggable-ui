import React from 'react';
import {Button} from "react-bootstrap";
import {store} from "./redux/store"
import {boxCreated} from "./redux/actions";
import uuid from 'uuid/v4'
import {binaryTypeConfig} from "./config/BoxTypes";

export function CreationButton(props) {

    function dispatchCreate() {
        store.dispatch(boxCreated(uuid.v4(), 4, 0, 0, binaryTypeConfig()));
    }

    return (
        <Button style={{"margin": "10px 0px 0px 10px"}} onClick={dispatchCreate}>{props.children}</Button>
    )
}