import React from "react";
import {useSelector} from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import {iconDragYDistance, levelsInViewPortCount} from "./config/constants";
import {InputField} from "./InputField";
import {boxConfigUpdated} from "./redux/actions";
import {store} from "./redux/store";


export function Config(props) {

    const additionalStyling = {
        "height": (iconDragYDistance * levelsInViewPortCount) + "px"
    };

    const context = useSelector(state => state.focusContext);
    const focusedId = useSelector(state => state.focusedBoxId);
    const focusBoxType = useSelector(state => state.focusBoxType);
    const boxes = useSelector(state => state.boxes);

    function getConfig(id) {
        return boxes.find(item => item.id === id).config;
    }

    function fieldChangeCallback(text, e) {
        store.dispatch(boxConfigUpdated(focusedId, text, e.target.value));
    }

    if(context === "VIEW_PORT" && focusedId) {

        let config = getConfig(focusedId);

        return (
            <div key={focusedId} className="config" style={additionalStyling}>
                {
                    Object.entries(config).map(item => {
                        return (
                            <div key={item[0]}>
                                <label className="capitalise" htmlFor={item[0]}>{item[0]}</label>
                                {
                                    Array.isArray(item[1]) ?
                                    item[1].map((it, index) => (
                                        <InputGroup key={item[0] + index} className="mb-3">
                                            <InputField id={index} for={item[0] + ":" + index} defaultValue={it} callback={fieldChangeCallback}/>
                                        </InputGroup>
                                    )) :
                                    <InputGroup key={item[0]} className="mb-3">
                                        <InputField id={item[0]} for={item[0]} defaultValue={item[1]} callback={fieldChangeCallback}/>
                                    </InputGroup>
                                }
                            </div>
                        )})
                }
            </div>
        )
    } else if (context === "BOX_TYPE_BAR") {
        return (
            <div className="config">{focusBoxType}</div>
        )
    }
    else {
        return (
            <div className="config">NOTHING</div>
        )
    }
}