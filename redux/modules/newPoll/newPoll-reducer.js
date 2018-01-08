import { UPDATE_TITLE } from './newPoll-constants';

const initialState = {
    title : "",
    questions: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TITLE:
            return Object.assign({}, state, { title: action.value});
        default:
            return state;
    }
}