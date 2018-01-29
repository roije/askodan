import { 
    SHOW_RESULTS,
    FETCH_RESULTS_START,
    RECEIVE_RESULTS,
    FETCH_RESULTS_END,
    TAB_CHART_SELECTED
} from './pollResults-constants';
const initialState = {
    showing: true,
    fetching: false,
    results: [],
    activeTab: "pie"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_RESULTS: 
            return Object.assign({}, state, { showing: true})
        case FETCH_RESULTS_START: 
            return Object.assign({}, state, { fetching: true})
        case FETCH_RESULTS_END: 
            return Object.assign({}, state, { fetching: false})
        case RECEIVE_RESULTS: 
            return Object.assign({}, state, { results: action.results})
        case TAB_CHART_SELECTED: 
            return Object.assign({}, state, { activeTab: action.tab});
        default:
            return state;
    }
}