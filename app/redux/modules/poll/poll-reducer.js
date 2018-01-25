import { 
    FETCH_POLL_START, 
    RECEIVE_POLL, 
    FETCH_POLL_END, 
    SET_POLL_TITLE, 
    SET_POLL_OPTIONS,
    SET_IP_BROWSER_CONFIG,
    SET_POLL_GENERAL_CONFIGS,
    SET_GENERAL_CONFIG_MULTIPLE_ANSWERS,
    SET_GENERAL_CONFIG_SPAM_PREVENTION,
    SET_GENERAL_CONFIG_PRIVATE } from './poll-constants';

import configEnums from '../../../components/poll-components/poll-helpers/config_enums';

console.log(configEnums);

const initialState = {
    title : "",
    pollOptions: [],
    fetching: false,
    ipBrowserConfig: 0,
    multiple_answers: false,
    spam_prevention: false,
    private: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POLL_START: 
            return Object.assign({}, state, { fetching: true});
        case FETCH_POLL_END:
            return Object.assign({}, state, { fetching: false })
        case SET_POLL_TITLE:
            return Object.assign({}, state, { title: action.title })
        case SET_POLL_OPTIONS: 
            return Object.assign({}, state, { pollOptions: action.options })
        case SET_IP_BROWSER_CONFIG: 
            return Object.assign({}, state, { ipBrowserConfig: action.ipBrowserConfig })
        case SET_POLL_GENERAL_CONFIGS: 
            //return Object.assign({}, state, { generalConfigs: action.generalConfigs })
            return state;
        case SET_GENERAL_CONFIG_MULTIPLE_ANSWERS:
            return Object.assign({}, state, { multiple_answers: action.value })
        case SET_GENERAL_CONFIG_SPAM_PREVENTION:
            return Object.assign({}, state, { spam_prevention: action.value })
        case SET_GENERAL_CONFIG_PRIVATE:
            return Object.assign({}, state, { private: action.value })
        default:
            return state;
    }
}