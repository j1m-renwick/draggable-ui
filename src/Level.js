import React from "react";
import {Box} from "./Box";
import {iconDragYDistance} from "./config/constants";
import {useSelector} from "react-redux";
import {boxLocationSet} from "./redux/actions";
import {store} from "./redux/store";

export function Level(props) {

    const boxes = useSelector(state => state.boxes);

    return (
        <>
            {
                boxes.filter(item => item.level === props.level).map((item, index) => {
                    store.dispatch(boxLocationSet(item.id, index * 100, props.level * iconDragYDistance));
                    return <Box key={item.id} type={item.type} boxId={item.id} x={index * 100} y={props.level * iconDragYDistance}/>
                    }
                )
            }
        </>
    )
}