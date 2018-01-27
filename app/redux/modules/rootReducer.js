import { combineReducers } from 'redux'

import newPollReducer from './newPoll/newPoll-reducer.js'; 
import pollReducer from './poll/poll-reducer.js';
import pollResultsReducer from './pollResults/pollResults-reducer.js';

export default combineReducers({
    newPollReducer,
    pollReducer,
    pollResultsReducer
})