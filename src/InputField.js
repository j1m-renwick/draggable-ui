import FormControl from "react-bootstrap/FormControl";
import React from "react";
import {store} from "./redux/store";
import {boxConfigUpdated} from "./redux/actions";


export function InputField(props) {

    function fieldChangeCallback(e) {
        store.dispatch(boxConfigUpdated(props.boxId, props.for, e.target.value));
    }

    return (
        <FormControl onChange={fieldChangeCallback} defaultValue={props.defaultValue}/>
    )
}