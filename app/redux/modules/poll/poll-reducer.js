import { 
    FETCH_POLL_START, 
    RECEIVE_POLL, 
    FETCH_POLL_END, 
    POLL_RADIO_OPTION_CLICKED,
    SAVE_VOTE_START,
    SAVE_VOTE_END,
    CREATE_POLL_CHECK_LIST,
    POLL_CHECK_CLICKED,
    SAVE_VOTES_START,
    SAVE_VOTES_END
 } from './poll-constants';

const initialState = {
    poll: {},
    vote: null,
    votes: [],
    saving: false,
    pollCheckList: []
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
        case CREATE_POLL_CHECK_LIST:
            return Object.assign({}, state, { pollCheckList: action.checkList})
        case POLL_CHECK_CLICKED: 
            return {
                ...state,
                pollCheckList: state.pollCheckList.map((option, i) => 
                i === action.index ? {...option, checked: !option.checked} : option) 
            }
        case SAVE_VOTES_START:
            return Object.assign({}, state, { saving: true })
        case SAVE_VOTES_END:
            return Object.assign({}, state, { saving: false })
        default:
            return state;
    }
}