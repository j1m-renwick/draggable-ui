import React from 'react';
import {Button} from "react-bootstrap";
import {store} from "./redux/store"
import {boxCreated} from "./redux/actions";
import uuid from 'uuid/v4'
import {binaryTypeConfig} from "./config/BoxTypes";
import {iconDiameter} from "./config/constants";
import {useSelector} from "react-redux";

export function CreationButton(props) {

    const additionalStyling = {
        "width": iconDiameter + "px",
        "height": iconDiameter + "px"
    };

    const focusBoxType = useSelector(state => state.focusBoxType);
    const focusContext = useSelector(state => state.focusContext);

    function dispatchCreate() {
        if (focusContext === "BOX_TYPE_BAR") {
            // TODO remove config and map directly from box type
            store.dispatch(boxCreated(uuid.v4(), 4, 0, 0, focusBoxType, binaryTypeConfig()));
        }
    }

    return (
        <Button variant="info" style={{"margin": "10px 0px 0px 10px"}} onClick={dispatchCreate}><img alt="CREATE!" style={additionalStyling} src={require("./images/white-plus.png")}/></Button>
    )
}