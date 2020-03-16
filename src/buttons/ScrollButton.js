import React from 'react';
import {Button} from "react-bootstrap";
import {store} from "../redux/store"
import {scrollButtonClicked} from "../redux/actions";

export function ScrollButton(props) {

    const direction = props.direction || Direction.DOWN;

    const additionalStyling = {
        "width": "20px",
        "height": "20px"
    };

    function dispatchScrollEvent() {
        store.dispatch(scrollButtonClicked(direction));
    }

    return (
        <Button onClick={e => e.stopPropagation()} style={{marginLeft: "10px"}} variant="dark" onMouseUp={dispatchScrollEvent}>
            <img alt="CREATE!" style={additionalStyling} src={require(props.direction === Direction.UP ? "../images/up-arrow.png" : "../images/down-arrow.png")}/>
        </Button>

)
}

export const Direction = {
    UP: "UP",
    DOWN: "DOWN"
};