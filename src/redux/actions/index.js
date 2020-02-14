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

export const boxCreated = (id, level, x, y, config) => ({
    type: 'BOX_CREATED',
    id: id,
    level: level,
    newX: x,
    newY: y,
    config: config
});

export const boxConfigUpdated = (id, key, value) => ({
    type: 'BOX_CONFIG_UPDATED',
    id: id,
    key: key,
    value: value
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

export const saveStateLoadingInitiated = (data) => ({
    type: 'SAVE_STATE_LOADING_INITIATED',
    savedData: data
});