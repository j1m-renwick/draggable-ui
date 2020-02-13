import Draggable from "react-draggable";
import React, {useEffect} from "react";
import {boxDragged, boxFocused} from "./redux/actions";
import {store} from "./redux/store"
import {iconDragXDistance, iconDragYDistance, iconDiameter, iconSpacingYMargin} from "./constants";

export function Box(props) {

    useEffect(() => {store.dispatch(boxDragged(props.boxId, props.x, props.y))});

    const additionalStyling = {
        "width": iconDiameter + "px",
        "height": iconDiameter + "px",
        "marginTop": iconSpacingYMargin + "px",
        "marginBottom": iconSpacingYMargin + "px"
    };

    function select() {
        store.dispatch(boxFocused(props.boxId));
    }

    // update position of box in redux
    function onControlledDrag(e, position) {
        store.dispatch(boxDragged(props.boxId, position.x, position.y));
    }

    return (
        <Draggable grid={[iconDragXDistance, iconDragYDistance]} defaultPosition={{x: props.x ? props.x : 0, y: props.y ? props.y : 0}} bounds=".grid" onDrag={onControlledDrag}>
            <div className="box" style={additionalStyling} onClick={() => select()} />
        </Draggable>
    )

}

