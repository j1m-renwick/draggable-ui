import uuid from "uuid";

export const newBoxData = (boxType, level) => {
    let json = {
        id: uuid.v4(),
        type: boxType,
        level: level,
        children: []
    };
    json["config"] = getConfigData(boxType);
    return json;
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