import FormControl from "react-bootstrap/FormControl";
import React from "react";


export function InputField(props) {


    return (
        <FormControl onChange={(e) => props.callback(props.for, e)} key={props.id} defaultValue={props.defaultValue}/>
    )
}