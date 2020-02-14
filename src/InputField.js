import uuid from "uuid/v4";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";


export function InputField(props) {


    return (
        <FormControl onChange={(e) => props.cb(props.for, e)} key={props.id} defaultValue={props.defaultValue}/>
    )
}