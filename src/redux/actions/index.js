export const boxFocused = id => ({
    type: 'BOX_FOCUSED',
    id: id
});

export const boxDragged = (id, position) => ({
    type: 'BOX_DRAGGED',
    id: id,
    newX: position.x,
    newY: position.y
});