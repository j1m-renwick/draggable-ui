import React from "react";
import {BoxTypeClasses, iconDiameter} from "./config/constants";
import {store} from "./redux/store";
import {boxTypeFocused} from "./redux/actions";

export function BoxTypeBar(props) {

    const additionalStyling = {
        "width": iconDiameter + "px",
        "height": iconDiameter + "px",
        "marginBottom": "10px"
    };

    function dispatchCreate(key) {
        store.dispatch(boxTypeFocused(key, key));
    }

    return (
        <div className="bar">
            {
                Object.entries(BoxTypeClasses).map(entry => <div key={entry[0]} style={additionalStyling} className={entry[0]} tabIndex={0} onClick={() => dispatchCreate(entry[0])}/>)
            }
        </div>
    )
}