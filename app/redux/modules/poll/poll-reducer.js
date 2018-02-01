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
    SAVE_VOTES_END,
    SET_VOTE_ERROR,
    REMOVE_VOTE_ERROR,
    POLL_CHECK_CLICKED_BETA
 } from './poll-constants';

const initialState = {
    poll: {},
    vote: null,
    votes: [],
    saving: false,
    pollCheckList: [],
    voteError: false
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
        case POLL_CHECK_CLICKED_BETA: 
            /** Check if is in array*/
            let indexAt = state.votes.indexOf(action.index);
            if(indexAt == -1) {
                console.log('Added', action.index)
                return { 
                    ...state,
                    votes: [...state.votes, action.index]
                }
            } else {
                console.log('Removed', action.index);
                return {
                    ...state,
                    votes: state.votes.filter(item => item !== action.index),
                }
            }
            return state;
        case POLL_CHECK_CLICKED:
            console.log('THIS IS ALSO HAPPENING')
            return state;
        case SAVE_VOTES_START:
            return Object.assign({}, state, { saving: true })
        case SAVE_VOTES_END:
            return Object.assign({}, state, { saving: false })
        case SET_VOTE_ERROR: 
            return {
                ...state,
                voteError: true
            }
        case REMOVE_VOTE_ERROR: 
            return {
                ...state,
                voteError: false
            }
        default:
            return state;
    }
}