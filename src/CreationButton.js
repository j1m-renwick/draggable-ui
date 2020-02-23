import React from 'react';
import {Button} from "react-bootstrap";
import {store} from "./redux/store"
import {boxCreated} from "./redux/actions";
import {newBoxData} from "./config/BoxTypes";
import {iconDiameter} from "./config/constants";
import {useSelector} from "react-redux";

export function CreationButton(props) {

    const additionalStyling = {
        "width": iconDiameter + "px",
        "height": iconDiameter + "px"
    };

    const focusBoxType = useSelector(state => state.focusBoxType);
    const focusContext = useSelector(state => state.focusContext);
    const currentLevel = useSelector(state => state.currentLevel);

    function dispatchCreate() {
        if (focusContext === "BOX_TYPE_BAR") {
            store.dispatch(boxCreated(newBoxData(focusBoxType,  currentLevel)));
        }
    }

    return (
        <Button variant="info" style={{"margin": "10px 0px 0px 10px"}} onClick={dispatchCreate}><img alt="CREATE!" style={additionalStyling} src={require("./images/white-plus.png")}/></Button>
    )
}