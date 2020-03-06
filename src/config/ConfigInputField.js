import FormControl from "react-bootstrap/FormControl";
import React from "react";
import {store} from "../redux/store";
import {boxConfigUpdated} from "../redux/actions";


export function ConfigInputField(props) {

    function updateTextField(e) {
        store.dispatch(boxConfigUpdated(props.boxId, props.for, e.target.value));
    }

    return (
        <FormControl onChange={updateTextField} value={props.defaultValue}/>
    )
}