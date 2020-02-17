import React from "react";
import {iconDiameter, BoxTypeClasses} from "./config/constants";
import {store} from "./redux/store";
import {boxCreated} from "./redux/actions";
import {binaryTypeConfig} from "./config/BoxTypes";
import uuid from 'uuid/v4';

export function BoxTypeBar(props) {

    const additionalStyling = {
        "width": iconDiameter + "px",
        "height": iconDiameter + "px",
        "marginBottom": "10px"
    };

    function dispatchCreate() {
        store.dispatch(boxCreated(uuid.v4(), 4, 0, 500, binaryTypeConfig()));
    }

    return (
        <div className="bar">
            {
                BoxTypeClasses.map(boxType => <div key={boxType} style={additionalStyling} className={boxType} onClick={dispatchCreate}/>)
            }
        </div>
    )
}