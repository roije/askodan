import { 
    FETCH_POLL_START, 
    RECEIVE_POLL, 
    FETCH_POLL_END, 
    POLL_RADIO_OPTION_CLICKED,
    SAVE_VOTE_START,
    SAVE_VOTE_END
 } from './poll-constants';

const initialState = {
    poll: {},
    vote: null,
    votes: [],
    saving: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POLL_START: 
            return Object.assign({}, state, { fetching: true});
        case RECEIVE_POLL: 
            return Object.assign({}, state, { poll: action.poll})
        case FETCH_POLL_END:
            return Object.assign({}, state, { fetching: false })
        case POLL_RADIO_OPTION_CLICKED:
            return Object.assign({}, state, { vote: action.index })
        case SAVE_VOTE_START: 
            return Object.assign({}, state, { saving: true })
        case SAVE_VOTE_END:
            return Object.assign({}, state, { saving: false })
        default:
            return state;
    }
}