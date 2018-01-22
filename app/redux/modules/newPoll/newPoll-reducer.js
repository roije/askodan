import { UPDATE_TITLE } from './newPoll-constants';
import { UPDATE_POLL_OPTION } from './newPoll-constants';
import { ADD_POLL_OPTION } from './newPoll-constants';
import { RESET_LAST_OPTION } from './newPoll-constants';
import { SAVE_POLL_STARTED } from './newPoll-constants';
import { SAVE_POLL_IN_PROGRESS } from './newPoll-constants';
import { SAVE_POLL_DONE } from './newPoll-constants';
import { REMOVE_FIELD } from './newPoll-constants';
import { SET_LAST_FIELD_TRUE } from './newPoll-constants'
import { RESET_LAST } from './newPoll-constants';
import { SET_LAST_TRUE } from './newPoll-constants';
import { UPDATE_IP_BROWSER_CONFIG } from './newPoll-constants';
import { GENERAL_CONFIG_CHECK_CLICKED } from './newPoll-constants';


const initialState = {
    title : "",
    pollOptions: [
        { value: "", last: false},
        { value: "", last: true}
    ],
    pollConfigs: {
        "ipBrowserConfigs" : [
            { "text" : "Browser tvífaldan ikki loyvd", "value" : 1},
            { "text" : "IP tvífaldan ikki loyvd", "value" : 2},
            { "text" : "Eingin avmarking", "value" : 3},
        ],
        "generalVotingConfigs": [
            { "text" : "Fleiri svar loyvd", "checked" : false, "id": 1},
            { "text" : "Spam fyribyrging", "checked" : false, "id" : 2},
            { "text" : "Privat spurnarkanning", "checked" : false, "id" : 3}, 
        ]
    },
    ipBrowserConfigSelected: 1,
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
        /* Sets every last field in options to be false */ 
        case RESET_LAST: 
            return {
                ...state,
                pollOptions: state.pollOptions.map((option) => {
                    return { ...option, last: false }
                })
            }
        /* Sets last option field to true*/
        case SET_LAST_TRUE:
            return {
                ...state,
                pollOptions: state.pollOptions.map((option, index) => 
                index === state.pollOptions.length - 1 ? { ...option, last: true } : option
                ) 
            }
        case UPDATE_IP_BROWSER_CONFIG:
                return Object.assign({}, state, { ipBrowserConfigSelected : action.value});
        case GENERAL_CONFIG_CHECK_CLICKED: 
            //https://stackoverflow.com/questions/40096036/how-to-update-a-value-of-a-nested-object-in-a-reducer
            return { 
                ...state, 
                pollConfigs: {
                    ...state.pollConfigs,
                    generalVotingConfigs: state.pollConfigs.generalVotingConfigs.map((config, i) =>
                    i === action.value ? {...config, checked: !config.checked} : config)
                } 
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