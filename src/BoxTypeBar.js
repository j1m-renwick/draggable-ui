import React from "react";
import {BoxTypeClasses, iconDiameter} from "./config/constants";
import {store} from "./redux/store";
import {boxTypeFocused} from "./redux/actions";
import {useSelector} from "react-redux";

export function BoxTypeBar(props) {

    const additionalStyling = {
        "width": iconDiameter + "px",
        "height": iconDiameter + "px",
        "marginBottom": "10px"
    };

    const focusedBoxId = useSelector(state => state.focusedBoxId);

    function dispatchCreate(key) {
        store.dispatch(boxTypeFocused(key, key));
    }

    return (
        <div className="bar">
            {
                Object.entries(BoxTypeClasses).map(entry => <div key={entry[0]} style={additionalStyling} className={entry[0] + (focusedBoxId === entry[0]? " focused": "")} onClick={() => dispatchCreate(entry[0])}/>)
            }
        </div>
    )
}