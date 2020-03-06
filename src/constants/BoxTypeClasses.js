export const BoxTypeClasses = {
    "spiral-icon": {
        title: {
            input: "TEXT"
        },
        question: {
            input: "TEXT"
        },
        answers: {
            input: "ANSWER_TEXT_ARRAY",
            linkable: true
        }
    },
    "equals-icon": {
        title: {
            input: "TEXT"
        },
        question: {
            input: "TEXT"
        },
        answers: {
            alias: "answer",
            input: "ANSWER_TEXT",
            linkable: true
        }
    },
    "pic-icon": {
        title: {
            input: "TEXT"
        },
        question: {
            input: "TEXT"
        },
        answers: {
            alias: "answer",
            input: "IMAGE_UPLOAD_URL",
            linkable: true
        }
    }
};