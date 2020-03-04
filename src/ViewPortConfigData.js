import React from "react";
import {useSelector} from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import {InputField} from "./InputField";
import {boxConfigUpdated} from "./redux/actions";
import {store} from "./redux/store";
import {BoxTypeClasses} from "./config/constants";
import {Linker} from "./Linker";

export function ViewPortConfigData(props) {

    const config = useSelector(state => state.config);

    function getConfig(id) {
        return id !== undefined ? config[id] : {};
    }

    function fieldChangeCallback(reference, e) {
        store.dispatch(boxConfigUpdated(props.focusedId, reference, e.target.value));
    }

    function renderConfigField(label, type, item) {

        switch(type) {
            case "TEXT":
            case "TEXT_ARRAY":
                return (
                    <div key={label}>
                        <label className="capitalise" htmlFor={label}>{label}</label>
                        {
                            Object.entries(item).map((it, index) =>
                                (
                                    <InputGroup key={it[0]} className="mb-3" style={{"alignItems": "center"}}>
                                        {it[1].linkable === true ?
                                            <Linker boxId={props.focusedId} reference={label + "." + it[0]}
                                                    linkedId={item[it[0]].linkedId}/> : <></>}
                                        <InputField id={it[0]} for={label + "." + it[0]} defaultValue={it[1].value}
                                                    callback={fieldChangeCallback}/>
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
                    return renderConfigField(label, type[1]["input"], getConfig(props.focusedId)[label])
                })
            }
        </>
    )
}