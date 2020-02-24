import React from 'react';
import {Button} from "react-bootstrap";
import {store} from "./redux/store"
import {scrollButtonClicked} from "./redux/actions";

export function ScrollButton(props) {

    const direction = props.direction || Direction.DOWN;

    function dispatchScrollEvent() {
        store.dispatch(scrollButtonClicked(direction));
    }

    return (
        <Button style={{"margin": "10px 0px 0px 10px"}} variant="dark" onClick={dispatchScrollEvent}>{props.children}</Button>
    )
}

export const Direction = {
    UP: "UP",
    DOWN: "DOWN"
};