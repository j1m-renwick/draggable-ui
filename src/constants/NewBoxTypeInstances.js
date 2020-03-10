import uuid from "uuid";

export const newBoxData = (boxType) => {
    let boxId = uuid.v4();
    let newBox = {
        id: boxId,
        type: boxType,
    };
    let newConfig = getConfigData(boxType);

    let toReturn = {};
    toReturn.id = boxId;
    toReturn.box = newBox;
    toReturn.config = newConfig;
    toReturn.children = [];

    return toReturn;
};

const getConfigData = (boxType) => {
    switch(boxType) {
        case "free-text":
            return newFreeTextBox();
        case "single":
            return newSingleBox();
        case "pic-icon":
            return newPicBox();
        default:
            console.error("could not create new box instance of type: " + boxType);
    }
};

// TODO delegate each config item to its own new instance function based on its input type
const newFreeTextBox = () => {
    let json = {
        question: {
            value: ""
        },
        guidance: {
            value: ""
        },
        answers: {}
    };
    json.answers[uuid.v4()] = {
        linkable: true
    };
    return json;
};

const newSingleBox = () => {
    let json = {
        question: {
            value: ""
        },
        guidance: {
            value: ""
        },
        answers: {}
    };
    json.answers[uuid.v4()] = {
        value: "",
        linkable: true
    };
    json.answers[uuid.v4()] = {
        value: "",
        linkable: true
    };
    return json;
};

// TODO this isn't correct
const newPicBox = () => {
    let json = {
        question: {
            value: ""
        },
        guidance: {
            value: ""
        },
        answers: {}
    };
    json.answers[uuid.v4()] = {
        value: "",
        linkable: true
    };
    return json;
};