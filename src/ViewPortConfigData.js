import React from "react";
import {useSelector} from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import {InputField} from "./InputField";
import {boxConfigUpdated} from "./redux/actions";
import {store} from "./redux/store";
import {BoxTypeClasses} from "./config/constants";
import {Linker} from "./Linker";

export function ViewPortConfigData(props) {

    const boxes = useSelector(state => state.boxes);

    function getConfig(id) {
        return id !== undefined ? boxes.find(item => item.id === id).config : [];
    }

    function fieldChangeCallback(reference, e) {
        store.dispatch(boxConfigUpdated(props.focusedId, reference, e.target.value));
    }

    function renderConfigField(title, type, item) {
        switch(type) {
            case "TEXT":
                return (
                    <div key={title}>
                        <label className="capitalise" htmlFor={title}>{title}</label>
                        <InputGroup key={title} className="mb-3" style={{"alignItems": "center"}}>
                            {item.linkable === true ? <Linker boxId={props.focusedId} reference={title}/> : <></>}
                            <InputField id={title} for={title} defaultValue={item.value}
                                        callback={fieldChangeCallback}/>
                        </InputGroup>
                    </div>
                );
            case "TEXT_ARRAY":
                return (
                    <div key={title}>
                        <label className="capitalise" htmlFor={title}>{title}</label>
                        {
                            Object.entries(item).map((it, index) => (
                                <InputGroup key={it[0]} className="mb-3" style={{"alignItems": "center"}}>
                                    {it[1].linkable === true ? <Linker boxId={props.focusedId} reference={title + ":" + it[0]}/> : <></>}
                                    <InputField id={it[0]} for={title + ":" + it[0]} defaultValue={it[1].value}
                                                callback={fieldChangeCallback}/>
                                </InputGroup>
                            ))
                        }
                    </div>
                );
            default:
                console.error("Warning: Attribute '" + title + "' has an unrecognised render type of '" + type + "' and will not be rendered.");
                return <div key={title}/>
        }
    }

    return (
        <>
            {
                Object.entries(BoxTypeClasses[props.focusBoxType]).map(type =>
                renderConfigField(type[0], type[1]["input"], getConfig(props.focusedId)[type[0]])
                )
            }
        </>
    )
}