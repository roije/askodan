import { UPDATE_TITLE } from './newPoll-constants';
import { UPDATE_POLL_OPTION } from './newPoll-constants';

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