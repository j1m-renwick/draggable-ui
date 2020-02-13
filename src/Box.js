import Draggable from "react-draggable";
import React from "react";
import {boxDragged, boxFocused} from "./redux/actions";
import {store} from "./redux/store"
import {iconDragXDistance, iconDragYDistance} from "./constants";

export function Box(props) {

    function select() {
        store.dispatch(boxFocused(props.boxId));
    }

    // update position of box in redux
    function onControlledDrag(e, position) {
        store.dispatch(boxDragged(props.boxId, position));
    }

    return (
        <Draggable grid={[iconDragXDistance, iconDragYDistance]} defaultPosition={{x: props.x ? props.x : 0, y: props.y ? props.y : 0}} bounds=".viewport" onDrag={onControlledDrag}>
            <div className="box" onClick={() => select()} />
        </Draggable>
    )

}

