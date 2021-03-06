import React from 'react';
import {Button} from "react-bootstrap";
import {store} from "../redux/store"
import {boxDeleted} from "../redux/actions";
import {useSelector} from "react-redux";

export function DeleteButton() {

    const additionalStyling = {
        "width": "20px",
        "height": "20px"
    };

    const focusContext = useSelector(state => state.focusContext);

    function dispatchCreate() {
        if (focusContext === "VIEW_PORT") {
            store.dispatch(boxDeleted());
        }
    }

    return (

        <Button onClick={e => e.stopPropagation()} variant="info" style={{marginLeft: "10px"}} onMouseUp={dispatchCreate}>
            <img alt="CREATE!" style={additionalStyling} src={require("../images/white-delete.png")}/>
        </Button>
    )
}