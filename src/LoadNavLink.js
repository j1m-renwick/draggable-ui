import {Nav} from "react-bootstrap";
import React from "react";
import {store} from "./redux/store";
import {loadingInitiated} from "./redux/actions";
import {defaultIconSpacingXMargin, iconDragYDistance} from "./config/constants";

export function LoadNavLink() {

    const loadRef = React.useRef(null);

    function readFile(fileToRead) {

        let fileType = fileToRead.type;
        if (fileType === "application/json") {

            let reader = new FileReader();

            reader.onload = (file => e => {
                store.dispatch(loadingInitiated(transform(JSON.parse(e.target.result))));
            })(fileToRead);

            reader.readAsText(fileToRead);
        } else {
            // TODO replace with modal alert
            alert("Cannot read files of type: " + fileType + " - only JSON files can be loaded.")
        }
    }

    function transform(file) {
        let boxes = {};
        let children = {};
        let config = {};
        let map = {};

        // determine the order of reading in the boxes based on the levels and children of each box
        function mapChildren(box) {
            if (!map[box.level]) {
                map[box.level] = new Set()
            }
            map[box.level].add(box.id);
            if (box.children.length > 0) {
                box.children.forEach(item => mapChildren(file.find(samp => samp.id === item)))
            }
        }

        function populateState(box, x, y) {
            boxes[box.id] = {id: box.id, type: box.type, x:x, y:y};
            children[box.id] = box.children;
            config[box.id] = box.config;
        }

        /*
            order boxes by level ascending and then:
            1) select a lowest level box and push to map array
            2) get all children and push them to map array
            3) repeat until no more children
        */
        file.sort((i1, i2) => i1.level < i2.level ? -1: 0).forEach(item => mapChildren(item));

        // iterate through the new box order on each level and initialize them with the correct x / y coordinates
        for (const [key, value] of Object.entries(map)) {
            [...value].forEach((item, index) => {
                populateState(file.find(samp => samp.id === item), index * defaultIconSpacingXMargin, key * iconDragYDistance)
            })
        }

        let stateToReturn = {};
        stateToReturn.boxes = boxes;
        stateToReturn.children = children;
        stateToReturn.config = config;
        return stateToReturn;
    }


    return (
        <>
            <Nav.Link onSelect={() => loadRef.current.click()} href="#load">Load</Nav.Link>
            <input ref={loadRef} type="file" onChange={(e) => readFile(e.target.files[0])} hidden/>
        </>
    )


}