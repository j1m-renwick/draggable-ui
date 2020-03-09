import Draggable from "react-draggable";
import React, {useState} from "react";
import {boxDragged, boxInViewPortFocused} from "../redux/actions";
import {store} from "../redux/store"
import {iconDiameter, iconDragXDistance, iconDragYDistance, iconSpacingYMargin} from "../constants/layoutConstants";
import {useSelector} from "react-redux";

export function Box(props) {

    const [x, setX] = useState(props.x);
    const [y, setY] = useState(props.y);

    const boxes = useSelector(state => state.boxes);
    const focusedBoxId =useSelector(state => state.focusedBoxId);

    const additionalStyling = {
        "width": iconDiameter + "px",
        "height": iconDiameter + "px",
        "marginTop": iconSpacingYMargin + "px",
        "marginBottom": iconSpacingYMargin + "px",
        "position": "absolute"
    };

    function select() {
        store.dispatch(boxInViewPortFocused(props.boxId, props.type));
    }

    // update position of box in redux
    function onControlledDrag(e, position) {
        store.dispatch(boxDragged(props.boxId, position.x, position.y));
    }

    // check that the stopped position doesn't overlap with any other boxes - if it does, reset it back to the original position before the drag started.
    function onStopDrag(e, position) {
        let overlappingItem = Object.values(boxes).filter(item => item.id !== props.boxId).find(item => item.x === position.lastX && item.y === position.lastY);
        if(overlappingItem !== undefined) {
            setX(null);
            setX(x);
            store.dispatch(boxDragged(props.boxId, x, y));
        } else {
            setX(position.lastX);
            setY(position.lastY);
        }
    }


    return (
        <Draggable grid={[iconDragXDistance, iconDragYDistance]}
                   defaultPosition={{x: props.x, y: props.y}} position={{x: x, y: y}}
                   bounds=".grid" onDrag={onControlledDrag} onStop={onStopDrag}>
            <div className={props.type + (focusedBoxId === props.boxId ? " focused" : "")} style={additionalStyling} onClick={() => select()}/>
        </Draggable>
    )

}

