// all values are in pixels
export const levelCount = 20;
export const levelsInViewPortCount = 6;

export const levelHeight = 120;
export const iconDiameter = 50;
export const levelSeparatorWidth = 1;
export const iconDragXDistance = iconDiameter;
export const iconDragYDistance = levelHeight + levelSeparatorWidth;
export const iconSpacingYMargin = (levelHeight - iconDiameter) / 2;

export const BoxTypeClasses = {
    "spiral-icon": {
        title: {
            input: "TEXT"
        },
        question: {
            input: "TEXT"
        },
        answers: {
            input: "TEXT_ARRAY"
        }
    },
    "equals-icon": {
        someConfig: "HERE"
    },
    "pic-icon": {
        someConfig: "HERE"
    }
};