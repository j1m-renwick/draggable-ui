import React from "react";
import {useSelector} from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import {InputField} from "./InputField";
import {boxConfigUpdated} from "./redux/actions";
import {store} from "./redux/store";
import {BoxTypeClasses} from "./config/constants";


export function ViewPortConfigData(props) {

    const boxes = useSelector(state => state.boxes);

    function getConfig(id) {
        return id !== undefined ? boxes.find(item => item.id === id).config : [];
    }

    function fieldChangeCallback(text, e) {
        store.dispatch(boxConfigUpdated(props.focusedId, text, e.target.value));
    }

    function renderConfigField(title, type, item) {
        switch(type) {
            case "TEXT":
                return (
                    <div key={title}>
                        <label className="capitalise" htmlFor={title}>{title}</label>
                        <InputGroup key={title} className="mb-3">
                            <InputField id={title} for={title} defaultValue={item}
                                        callback={fieldChangeCallback}/>
                        </InputGroup>
                    </div>
                );
            case "TEXT_ARRAY":
                return (
                    <div key={title}>
                        <label className="capitalise" htmlFor={title}>{title}</label>
                        {
                            item.map((it, index) => (
                                <InputGroup key={title + index} className="mb-3">
                                    <InputField id={index} for={title + ":" + index} defaultValue={it}
                                                callback={fieldChangeCallback}/>
                                </InputGroup>
                            ))
                        }
                    </div>
                );
            default:
                console.error("Warning: Attribute '" + title + "' has an unrecognised render type of '" + type + "' and will not be rendered.");
                return <></>
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