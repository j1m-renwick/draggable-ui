export const boxFocused = id => ({
    type: 'BOX_FOCUSED',
    id: id
});

export const boxInitialised = (id, x, y) => ({
    type: 'BOX_INITIALISED',
    id: id,
    newX: x,
    newY: y
});

export const boxDragged = (id, x, y) => ({
    type: 'BOX_DRAGGED',
    id: id,
    newX: x,
    newY: y
});

export const scrollButtonClicked = (direction) => ({
    type: 'SCROLL_BUTTON_CLICKED',
    scrollDirection: direction
});