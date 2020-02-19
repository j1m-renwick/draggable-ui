import React from "react";
import {useSelector} from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import {InputField} from "./InputField";
import {boxConfigUpdated} from "./redux/actions";
import {store} from "./redux/store";


export function ViewPortConfigData(props) {

    const boxes = useSelector(state => state.boxes);

    function getConfig(id) {
        return id !== undefined? boxes.find(item => item.id === id).config : [];
    }

    function fieldChangeCallback(text, e) {
        store.dispatch(boxConfigUpdated(props.focusedId, text, e.target.value));
    }

    return (
        <div>
            {
                Object.entries(getConfig(props.focusedId)).map(item => {
                    return (
                        <div key={item[0]}>
                            <label className="capitalise" htmlFor={item[0]}>{item[0]}</label>
                            {
                                Array.isArray(item[1]) ?
                                    item[1].map((it, index) => (
                                        <InputGroup key={item[0] + index} className="mb-3">
                                            <InputField id={index} for={item[0] + ":" + index} defaultValue={it}
                                                        callback={fieldChangeCallback}/>
                                        </InputGroup>
                                    )) :
                                    <InputGroup key={item[0]} className="mb-3">
                                        <InputField id={item[0]} for={item[0]} defaultValue={item[1]}
                                                    callback={fieldChangeCallback}/>
                                    </InputGroup>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}