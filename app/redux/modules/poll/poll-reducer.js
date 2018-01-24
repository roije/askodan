import { FETCH_POLL_START, FETCH_POLL_END } from "./poll-constants";

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
        default:
            return state;
    }
}