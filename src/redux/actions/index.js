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

export const boxUnfocused = () => {
    return {
        type: 'BOX_UNFOCUSED'
    }
};

export const boxCreated = () => ({
    type: 'BOX_CREATED'
});

export const boxDeleted = () => ({
    type: 'BOX_DELETED'
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

export const loadingInitiated = (data) => ({
    type: 'LOADING_INITIATED',
    savedData: data
});

export const dataLoaded = (data) => ({
    type: 'DATA_LOADED',
    savedData: data
});

export const linkageStarted = (reference) => ({
    type: 'LINKAGE_STARTED',
    reference: reference
});

export const linkageFinished = () => ({
    type: 'LINKAGE_FINISHED'
});

export const linkHoverStarted = (linkedId) => ({
    type: 'LINK_HOVER_STARTED',
    linkedId: linkedId
});

export const linkHoverFinished = (linkedId) => ({
    type: 'LINK_HOVER_FINISHED',
    linkedId: linkedId
});

export const TemplateDetailsUpdated = (key, value) => ({
    type: 'TEMPLATE_DETAILS_UPDATED',
    key: key,
    value: value
});