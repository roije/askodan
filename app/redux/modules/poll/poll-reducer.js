import { 
    FETCH_POLL_START, 
    RECEIVE_POLL, 
    FETCH_POLL_END, 
    SET_POLL_TITLE, 
    SET_POLL_OPTIONS,
    SET_IP_BROWSER_CONFIG } from './poll-constants';

const initialState = {
    title : "",
    pollOptions: [],
    fetching: false,
    ipBrowserConfig: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POLL_START: 
            return Object.assign({}, state, { fetching: true});
        case FETCH_POLL_END:
            return Object.assign({}, state, { fetching: false })
        case SET_POLL_TITLE:
            return Object.assign({}, state, { title: action.title })
        case SET_POLL_OPTIONS: 
            return Object.assign({}, state, { pollOptions: action.options })
        case SET_IP_BROWSER_CONFIG: 
            return Object.assign({}, state, { ipBrowserConfig: action.ipBrowserConfig })
        default:
            return state;
    }
}