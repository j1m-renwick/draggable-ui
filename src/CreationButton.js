import React from 'react';
import {Button} from "react-bootstrap";
import {store} from "./redux/store"
import {boxCreated} from "./redux/actions";
import uuid from 'uuid/v4'
import {binaryTypeConfig} from "./config/BoxTypes";
import {iconDiameter} from "./config/constants";

export function CreationButton(props) {

    const additionalStyling = {
        "width": iconDiameter + "px",
        "height": iconDiameter + "px"
    };

    function dispatchCreate() {
        store.dispatch(boxCreated(uuid.v4(), 4, 0, 0, binaryTypeConfig()));
    }

    return (
        <Button style={{"margin": "10px 0px 0px 10px"}} onClick={dispatchCreate}><img alt="CREATE!" style={additionalStyling} src={require("./images/white-plus.png")}/></Button>
    )
}