import Draggable from "react-draggable";
import React from "react";
import {boxDragged, boxFocused} from "./redux/actions";
import {store} from "./redux/store"

export function Box(props) {

    var styling = {
        "width": "50px",
        "height": "50px",
        "backgroundSize": "contain",
        "backgroundImage": 'url(./icon.png)',
        "marginTop": "35px",
        "marginBottom": "35px",
        "position": "absolute"
    };

    function select() {
        store.dispatch(boxFocused(props.boxId));
    }

    // update position of box in redux
    function onControlledDrag(e, position) {
        console.dir(position);
        store.dispatch(boxDragged(props.boxId, position));
    }

    return (
        <Draggable grid={[50, 122]} defaultPosition={{x: props.x ? props.x : 0, y: props.y ? props.y : 0}} bounds=".viewport" onDrag={onControlledDrag}>
            <div style={styling} onClick={() => select()} />
        </Draggable>
    )

}

