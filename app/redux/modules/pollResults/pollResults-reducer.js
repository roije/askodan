import { 
    SHOW_RESULTS
} from './pollResults-constants';

const initialState = {
    showing: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_RESULTS: 
            return Object.assign({}, state, { showing: true})
        default:
            return state;
    }
}