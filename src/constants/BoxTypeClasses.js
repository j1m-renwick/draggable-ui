// FREETEXT
// SINGLE
// FREETEXTSHORT
// - Add triage level and group score fields
// - Add 1st / 3rd person data
// fix FREETEXT to have no answer




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
    "single": {
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
    "single": "Two Options",
    "pic-icon": "Pic Icon"
};

export const exportTypeMap = {
    "free-text": "FREETEXT",
    "single": "SINGLE",
    "pic-icon": "PICICON"
};