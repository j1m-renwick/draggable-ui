import Draggable from "react-draggable";
import React, {useState} from "react";
import {toggle} from "./redux/actions";
import {store} from "./redux/store"

export function Box(props) {

    var styling = {
        "width": "50px",
        "height": "50px",
        "backgroundSize": "contain",
        "backgroundImage": 'url(./img.png)'
    };

    // const [isSelected, setSelected] = useState(false);

    function select() {
        // if (!isSelected) {
            store.dispatch(toggle(props.boxId));
        //     setSelected(true);
        // }
    }

    function deselect() {
        // if (isSelected) {
            store.dispatch(toggle(null));
        //     setSelected(false);
        // }
    }

    return (
        <Draggable grid={[50, 72]} defaultPosition={{x: props.x ? props.x : 0, y: props.y ? props.y : 0}} bounds=".viewport">
            <div ref={(div) => props.arrowRegisterFcn({ id: props.boxId, div })} className="test" onClick={() => select()} style={styling}/>
        </Draggable>
    )

}

