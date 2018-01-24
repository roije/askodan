import { FETCH_POLL_START, RECEIVE_POLL, FETCH_POLL_END } from "./poll-constants";

const initialState = {
    title : "",
    fetching: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POLL_START: 
            return Object.assign({}, state, { fetching: true});
        case FETCH_POLL_END:
            return Object.assign({}, state, { fetching: false })
        case RECEIVE_POLL:
            console.log(action);
            return state;
        default:
            return state;
    }
}