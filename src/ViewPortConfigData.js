import React from "react";
import {useSelector} from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import {ConfigInputField} from "./ConfigInputField";
import {BoxTypeClasses} from "./config/constants";
import {Linker} from "./Linker";

export function ViewPortConfigData(props) {

    const config = useSelector(state => state.config);

    function getConfig(id) {
        return id !== undefined ? config[id] : {};
    }

    function renderConfigField(identifier, label, type, item) {

        switch(type) {
            case "TEXT":
                return (
                    <div key={label}>
                        <label className="capitalise" htmlFor={label}>{label}</label>
                        <InputGroup key={label} className="mb-3" style={{"alignItems": "center"}}>
                            <ConfigInputField id={label} boxId={props.focusedId} for={identifier} defaultValue={item.value}/>
                        </InputGroup>
                    </div>
                );
            case "TEXT_ARRAY":
                return (
                    <div key={label}>
                        <label className="capitalise" htmlFor={label}>{label}</label>
                        {
                            Object.entries(item).map(it =>
                                (
                                    <InputGroup key={it[0]} className="mb-3" style={{"alignItems": "center"}}>
                                        <ConfigInputField id={it[0]} boxId={props.focusedId} for={identifier + "." + it[0]} defaultValue={it[1].value}/>
                                    </InputGroup>
                                )
                            )
                        }
                    </div>
                );
            case "ANSWER_TEXT":
            case "ANSWER_TEXT_ARRAY":
                return (
                    <div key={label}>
                        <label className="capitalise" htmlFor={label}>{label}</label>
                        {
                            Object.entries(item).map(it =>
                                (
                                    <InputGroup key={it[0]} className="mb-3" style={{"alignItems": "center"}}>
                                        <Linker boxId={props.focusedId} reference={identifier + "." + it[0]} linkedId={item[it[0]].linkedId}/>
                                        <ConfigInputField id={it[0]} boxId={props.focusedId} for={identifier + "." + it[0]} defaultValue={it[1].value}/>
                                    </InputGroup>
                                )
                            )
                        }
                    </div>
                );
            default:
                console.error("Warning: Attribute '" + label + "' has an unrecognised render type of '" + type + "' and will not be rendered.");
                return <div key={label}/>
        }
    }

    return (
        <>
            {
                Object.entries(BoxTypeClasses[props.focusBoxType]).map(type => {
                    let label = type[1]["alias"] === undefined ? type[0] : type[1]["alias"];
                    return renderConfigField(type[0], label, type[1]["input"], getConfig(props.focusedId)[type[0]])
                })
            }
        </>
    )
}