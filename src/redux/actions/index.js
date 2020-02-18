export const boxInViewPortFocused = (id, type) => boxFocused(id, type, "VIEW_PORT");
export const boxTypeFocused = (id, type) => boxFocused(id, type, "BOX_TYPE_BAR");

const boxFocused = (id, type, focusContext) => {
    return {
        type: 'BOX_FOCUSED',
        focusContext: focusContext,
        id: id,
        focusBoxType: type
    }
};

export const boxLocationSet = (id, x, y) => ({
    type: 'BOX_LOCATION_SET',
    id: id,
    newX: x,
    newY: y
});

export const boxCreated = (id, level, x, y, boxType, config) => ({
    type: 'BOX_CREATED',
    id: id,
    level: level,
    newX: x,
    newY: y,
    boxType: boxType,
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

export const viewportScrolled = (level) => ({
    type: 'VIEWPORT_SCROLLED',
    newCurrentLevel: level
});

export const saveStateLoadingInitiated = (data) => ({
    type: 'SAVE_STATE_LOADING_INITIATED',
    savedData: data
});