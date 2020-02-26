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
        case "spiral-icon":
            return newSpiralIcon();
        case "equals-icon":
            return newEqualsIcon();
        case "pic-icon":
            return newPicIcon();
        default:
            console.error("could not create new box instance of type: " + boxType);
    }
};

// TODO delegate each config item to its own new instance function based on its input type
const newSpiralIcon = () => {
    let json = {
        title: {
            value: ""
        },
        question: {
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

const newEqualsIcon = () => {
    return {
        title: {
            value: ""
        },
        question: {
            value: ""
        },
        answer: {
            value: "",
            linkable: true
        }
    }
};

// TODO this isn't correct
const newPicIcon = () => {
    return {
        title: {
            value: ""
        },
        question: {
            value: ""
        },
        answer: {
            value: "",
            linkable: true
        },
    }
};