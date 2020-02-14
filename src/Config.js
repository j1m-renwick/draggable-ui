import React from "react";
import {useSelector} from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {sample} from "./sample";
import {iconDragYDistance, levelsInViewPortCount} from "./constants";


export function Config(props) {

    const additionalStyling = {
        "height": (iconDragYDistance * levelsInViewPortCount) + "px"
    };

    const id = useSelector(state => state.focusedBoxId);
    const boxes = useSelector(state => state.boxes);

    function getConfig(id) {
        let sampleItem = sample.find(item => item.id === id);
        if (sampleItem) {
            return sampleItem.config;
        } else {
            return boxes.find(item => item.id === id).config
        }
    }

    if(id) {

        let config = getConfig(id);

        return (
            <div className="config" style={additionalStyling}>
                {
                    Object.entries(config).map(item => {
                        return (
                            <div key={item[0]}>
                                <label className="capitalise" htmlFor={item[0]}>{item[0]}</label>
                                {
                                    Array.isArray(item[1]) ?
                                    item[1].map((it, index) => (
                                        <div key={it}>
                                            <InputGroup className="mb-3">
                                                <FormControl id={index} defaultValue={it}/>
                                            </InputGroup>
                                        </div>
                                    )) :
                                    <div key={item[1]}>
                                        <InputGroup className="mb-3">
                                            <FormControl id={item[0]} defaultValue={item[1]}/>
                                        </InputGroup>
                                    </div>
                                }
                            </div>
                        )})
                }
            </div>
        )
    } else {
        return (
            <div className="config">NOTHING</div>
        )
    }
}