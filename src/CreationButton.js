import React from 'react';
import {Button} from "react-bootstrap";
import {store} from "./redux/store"
import {boxCreated} from "./redux/actions";
import uuid from 'uuid/v4'

export function CreationButton(props) {

    function dispatchCreate() {
        store.dispatch(boxCreated(uuid.v4(), 4, 500, 500, {}));
    }

    return (
        <Button style={{"margin": "10px 0px 0px 10px"}} onClick={dispatchCreate}>{props.children}</Button>
    )
}