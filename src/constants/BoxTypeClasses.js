// TODO
// - Add triage level and group score fields
// - Add 1st / 3rd person data

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
            alias: "answer",
            input: "BLANK_ANSWER",
            linkable: true
        }
    },
    "free-text-short": {
        question: {
            input: "TEXT"
        },
        guidance: {
            alias: "guidance text",
            input: "TEXT"
        },
        answers: {
            alias: "answer",
            input: "BLANK_ANSWER",
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
    // },
    // "pic-icon": {
    //     question: {
    //         input: "TEXT"
    //     },
    //     guidance: {
    //         alias: "guidance text",
    //         input: "TEXT"
    //     },
    //     answers: {
    //         alias: "answer",
    //         input: "IMAGE_UPLOAD_URL",
    //         linkable: true
    //     }
    }
};

export const prettyNameMap = {
    "free-text": "Free Text",
    "single": "Two Options",
    "free-text-short": "Short Text"
};

export const exportTypeMap = {
    "free-text": "FREETEXT",
    "single": "SINGLE",
    "pic-icon": "FREETEXTSHORT"
};