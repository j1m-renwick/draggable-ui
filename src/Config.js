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

    const id = useSelector(state => state.focusedBoxId);
    const boxes = useSelector(state => state.boxes);

    function getConfig(id) {
        return boxes.find(item => item.id === id).config;
    }

    function fieldChangeCallback(text, e) {
        console.log(id + ": changing " + text + " to " + e.target.value);
        store.dispatch(boxConfigUpdated(id, text, e.target.value));
    }


    if(id) {

        let config = getConfig(id);

        return (
            <div key={id} className="config" style={additionalStyling}>
                {
                    Object.entries(config).map(item => {
                        return (
                            <div key={item[0]}>
                                <label className="capitalise" htmlFor={item[0]}>{item[0]}</label>
                                {
                                    Array.isArray(item[1]) ?
                                    item[1].map((it, index) => (
                                        <InputGroup key={item[0] + index} className="mb-3">
                                            <InputField id={index} for={item[0] + ":" + index} defaultValue={it} cb={fieldChangeCallback}/>
                                            {/*<FormControl key={index} defaultValue={it}/>*/}
                                        </InputGroup>
                                    )) :
                                    <InputGroup key={item[0]} className="mb-3">
                                        <InputField id={item[0]} for={item[0]} defaultValue={item[1]} cb={fieldChangeCallback}/>
                                        {/*<FormControl key={item[0]} defaultValue={item[1]}/>*/}
                                    </InputGroup>
                                }
                            </div>
                        )})
                }
            </div>
        )
    } else {
        return (
            <div className="config">NOTHING</div>
        )
    }
}