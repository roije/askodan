import { 
    SHOW_RESULTS,
    FETCH_RESULTS_START,
    RECEIVE_RESULTS,
    FETCH_RESULTS_END,
    TAB_CHART_SELECTED,
    SCROLL_RESULTS_START,
    SCROLL_RESULTS_END
} from './pollResults-constants';
const initialState = {
    showing: false,
    fetching: false,
    results: [],
    activeTab: "pie",
    scroll: true
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
        case SCROLL_RESULTS_START:
            return {
                ...state,
                scroll: false
            }
        case SCROLL_RESULTS_END:
            return {
                ...state,
                scroll: true
            }
        default:
            return state;
    }
}