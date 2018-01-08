import { UPDATE_TITLE } from './newPoll-constants';
import { UPDATE_POLL_OPTION } from './newPoll-constants';
import { ADD_POLL_OPTION } from './newPoll-constants';
import { RESET_LAST_OPTION } from './newPoll-constants';

const initialState = {
    title : "",
    pollOptions: [
        { number: 1, value: "", last: false},
        { number: 2, value: "", last: true}
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
        case ADD_POLL_OPTION: 
            let number = state.pollOptions.length + 1;
            return { 
                ...state,
                pollOptions: [...state.pollOptions, { number, value : "", last : true}]
            }
        case RESET_LAST_OPTION: 
            return {
                ...state,
                pollOptions: state.pollOptions.map(option => option.number === action.fieldNumber ?
                    // transform the one with a matching id
                    { ...option, last: false } : 
                    // otherwise return original option
                    option
                ) 
            }
        default:
            return state;
    }
}