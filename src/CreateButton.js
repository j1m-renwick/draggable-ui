import React from 'react';
import {Button} from "react-bootstrap";
import {store} from "./redux/store"
import {boxCreated} from "./redux/actions";
import {useSelector} from "react-redux";

export function CreateButton(props) {

    const additionalStyling = {
        "width": "20px",
        "height": "20px"
    };

    const focusContext = useSelector(state => state.focusContext);

    function dispatchCreate() {
        if (focusContext === "BOX_TYPE_BAR") {
            store.dispatch(boxCreated());
        }
    }

    return (
        <Button variant="info" onClick={dispatchCreate}><img alt="CREATE!" style={additionalStyling} src={require("./images/white-plus.png")}/></Button>
    )
}