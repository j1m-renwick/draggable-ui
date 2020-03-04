// all values are in pixels
export const levelCount = 20;
export const levelsInViewPortCount = 6;
export const iconWidthsInViewPortCount = 13;

export const levelHeight = 120;
export const iconDiameter = 50;
export const levelSeparatorWidth = 1;
export const iconDragXDistance = iconDiameter;
export const iconDragYDistance = levelHeight + levelSeparatorWidth;
export const iconSpacingYMargin = (levelHeight - iconDiameter) / 2;
export const defaultIconSpacingXMargin = 100;

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