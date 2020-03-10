export const BoxTypeClasses = {
    "free-text": {
        question: {
            input: "TEXT"
        },
        guidance: {
            alias: "guidance text",
            input: "TEXT"
        },
        answers: {
            input: "ANSWER_TEXT_ARRAY",
            linkable: true
        }
    },
    "equals-icon": {
        question: {
            input: "TEXT"
        },
        guidance: {
            alias: "guidance text",
            input: "TEXT"
        },
        answers: {
            alias: "answer",
            input: "ANSWER_TEXT",
            linkable: true
        }
    },
    "pic-icon": {
        question: {
            input: "TEXT"
        },
        guidance: {
            alias: "guidance text",
            input: "TEXT"
        },
        answers: {
            alias: "answer",
            input: "IMAGE_UPLOAD_URL",
            linkable: true
        }
    }
};

export const prettyNameMap = {
    "free-text": "Free Text",
    "equals-icon": "Equals Icon",
    "pic-icon": "Pic Icon"
};

export const exportTypeMap = {
    "free-text": "FREETEXT",
    "equals-icon": "EQUALSICON",
    "pic-icon": "PICICON"
};