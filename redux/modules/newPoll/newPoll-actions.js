import { UPDATE_TITLE } from './newPoll-constants';

export const updateTitle = (value) => {
    return {
        type: UPDATE_TITLE,
        value
    }
};