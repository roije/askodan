import { UPDATE_TITLE } from './newPoll-constants';
import { UPDATE_POLL_OPTION } from './newPoll-constants';

const initialState = {
    title : "",
    pollOptions: [
        { number: 1, value: "fuck"},
        { number: 2, value: "hehe"}
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TITLE:
            return Object.assign({}, state, { title: action.value});
        case UPDATE_POLL_OPTION: 
            return {
                ...state,
                pollOptions: state.pollOptions.map(option => option.number === action.id ?
                    // transform the one with a matching id
                    { ...option, value: action.value } : 
                    // otherwise return original option
                    option
                ) 
            }
        default:
            return state;
    }
}