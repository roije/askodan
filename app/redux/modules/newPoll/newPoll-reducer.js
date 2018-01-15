import { UPDATE_TITLE } from './newPoll-constants';
import { UPDATE_POLL_OPTION } from './newPoll-constants';
import { ADD_POLL_OPTION } from './newPoll-constants';
import { RESET_LAST_OPTION } from './newPoll-constants';
import { SAVE_POLL_STARTED } from './newPoll-constants';
import { SAVE_POLL_IN_PROGRESS } from './newPoll-constants';
import { SAVE_POLL_DONE } from './newPoll-constants';
import { REMOVE_FIELD } from './newPoll-constants';
import { SET_LAST_FIELD_TRUE } from './newPoll-constants'

const initialState = {
    title : "",
    pollOptions: [
        { value: "", last: false},
        { value: "", last: true}
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
                pollOptions: state.pollOptions.map((content, i) => 
                i === action.index ? {...content, value: action.value} : content)
            } 
        case ADD_POLL_OPTION: 
            return { 
                ...state,
                pollOptions: [...state.pollOptions, { value : "", last : true}]
            }
        case REMOVE_FIELD: 
            return {
                ...state,
                pollOptions: [
                    ...state.pollOptions.slice(0, action.index),
                    ...state.pollOptions.slice(action.index + 1)
                ],
            }
        case RESET_LAST_OPTION: 
            return {
                ...state,
                pollOptions: state.pollOptions.map((option, index) => 
                index === action.index ? { ...option, last: false } : option
                ) 
            }
        case SET_LAST_FIELD_TRUE:
        console.log('lastfield removed')
            return {
                ...state,
                pollOptions: state.pollOptions.map((option, index) => 
                index === state.pollOptions.length - 1 ? { ...option, last: true } : option
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