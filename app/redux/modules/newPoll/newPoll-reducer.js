import { UPDATE_TITLE } from './newPoll-constants';
import { UPDATE_POLL_OPTION } from './newPoll-constants';
import { ADD_POLL_OPTION } from './newPoll-constants';
import { RESET_LAST_OPTION } from './newPoll-constants';
import { SAVE_POLL_STARTED } from './newPoll-constants';
import { SAVE_POLL_IN_PROGRESS } from './newPoll-constants';
import { SAVE_POLL_DONE } from './newPoll-constants';
import { REMOVE_FIELD } from './newPoll-constants';

const initialState = {
    title : "",
    pollOptions: [
        { number: 1, value: "", last: false},
        { number: 2, value: "", last: true}
    ],
    saving: false
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
            /**
             * DELETE_ITEM: (state, action) => ({
                ...state,
                items: state.items.filter(item => item !== action.payload),
                lastUpdated: Date.now() 
                })
             */
        case REMOVE_FIELD: 
            return {
                ...state,
                pollOptions: state.pollOptions.filter(pollOption => pollOption.number !== action.fieldNumber)
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
        case SAVE_POLL_STARTED: 
            return {
                ...state,
                saving: true
            }
        case SAVE_POLL_DONE: 
            return {
                ...state,
                saving: false
            }
        default:
            return state;
    }
}