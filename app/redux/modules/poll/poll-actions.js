import { FETCH_POLL_START, RECEIVE_POLL, FETCH_POLL_END } from './poll-constants';

////////////////////////FETCH POLL//////////////////////////

const fetchPollStart = () => {
    return {
        type: FETCH_POLL_START
    }
}

const fetchPollEnd = () => {
    return {
        type: FETCH_POLL_END
    }
}

export const fetchPoll = (slug) => {
    return function (dispatch) { 
        //Set all the options to have last as false
        dispatch(fetchPollStart())
        //Add the new field. Last is set to true when object is created.
        dispatch(fetchPollEnd())
    }
    //console.log('FETCH THIS POLL', slug);
}