import { 
    FETCH_POLL_START, 
    RECEIVE_POLL, 
    FETCH_POLL_END, 
 } from './poll-constants';

const initialState = {
    poll: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POLL_START: 
            return Object.assign({}, state, { fetching: true});
        case RECEIVE_POLL: 
            return Object.assign({}, state, { poll: action.poll})
        case FETCH_POLL_END:
            return Object.assign({}, state, { fetching: false })
        default:
            return state;
    }
}