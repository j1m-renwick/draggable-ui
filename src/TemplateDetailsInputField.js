import FormControl from "react-bootstrap/FormControl";
import React from "react";
import {store} from "./redux/store";
import {TemplateDetailsUpdated} from "./redux/actions";
import {InputGroup} from "react-bootstrap";
import {useSelector} from "react-redux";


export function TemplateDetailsInputField(props) {

    const fieldValue = useSelector(state => state.projectDetails[props.fieldId]);

    function updateTextField(e) {
        store.dispatch(TemplateDetailsUpdated(props.fieldId, e.target.value));
    }

    return (
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id={props.fieldId}>{props.label}</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder={props.placeholder} onChange={updateTextField} defaultValue={fieldValue}/>
        </InputGroup>
    )
}