import {Nav} from "react-bootstrap";
import React from "react";
import saveAs from 'file-saver';
import {store} from "./redux/store";
import {iconDragYDistance} from "./config/constants";

export function SaveNavLink() {

    function saveFile() {
        // TODO have a pop up with filename to save as
        let blobToSave = new Blob([JSON.stringify(transformToSaveFile(store.getState()))], {type: "text/plain;charset=utf-8"});
        let dateTime = new Date();
        let date = dateTime.toLocaleDateString().replace(/\/|\\/g, "-");
        let time = dateTime.toLocaleTimeString().replace(/:/g, ".");
        saveAs(blobToSave, "UI FLOW " + date + " at " + time + ".json");
    }

    function transformToSaveFile(state) {
        // TODO add project details in
        const saveFileToReturn = {};
        saveFileToReturn.projectDetails = state.projectDetails;
        saveFileToReturn.data = Object.entries(state.boxes).map(entry => {
            let box = {};
            let entryKey = entry[0];
            let entryValue = entry[1];
            box.id = entryKey;
            box.type = entryValue.type;
            box.level = entryValue.y / iconDragYDistance;
            box.config = state.config[entryKey];
            box.children = state.children[entryKey];
            return box;
        });
        return saveFileToReturn;
    }

    return <Nav.Link onClick={saveFile}>Save</Nav.Link>

}