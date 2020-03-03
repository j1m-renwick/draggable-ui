import {Nav} from "react-bootstrap";
import React from "react";
import saveAs from 'file-saver';
import {store} from "./redux/store";

export function SaveNavLink() {

    function saveFile() {
        // TODO properly transform state and have a pop up with filename to save as
        let blobToSave = new Blob([JSON.stringify(store.getState())], {type: "text/plain;charset=utf-8"});
        let dateTime = new Date();
        let date = dateTime.toLocaleDateString().replace(/\/|\\/g, "-");
        let time = dateTime.toLocaleTimeString().replace(/:/g, ".");
        saveAs(blobToSave, "template " + date + " at " + time + ".json");
    }

    return <Nav.Link onSelect={() => saveFile()} href="#save">Save</Nav.Link>


}