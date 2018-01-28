import { 
    SHOW_RESULTS,
    FETCH_RESULTS_START,
    RECEIVE_RESULTS,
    FETCH_RESULTS_END
} from './pollResults-constants';
const initialState = {
    showing: false,
    fetching: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_RESULTS: 
            return Object.assign({}, state, { showing: true})
        case FETCH_RESULTS_START: 
            return Object.assign({}, state, { fetching: true})
        case FETCH_RESULTS_END: 
            return Object.assign({}, state, { fetching: false})
        default:
            return state;
    }
}