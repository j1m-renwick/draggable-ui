import Draggable from "react-draggable";
import React from "react";
import {boxDragged, boxFocused} from "./redux/actions";
import {store} from "./redux/store"
import {iconDragXDistance, iconDragYDistance, iconSize, iconSpacingYMargin} from "./constants";

export function Box(props) {

    const styling = {
        "width": iconSize + "px",
        "height": iconSize + "px",
        "marginTop": iconSpacingYMargin + "px",
        "marginBottom": iconSpacingYMargin + "px"
    }

    function select() {
        store.dispatch(boxFocused(props.boxId));
    }

    // update position of box in redux
    function onControlledDrag(e, position) {
        store.dispatch(boxDragged(props.boxId, position));
    }

    return (
        <Draggable grid={[iconDragXDistance, iconDragYDistance]} defaultPosition={{x: props.x ? props.x : 0, y: props.y ? props.y : 0}} bounds=".viewport" onDrag={onControlledDrag}>
            <div className="box" style={styling} onClick={() => select()} />
        </Draggable>
    )

}

