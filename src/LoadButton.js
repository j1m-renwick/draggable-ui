import React, {useEffect} from 'react';
import {store} from "./redux/store"
import {saveStateLoadingInitiated} from "./redux/actions";
import {sample} from "./sample";
import {iconDragYDistance} from "./config/constants";

export function LoadButton(props) {

    useEffect(() => loadSampleData());

    function loadSampleData() {
        store.dispatch(saveStateLoadingInitiated(transform()));
    }

    function transform() {
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
                box.children.forEach(item => mapChildren(sample.find(samp => samp.id === item)))
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
        // TODO check this sort works as intended
        let sortedSample = sample.sort((i1, i2) => i1.level < i2.level ? -1: 0);
        sortedSample.forEach(item => mapChildren(item));

        // iterate through the new box order on each level and initialize them with the correct x / y coordinates
        for (const [key, value] of Object.entries(map)) {
            [...value].forEach((item, index) => {
                populateState(sample.find(samp => samp.id === item), index * 100, key * iconDragYDistance)
            })
        }

        let stateToReturn = {};
        stateToReturn.boxes = boxes;
        stateToReturn.children = children;
        stateToReturn.config = config;
        return stateToReturn;
    }

    return <></>
}