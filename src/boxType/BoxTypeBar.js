import React from "react";
import {iconDiameter} from "../constants/layoutConstants";
import {store} from "../redux/store";
import {boxTypeFocused} from "../redux/actions";
import {useSelector} from "react-redux";
import {BoxTypeClasses} from "../constants/BoxTypeClasses";

export function BoxTypeBar() {

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
        <div onClick={e => e.stopPropagation()} className="bar">
            {
                Object.entries(BoxTypeClasses).map(entry => <div key={entry[0]} style={additionalStyling} className={entry[0] + (focusedBoxId === entry[0]? " focused": "")} onClick={() => dispatchCreate(entry[0])}/>)
            }
        </div>
    )
}