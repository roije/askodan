import { UPDATE_TITLE } from './newPoll-constants';
import { UPDATE_POLL_OPTION } from './newPoll-constants';
import { ADD_POLL_OPTION } from './newPoll-constants';
import { RESET_LAST_OPTION } from './newPoll-constants';

export const updateTitle = (value) => {
    return {
        type: UPDATE_TITLE,
        value
    }
};

export const updatePollOption = (id, value) => {
    return {
        type: UPDATE_POLL_OPTION,
        id,
        value
    }
}

const resetLast = (fieldNumber, value) => {
    return {
        type: RESET_LAST_OPTION,
        fieldNumber,
        value
    }
}

const addPollOption = () => {
    return {
        type: ADD_POLL_OPTION
    }
}

export const lastFieldFocused = (fieldNumber) => {
    return function (dispatch) { 
        dispatch(addPollOption())
        dispatch(resetLast(fieldNumber))
    }
}